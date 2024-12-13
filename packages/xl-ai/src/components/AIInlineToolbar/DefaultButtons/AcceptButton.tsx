import { useBlockNoteEditor, useComponentsContext } from "@blocknote/react";
import { RiCheckFill } from "react-icons/ri";

import { AIInlineToolbarProsemirrorPlugin } from "../../../extensions/AIInlineToolbar/AIInlineToolbarPlugin.js";
import { useAIDictionary } from "../../../i18n/useAIDictionary.js";

export const AcceptButton = () => {
  const dict = useAIDictionary();
  const Components = useComponentsContext()!;

  const editor = useBlockNoteEditor<any, any, any>();

  if (!editor.isEditable) {
    return null;
  }

  return (
    <Components.Toolbar.Button
      className={"bn-button"}
      icon={<RiCheckFill />}
      mainTooltip={dict.ai_inline_toolbar.accept}
      label={dict.ai_inline_toolbar.accept}
      onClick={() =>
        (
          editor.extensions.aiInlineToolbar as AIInlineToolbarProsemirrorPlugin
        ).close()
      } // TODO
    />
  );
};
