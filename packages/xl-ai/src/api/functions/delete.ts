import { BlockNoteEditor } from "@blocknote/core";

const schema = {
  name: "delete",
  description: "Delete a block",
  parameters: {
    id: {
      type: "string",
      description: "id of block to delete",
    },
  },
  required: ["id"],
};

function applyOperation(
  operation: any,
  editor: BlockNoteEditor,
  _operationContext: any,
  options: {
    idsSuffixed: boolean;
  }
) {
  let id = operation.id;
  if (options.idsSuffixed) {
    id = id.slice(0, -1);
  }

  editor.removeBlocks([id]);
}

function validateOperation(
  operation: any,
  editor: BlockNoteEditor,
  options: {
    idsSuffixed: boolean;
  }
) {
  if (operation.type !== schema.name) {
    return false;
  }

  let id = operation.id;
  if (options.idsSuffixed) {
    if (!id?.endsWith("$")) {
      return false;
    }

    id = id.slice(0, -1);
  }

  const block = editor.getBlock(id);

  if (!block) {
    return false;
  }

  return true;
}

export const deleteFunction = {
  schema,
  apply: applyOperation,
  validate: validateOperation,
};
