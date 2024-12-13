import { Block } from "@blocknote/core";
import { useBlockNoteEditor, useComponentsContext } from "@blocknote/react";
import { TextSelection } from "prosemirror-state";
import { RiArrowGoBackFill } from "react-icons/ri";

import { useAIDictionary } from "../../../i18n/useAIDictionary.js";

import { AIInlineToolbarProsemirrorPlugin } from "../../../extensions/AIInlineToolbar/AIInlineToolbarPlugin.js";
import { AIInlineToolbarProps } from "../AIInlineToolbarProps.js";

export const RevertButton = (
  props: AIInlineToolbarProps & {
    originalBlocks: Block<any, any, any>[];
  }
) => {
  const dict = useAIDictionary();
  const Components = useComponentsContext()!;

  const editor = useBlockNoteEditor<any, any, any>();

  // TODO: simplify?
  const plugin = editor.extensions
    .aiInlineToolbar as AIInlineToolbarProsemirrorPlugin;

  if (!editor.isEditable) {
    return null;
  }

  return (
    <Components.Toolbar.Button
      className={"bn-button"}
      icon={<RiArrowGoBackFill />}
      mainTooltip={dict.ai_inline_toolbar.revert}
      label={dict.ai_inline_toolbar.revert}
      onClick={() => {
        plugin.close();

        const oldDocSize = editor._tiptapEditor.state.doc.nodeSize;
        const startPos = editor._tiptapEditor.state.selection.from;
        const endPos = editor._tiptapEditor.state.selection.to;
        const replacementBlocks = editor.getSelection()?.blocks || [
          editor.getTextCursorPosition().block,
        ];

        editor.replaceBlocks(replacementBlocks, props.originalBlocks as any[]);

        const newDocSize = editor._tiptapEditor.state.doc.nodeSize;

        editor._tiptapEditor.view.dispatch(
          editor._tiptapEditor.state.tr.setSelection(
            TextSelection.create(
              editor._tiptapEditor.state.doc,
              startPos,
              endPos + newDocSize - oldDocSize
            )
          )
        );

        editor.focus();
      }}
    />
  );
};
