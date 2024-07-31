// generated by dev-scripts/examples/gen.ts
  export const examples = {
  "basic": {
    "pathFromRoot": "examples/01-basic",
    "slug": "basic",
    "projects": [
      {
        "projectSlug": "minimal",
        "fullSlug": "basic/minimal",
        "pathFromRoot": "examples/01-basic/01-minimal",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic"
          ]
        },
        "title": "Basic Setup",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "block-objects",
        "fullSlug": "basic/block-objects",
        "pathFromRoot": "examples/01-basic/02-block-objects",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Basic",
            "Blocks",
            "Inline Content"
          ]
        },
        "title": "Displaying Document JSON",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "all-blocks",
        "fullSlug": "basic/all-blocks",
        "pathFromRoot": "examples/01-basic/03-all-blocks",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Basic",
            "Blocks",
            "Inline Content"
          ]
        },
        "title": "Default Schema Showcase",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "removing-default-blocks",
        "fullSlug": "basic/removing-default-blocks",
        "pathFromRoot": "examples/01-basic/04-removing-default-blocks",
        "config": {
          "playground": true,
          "docs": true,
          "author": "hunxjunedo",
          "tags": [
            "Basic",
            "removing",
            "blocks"
          ]
        },
        "title": "Removing Default Blocks from Schema",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "block-manipulation",
        "fullSlug": "basic/block-manipulation",
        "pathFromRoot": "examples/01-basic/05-block-manipulation",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Blocks"
          ]
        },
        "title": "Manipulating Blocks",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "selection-blocks",
        "fullSlug": "basic/selection-blocks",
        "pathFromRoot": "examples/01-basic/06-selection-blocks",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Blocks"
          ]
        },
        "title": "Displaying Selected Blocks",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "ariakit",
        "fullSlug": "basic/ariakit",
        "pathFromRoot": "examples/01-basic/07-ariakit",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic"
          ]
        },
        "title": "Use with Ariakit",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "shadcn",
        "fullSlug": "basic/shadcn",
        "pathFromRoot": "examples/01-basic/08-shadcn",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic"
          ]
        },
        "title": "Use with ShadCN",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "localization",
        "fullSlug": "basic/localization",
        "pathFromRoot": "examples/01-basic/09-localization",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Basic"
          ]
        },
        "title": "Localization (i18n)",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      },
      {
        "projectSlug": "testing",
        "fullSlug": "basic/testing",
        "pathFromRoot": "examples/01-basic/testing",
        "config": {
          "playground": true,
          "docs": false
        },
        "title": "Test Editor",
        "group": {
          "pathFromRoot": "examples/01-basic",
          "slug": "basic"
        }
      }
    ]
  },
  "backend": {
    "pathFromRoot": "examples/02-backend",
    "slug": "backend",
    "projects": [
      {
        "projectSlug": "file-uploading",
        "fullSlug": "backend/file-uploading",
        "pathFromRoot": "examples/02-backend/01-file-uploading",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Saving/Loading"
          ]
        },
        "title": "Upload Files",
        "group": {
          "pathFromRoot": "examples/02-backend",
          "slug": "backend"
        }
      },
      {
        "projectSlug": "saving-loading",
        "fullSlug": "backend/saving-loading",
        "pathFromRoot": "examples/02-backend/02-saving-loading",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "Blocks",
            "Saving/Loading"
          ]
        },
        "title": "Saving & Loading",
        "group": {
          "pathFromRoot": "examples/02-backend",
          "slug": "backend"
        }
      },
      {
        "projectSlug": "s3",
        "fullSlug": "backend/s3",
        "pathFromRoot": "examples/02-backend/03-s3",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Saving/Loading"
          ],
          "dependencies": {
            "@aws-sdk/client-s3": "^3.609.0",
            "@aws-sdk/s3-request-presigner": "^3.609.0"
          } as any,
          "pro": true
        },
        "title": "Upload Files to AWS S3",
        "group": {
          "pathFromRoot": "examples/02-backend",
          "slug": "backend"
        }
      },
      {
        "projectSlug": "rendering-static-documents",
        "fullSlug": "backend/rendering-static-documents",
        "pathFromRoot": "examples/02-backend/04-rendering-static-documents",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "server"
          ],
          "dependencies": {
            "@blocknote/server-util": "latest"
          } as any
        },
        "title": "Rendering static documents",
        "group": {
          "pathFromRoot": "examples/02-backend",
          "slug": "backend"
        }
      }
    ]
  },
  "ui-components": {
    "pathFromRoot": "examples/03-ui-components",
    "slug": "ui-components",
    "projects": [
      {
        "projectSlug": "formatting-toolbar-buttons",
        "fullSlug": "ui-components/formatting-toolbar-buttons",
        "pathFromRoot": "examples/03-ui-components/02-formatting-toolbar-buttons",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Inline Content",
            "UI Components",
            "Formatting Toolbar"
          ]
        },
        "title": "Adding Formatting Toolbar Buttons",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "formatting-toolbar-block-type-items",
        "fullSlug": "ui-components/formatting-toolbar-block-type-items",
        "pathFromRoot": "examples/03-ui-components/03-formatting-toolbar-block-type-items",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Blocks",
            "UI Components",
            "Formatting Toolbar",
            "Custom Schemas"
          ],
          "dependencies": {
            "@mantine/core": "^7.10.1",
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Adding Block Type Select Items",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "side-menu-buttons",
        "fullSlug": "ui-components/side-menu-buttons",
        "pathFromRoot": "examples/03-ui-components/04-side-menu-buttons",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Blocks",
            "UI Components",
            "Block Side Menu"
          ],
          "dependencies": {
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Adding Block Side Menu Buttons",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "side-menu-drag-handle-items",
        "fullSlug": "ui-components/side-menu-drag-handle-items",
        "pathFromRoot": "examples/03-ui-components/05-side-menu-drag-handle-items",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Blocks",
            "UI Components",
            "Block Side Menu"
          ],
          "dependencies": {
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Adding Drag Handle Menu Items",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "suggestion-menus-slash-menu-items",
        "fullSlug": "ui-components/suggestion-menus-slash-menu-items",
        "pathFromRoot": "examples/03-ui-components/06-suggestion-menus-slash-menu-items",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "Blocks",
            "UI Components",
            "Suggestion Menus",
            "Slash Menu"
          ],
          "dependencies": {
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Adding Slash Menu Items",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "suggestion-menus-slash-menu-component",
        "fullSlug": "ui-components/suggestion-menus-slash-menu-component",
        "pathFromRoot": "examples/03-ui-components/07-suggestion-menus-slash-menu-component",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "UI Components",
            "Suggestion Menus",
            "Slash Menu",
            "Appearance & Styling"
          ]
        },
        "title": "Replacing Slash Menu Component",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "suggestion-menus-emoji-picker-columns",
        "fullSlug": "ui-components/suggestion-menus-emoji-picker-columns",
        "pathFromRoot": "examples/03-ui-components/08-suggestion-menus-emoji-picker-columns",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "Blocks",
            "UI Components",
            "Suggestion Menus",
            "Emoji Picker"
          ]
        },
        "title": "Changing Emoji Picker Columns",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "suggestion-menus-emoji-picker-component",
        "fullSlug": "ui-components/suggestion-menus-emoji-picker-component",
        "pathFromRoot": "examples/03-ui-components/09-suggestion-menus-emoji-picker-component",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "UI Components",
            "Suggestion Menus",
            "Emoji Picker",
            "Appearance & Styling"
          ]
        },
        "title": "Replacing Emoji Picker Component",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "suggestion-menus-grid-mentions",
        "fullSlug": "ui-components/suggestion-menus-grid-mentions",
        "pathFromRoot": "examples/03-ui-components/10-suggestion-menus-grid-mentions",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "Inline Content",
            "Custom Schemas",
            "Suggestion Menus"
          ]
        },
        "title": "Grid Mentions Menu",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "uppy-file-panel",
        "fullSlug": "ui-components/uppy-file-panel",
        "pathFromRoot": "examples/03-ui-components/11-uppy-file-panel",
        "config": {
          "playground": true,
          "docs": true,
          "author": "ezhil56x",
          "tags": [
            "Intermediate",
            "Files"
          ],
          "dependencies": {
            "@uppy/core": "^3.13.1",
            "@uppy/dashboard": "^3.9.1",
            "@uppy/drag-drop": "^3.1.1",
            "@uppy/file-input": "^3.1.2",
            "@uppy/image-editor": "^2.4.6",
            "@uppy/progress-bar": "^3.1.1",
            "@uppy/react": "^3.4.0",
            "@uppy/screen-capture": "^3.2.0",
            "@uppy/status-bar": "^3.1.1",
            "@uppy/webcam": "^3.4.2",
            "@uppy/xhr-upload": "^3.4.0",
            "react-icons": "^5.2.1"
          } as any,
          "pro": true
        },
        "title": "Uppy File Panel",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "custom-ui",
        "fullSlug": "ui-components/custom-ui",
        "pathFromRoot": "examples/03-ui-components/12-custom-ui",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Advanced",
            "Inline Content",
            "UI Components",
            "Block Side Menu",
            "Formatting Toolbar",
            "Suggestion Menus",
            "Slash Menu",
            "Appearance & Styling"
          ],
          "dependencies": {
            "react-icons": "^5.2.1"
          } as any,
          "pro": true
        },
        "title": "Custom UI",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "equation",
        "fullSlug": "ui-components/equation",
        "pathFromRoot": "examples/03-ui-components/13-equation",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": [
            "Equation",
            "Inline Equation",
            "Custom Schemas",
            "Latex",
            "Slash Menu"
          ],
          "dependencies": {
            "katex": "^0.16.11",
            "@types/katex": "^0.16.7",
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Inline Equation",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      },
      {
        "projectSlug": "link-toolbar-buttons",
        "fullSlug": "ui-components/link-toolbar-buttons",
        "pathFromRoot": "examples/03-ui-components/link-toolbar-buttons",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Adding Link Toolbar Buttons",
        "group": {
          "pathFromRoot": "examples/03-ui-components",
          "slug": "ui-components"
        }
      }
    ]
  },
  "theming": {
    "pathFromRoot": "examples/04-theming",
    "slug": "theming",
    "projects": [
      {
        "projectSlug": "theming-dom-attributes",
        "fullSlug": "theming/theming-dom-attributes",
        "pathFromRoot": "examples/04-theming/01-theming-dom-attributes",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Blocks",
            "Appearance & Styling"
          ]
        },
        "title": "Adding CSS Class to Blocks",
        "group": {
          "pathFromRoot": "examples/04-theming",
          "slug": "theming"
        }
      },
      {
        "projectSlug": "changing-font",
        "fullSlug": "theming/changing-font",
        "pathFromRoot": "examples/04-theming/02-changing-font",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Appearance & Styling"
          ]
        },
        "title": "Changing Editor Font",
        "group": {
          "pathFromRoot": "examples/04-theming",
          "slug": "theming"
        }
      },
      {
        "projectSlug": "theming-css",
        "fullSlug": "theming/theming-css",
        "pathFromRoot": "examples/04-theming/03-theming-css",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Appearance & Styling",
            "UI Components"
          ]
        },
        "title": "Overriding CSS Styles",
        "group": {
          "pathFromRoot": "examples/04-theming",
          "slug": "theming"
        }
      },
      {
        "projectSlug": "theming-css-variables",
        "fullSlug": "theming/theming-css-variables",
        "pathFromRoot": "examples/04-theming/04-theming-css-variables",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Appearance & Styling",
            "UI Components"
          ]
        },
        "title": "Overriding Theme CSS Variables",
        "group": {
          "pathFromRoot": "examples/04-theming",
          "slug": "theming"
        }
      },
      {
        "projectSlug": "theming-css-variables-code",
        "fullSlug": "theming/theming-css-variables-code",
        "pathFromRoot": "examples/04-theming/05-theming-css-variables-code",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Appearance & Styling",
            "UI Components"
          ]
        },
        "title": "Changing Themes Through Code",
        "group": {
          "pathFromRoot": "examples/04-theming",
          "slug": "theming"
        }
      }
    ]
  },
  "interoperability": {
    "pathFromRoot": "examples/05-interoperability",
    "slug": "interoperability",
    "projects": [
      {
        "projectSlug": "converting-blocks-to-html",
        "fullSlug": "interoperability/converting-blocks-to-html",
        "pathFromRoot": "examples/05-interoperability/01-converting-blocks-to-html",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Blocks",
            "Import/Export"
          ]
        },
        "title": "Converting Blocks to HTML",
        "group": {
          "pathFromRoot": "examples/05-interoperability",
          "slug": "interoperability"
        }
      },
      {
        "projectSlug": "converting-blocks-from-html",
        "fullSlug": "interoperability/converting-blocks-from-html",
        "pathFromRoot": "examples/05-interoperability/02-converting-blocks-from-html",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Basic",
            "Blocks",
            "Import/Export"
          ]
        },
        "title": "Parsing HTML to Blocks",
        "group": {
          "pathFromRoot": "examples/05-interoperability",
          "slug": "interoperability"
        }
      },
      {
        "projectSlug": "converting-blocks-to-md",
        "fullSlug": "interoperability/converting-blocks-to-md",
        "pathFromRoot": "examples/05-interoperability/03-converting-blocks-to-md",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Basic",
            "Blocks",
            "Import/Export"
          ]
        },
        "title": "Converting Blocks to Markdown",
        "group": {
          "pathFromRoot": "examples/05-interoperability",
          "slug": "interoperability"
        }
      },
      {
        "projectSlug": "converting-blocks-from-md",
        "fullSlug": "interoperability/converting-blocks-from-md",
        "pathFromRoot": "examples/05-interoperability/04-converting-blocks-from-md",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Basic",
            "Blocks",
            "Import/Export"
          ]
        },
        "title": "Parsing Markdown to Blocks",
        "group": {
          "pathFromRoot": "examples/05-interoperability",
          "slug": "interoperability"
        }
      }
    ]
  },
  "custom-schema": {
    "pathFromRoot": "examples/06-custom-schema",
    "slug": "custom-schema",
    "projects": [
      {
        "projectSlug": "alert-block",
        "fullSlug": "custom-schema/alert-block",
        "pathFromRoot": "examples/06-custom-schema/01-alert-block",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Blocks",
            "Custom Schemas",
            "Suggestion Menus",
            "Slash Menu"
          ],
          "dependencies": {
            "@mantine/core": "^7.10.1",
            "react-icons": "^5.2.1"
          } as any
        },
        "title": "Alert Block",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "suggestion-menus-mentions",
        "fullSlug": "custom-schema/suggestion-menus-mentions",
        "pathFromRoot": "examples/06-custom-schema/02-suggestion-menus-mentions",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Intermediate",
            "Inline Content",
            "Custom Schemas",
            "Suggestion Menus"
          ]
        },
        "title": "Mentions Menu",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "font-style",
        "fullSlug": "custom-schema/font-style",
        "pathFromRoot": "examples/06-custom-schema/03-font-style",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Inline Content",
            "Custom Schemas",
            "Formatting Toolbar"
          ]
        },
        "title": "Font Style",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "pdf-file-block",
        "fullSlug": "custom-schema/pdf-file-block",
        "pathFromRoot": "examples/06-custom-schema/04-pdf-file-block",
        "config": {
          "playground": true,
          "docs": true,
          "author": "matthewlipski",
          "tags": [
            "Intermediate",
            "Blocks",
            "Custom Schemas",
            "Suggestion Menus",
            "Slash Menu"
          ],
          "dependencies": {
            "@mantine/core": "^7.10.1",
            "react-icons": "^5.2.1"
          } as any,
          "pro": true
        },
        "title": "PDF Block",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "react-custom-blocks",
        "fullSlug": "custom-schema/react-custom-blocks",
        "pathFromRoot": "examples/06-custom-schema/react-custom-blocks",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Blocks - React API",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "react-custom-inline-content",
        "fullSlug": "custom-schema/react-custom-inline-content",
        "pathFromRoot": "examples/06-custom-schema/react-custom-inline-content",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Inline Content - React API",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      },
      {
        "projectSlug": "react-custom-styles",
        "fullSlug": "custom-schema/react-custom-styles",
        "pathFromRoot": "examples/06-custom-schema/react-custom-styles",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Styles - React API",
        "group": {
          "pathFromRoot": "examples/06-custom-schema",
          "slug": "custom-schema"
        }
      }
    ]
  },
  "collaboration": {
    "pathFromRoot": "examples/07-collaboration",
    "slug": "collaboration",
    "projects": [
      {
        "projectSlug": "partykit",
        "fullSlug": "collaboration/partykit",
        "pathFromRoot": "examples/07-collaboration/01-partykit",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Advanced",
            "Saving/Loading",
            "Collaboration"
          ],
          "dependencies": {
            "y-partykit": "^0.0.25",
            "yjs": "^13.6.15"
          } as any
        },
        "title": "Collaborative Editing with PartyKit",
        "group": {
          "pathFromRoot": "examples/07-collaboration",
          "slug": "collaboration"
        }
      },
      {
        "projectSlug": "liveblocks",
        "fullSlug": "collaboration/liveblocks",
        "pathFromRoot": "examples/07-collaboration/02-liveblocks",
        "config": {
          "playground": true,
          "docs": true,
          "author": "yousefed",
          "tags": [
            "Advanced",
            "Saving/Loading",
            "Collaboration"
          ],
          "dependencies": {
            "@liveblocks/client": "^1.10.0",
            "@liveblocks/react": "^1.10.0",
            "@liveblocks/yjs": "^1.10.0",
            "yjs": "^13.6.15"
          } as any
        },
        "title": "Collaborative Editing with Liveblocks",
        "group": {
          "pathFromRoot": "examples/07-collaboration",
          "slug": "collaboration"
        }
      }
    ]
  },
  "extensions": {
    "pathFromRoot": "examples/08-extensions",
    "slug": "extensions",
    "projects": [
      {
        "projectSlug": "tiptap-arrow-conversion",
        "fullSlug": "extensions/tiptap-arrow-conversion",
        "pathFromRoot": "examples/08-extensions/01-tiptap-arrow-conversion",
        "config": {
          "playground": true,
          "docs": true,
          "author": "komsenapati",
          "tags": [
            "Extension"
          ],
          "pro": true
        },
        "title": "TipTap extension (arrow InputRule)",
        "group": {
          "pathFromRoot": "examples/08-extensions",
          "slug": "extensions"
        }
      }
    ]
  },
  "vanilla-js": {
    "pathFromRoot": "examples/vanilla-js",
    "slug": "vanilla-js",
    "projects": [
      {
        "projectSlug": "react-vanilla-custom-blocks",
        "fullSlug": "vanilla-js/react-vanilla-custom-blocks",
        "pathFromRoot": "examples/vanilla-js/react-vanilla-custom-blocks",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Blocks - Vanilla JS API",
        "group": {
          "pathFromRoot": "examples/vanilla-js",
          "slug": "vanilla-js"
        }
      },
      {
        "projectSlug": "react-vanilla-custom-inline-content",
        "fullSlug": "vanilla-js/react-vanilla-custom-inline-content",
        "pathFromRoot": "examples/vanilla-js/react-vanilla-custom-inline-content",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Inline Content - Vanilla JS API",
        "group": {
          "pathFromRoot": "examples/vanilla-js",
          "slug": "vanilla-js"
        }
      },
      {
        "projectSlug": "react-vanilla-custom-styles",
        "fullSlug": "vanilla-js/react-vanilla-custom-styles",
        "pathFromRoot": "examples/vanilla-js/react-vanilla-custom-styles",
        "config": {
          "playground": true,
          "docs": false,
          "author": "matthewlipski",
          "tags": []
        },
        "title": "Custom Styles - Vanilla JS API",
        "group": {
          "pathFromRoot": "examples/vanilla-js",
          "slug": "vanilla-js"
        }
      }
    ]
  }
};