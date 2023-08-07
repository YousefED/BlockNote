import { ReactNode } from "react";
import { BlockSchema } from "@blocknote/core";

import { DragHandleMenuProps } from "../DragHandleMenu/DragHandleMenu";
import { DragHandleMenuItem } from "../DragHandleMenu/DragHandleMenuItem";

export const RemoveBlockButton = <BSchema extends BlockSchema>(
  props: DragHandleMenuProps<BSchema> & { children: ReactNode }
) => {
  return (
    <DragHandleMenuItem
      onClick={() => props.editor.removeBlocks([props.block])}>
      {props.children}
    </DragHandleMenuItem>
  );
};
