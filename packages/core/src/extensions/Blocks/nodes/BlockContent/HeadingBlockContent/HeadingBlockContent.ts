import { InputRule } from "@tiptap/core";
import {
  createBlockSpecFromStronglyTypedTiptapNode,
  createStronglyTypedTiptapNode,
} from "../../../api/blocks/internal";
import { PropSchema } from "../../../api/blocks/types";
import { defaultProps } from "../../../api/defaultProps";
import { createDefaultBlockDOMOutputSpec } from "../defaultBlockHelpers";

export const headingPropSchema = {
  ...defaultProps,
  level: { default: 1, values: [1, 2, 3] as const },
} satisfies PropSchema;

const HeadingBlockContent = createStronglyTypedTiptapNode({
  name: "heading",
  content: "inline*",
  group: "blockContent",
  addAttributes() {
    return {
      level: {
        default: 1,
        // instead of "level" attributes, use "data-level"
        parseHTML: (element) => {
          const attr = element.getAttribute("data-level")!;
          const parsed = parseInt(attr);
          if (isFinite(parsed)) {
            return parsed;
          }
          return undefined;
        },
        renderHTML: (attributes) => {
          return {
            "data-level": (attributes.level as number).toString(),
          };
        },
      },
    };
  },

  addInputRules() {
    return [
      ...[1, 2, 3].map((level) => {
        // Creates a heading of appropriate level when starting with "#", "##", or "###".
        return new InputRule({
          find: new RegExp(`^(#{${level}})\\s$`),
          handler: ({ state, chain, range }) => {
            chain()
              .BNUpdateBlock(state.selection.from, {
                type: "heading",
                props: {
                  level: level as any,
                },
              })
              // Removes the "#" character(s) used to set the heading.
              .deleteRange({ from: range.from, to: range.to });
          },
        });
      }),
    ];
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-1": () =>
        this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
          type: "heading",
          props: {
            level: 1 as any,
          },
        }),
      "Mod-Alt-2": () =>
        this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
          type: "heading",
          props: {
            level: 2 as any,
          },
        }),
      "Mod-Alt-3": () =>
        this.editor.commands.BNUpdateBlock(this.editor.state.selection.anchor, {
          type: "heading",
          props: {
            level: 3 as any,
          },
        }),
    };
  },
  parseHTML() {
    return [
      {
        // TODO: also do for other blocks?
        tag: "div[data-content-type=" + this.name + "]",
        getAttrs: (element) => {
          if (typeof element === "string") {
            return false;
          }

          return {
            level: element.getAttribute("data-level"),
          };
        },
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return createDefaultBlockDOMOutputSpec(
      this.name,
      `h${node.attrs.level}`,
      {
        ...(this.options.domAttributes?.blockContent || {}),
        ...HTMLAttributes,
      },
      this.options.domAttributes?.inlineContent || {}
    );
  },
});

export const Heading = createBlockSpecFromStronglyTypedTiptapNode(
  HeadingBlockContent,
  headingPropSchema
);
