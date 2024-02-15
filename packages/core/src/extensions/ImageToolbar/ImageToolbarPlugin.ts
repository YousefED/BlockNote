import { EditorState, Plugin, PluginKey } from "prosemirror-state";
import { EditorView } from "prosemirror-view";

import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import {
  BlockSchema,
  InlineContentSchema,
  SpecificBlock,
  StyleSchema,
} from "../../schema";
import { UiElementPosition } from "../../extensions-shared/UiElementPosition";
import { EventEmitter } from "../../util/EventEmitter";

export type ImageToolbarState<
  B extends BlockSchema,
  I extends InlineContentSchema,
  S extends StyleSchema
> = UiElementPosition & {
  block: SpecificBlock<B, "image", I, S>;
};

export class ImageToolbarView<
  BSchema extends BlockSchema,
  I extends InlineContentSchema,
  S extends StyleSchema
> {
  public state?: ImageToolbarState<BSchema, I, S>;
  public emitUpdate: () => void;

  public prevWasEditable: boolean | null = null;

  constructor(
    private readonly pluginKey: PluginKey,
    private readonly pmView: EditorView,
    emitUpdate: (state: ImageToolbarState<BSchema, I, S>) => void
  ) {
    this.emitUpdate = () => {
      if (!this.state) {
        throw new Error("Attempting to update uninitialized image toolbar");
      }

      emitUpdate(this.state);
    };

    pmView.dom.addEventListener("mousedown", this.mouseDownHandler);

    pmView.dom.addEventListener("dragstart", this.dragstartHandler);

    pmView.dom.addEventListener("blur", this.blurHandler);

    document.addEventListener("scroll", this.scrollHandler);
  }

  mouseDownHandler = () => {
    if (this.state?.show) {
      this.state.show = false;
      this.emitUpdate();
    }
  };

  // For dragging the whole editor.
  dragstartHandler = () => {
    if (this.state?.show) {
      this.state.show = false;
      this.emitUpdate();
    }
  };

  blurHandler = (event: FocusEvent) => {
    const editorWrapper = this.pmView.dom.parentElement!;

    // Checks if the focus is moving to an element outside the editor. If it is,
    // the toolbar is hidden.
    if (
      // An element is clicked.
      event &&
      event.relatedTarget &&
      // Element is inside the editor.
      (editorWrapper === (event.relatedTarget as Node) ||
        editorWrapper.contains(event.relatedTarget as Node))
    ) {
      return;
    }

    if (this.state?.show) {
      this.state.show = false;
      this.emitUpdate();
    }
  };

  scrollHandler = () => {
    if (this.state?.show) {
      const blockElement = document.querySelector(
        `[data-node-type="blockContainer"][data-id="${this.state.block.id}"]`
      )!;

      this.state.referencePos = blockElement.getBoundingClientRect();
      this.emitUpdate();
    }
  };

  update(view: EditorView, prevState: EditorState) {
    const pluginState: {
      block: SpecificBlock<BSchema, "image", I, S>;
    } = this.pluginKey.getState(view.state);

    if (!this.state?.show && pluginState.block) {
      const blockElement = document.querySelector(
        `[data-node-type="blockContainer"][data-id="${pluginState.block.id}"]`
      )!;

      this.state = {
        show: true,
        referencePos: blockElement.getBoundingClientRect(),
        block: pluginState.block,
      };

      this.emitUpdate();

      return;
    }

    if (
      !view.state.selection.eq(prevState.selection) ||
      !view.state.doc.eq(prevState.doc)
    ) {
      if (this.state?.show) {
        this.state.show = false;

        this.emitUpdate();
      }
    }
  }

  destroy() {
    this.pmView.dom.removeEventListener("mousedown", this.mouseDownHandler);

    this.pmView.dom.removeEventListener("dragstart", this.dragstartHandler);

    this.pmView.dom.removeEventListener("blur", this.blurHandler);

    document.removeEventListener("scroll", this.scrollHandler);
  }
}

export const imageToolbarPluginKey = new PluginKey("ImageToolbarPlugin");

export class ImageToolbarProsemirrorPlugin<
  BSchema extends BlockSchema,
  I extends InlineContentSchema,
  S extends StyleSchema
> extends EventEmitter<any> {
  private view: ImageToolbarView<BSchema, I, S> | undefined;
  public readonly plugin: Plugin;

  constructor(_editor: BlockNoteEditor<BSchema, I, S>) {
    super();
    this.plugin = new Plugin<{
      block: SpecificBlock<BSchema, "image", I, S> | undefined;
    }>({
      key: imageToolbarPluginKey,
      view: (editorView) => {
        this.view = new ImageToolbarView(
          // editor,
          imageToolbarPluginKey,
          editorView,
          (state) => {
            this.emit("update", state);
          }
        );
        return this.view;
      },
      state: {
        init: () => {
          return {
            block: undefined,
          };
        },
        apply: (transaction) => {
          const block: SpecificBlock<BSchema, "image", I, S> | undefined =
            transaction.getMeta(imageToolbarPluginKey)?.block;

          return {
            block,
          };
        },
      },
    });
  }

  public onUpdate(callback: (state: ImageToolbarState<BSchema, I, S>) => void) {
    return this.on("update", callback);
  }
}
