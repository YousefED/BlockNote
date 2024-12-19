declare namespace JSX {
  interface IntrinsicElements {
    "office:document-content": any;
    "office:body": any;
    "office:text": any;
    "office:automatic-styles": any;
    "style:style": any;
    "style:text-properties": any;
    "text:p": any;
    "text:h": any;
    "text:list-item": any;
    "text:list": any;
    "text:a": any;
    "text:span": any;
    "draw:frame": any;
    "draw:image": any;
    "table:table": any;
    "table:table-row": any;
    "table:table-cell": any;
    "manifest:manifest": any;
    "manifest:file-entry": any;
    "style:paragraph-properties": any;
    "style:background-fill": any;
  }

  interface IntrinsicAttributes {
    "text:style-name"?: string;
    "style:style-name"?: string;
    "style:name"?: string;
    "style:family"?: string;
    "style:background-fill"?: string;
    "draw:fill"?: string;
    "draw:fill-color"?: string;
  }
}
