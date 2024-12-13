import {
  BlockSchema,
  DefaultBlockSchema,
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  InlineContentSchema,
  StyleSchema,
} from "@blocknote/core";
import {
  SideMenuController as SideMenuCoreController,
  SideMenuProps,
} from "@blocknote/react";
import { FC } from "react";
import { SideMenu } from "./SideMenu.js";

export const SideMenuController = <
  BSchema extends BlockSchema = DefaultBlockSchema,
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
>(props: {
  sideMenu?: FC<SideMenuProps<BSchema, I, S>>;
}) => <SideMenuCoreController sideMenu={props.sideMenu || SideMenu} />;
