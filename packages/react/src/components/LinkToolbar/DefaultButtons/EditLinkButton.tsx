import { useComponentsContext } from "../../../editor/ComponentsContext.js";
import { useDictionary } from "../../../i18n/dictionary.js";
import { EditLinkMenuItems } from "../EditLinkMenuItems.js";
import { LinkToolbarProps } from "../LinkToolbarProps.js";

export const EditLinkButton = (
  props: Pick<LinkToolbarProps, "url" | "text" | "editLink">
) => {
  const Components = useComponentsContext()!;
  const dict = useDictionary();

  return (
    <Components.Generic.Popover.Root>
      <Components.Generic.Popover.Trigger>
        <Components.Toolbar.Button
          className={"bn-button"}
          mainTooltip={dict.link_toolbar.edit.tooltip}
          isSelected={false}>
          {dict.link_toolbar.edit.text}
        </Components.Toolbar.Button>
      </Components.Generic.Popover.Trigger>
      <Components.Generic.Popover.Content
        className={"bn-popover-content bn-form-popover"}
        variant={"form-popover"}>
        <EditLinkMenuItems {...props} />
      </Components.Generic.Popover.Content>
    </Components.Generic.Popover.Root>
  );
};
