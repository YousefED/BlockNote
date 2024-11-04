import { DefaultStyleSchema } from "@blocknote/core";
import { StyleMapping } from "@blocknote/core/src/exporter/mapping.js";
import { CSSProperties } from "react";

export const reactEmailStyleMappingForDefaultSchema: StyleMapping<
  DefaultStyleSchema,
  CSSProperties
> = {
  bold: (val) => {
    if (!val) {
      return {};
    }
    return {
      fontWeight: "bold",
    };
  },
  italic: (val) => {
    if (!val) {
      return {};
    }
    return {
      fontStyle: "italic",
    };
  },
  underline: (val) => {
    if (!val) {
      return {};
    }
    return {
      textDecoration: "underline", // TODO: could conflict with strike
    };
  },
  strike: (val) => {
    if (!val) {
      return {};
    }
    return {
      textDecoration: "line-through",
    };
  },
  backgroundColor: (val) => {
    return {
      backgroundColor: val,
    };
  },
  textColor: (val) => {
    if (!val) {
      return {};
    }
    return {
      color: val,
    };
  },
  // TODO? <code>?
  code: (val) => {
    if (!val) {
      return {};
    }
    return {
      fontFamily: "Courier",
    };
  },
};