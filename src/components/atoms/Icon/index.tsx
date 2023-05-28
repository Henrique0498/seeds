import { iconsFile } from "./icons";
import { InterfaceIcon } from "./types";

export function Icon({ icon, ...props }: InterfaceIcon) {
  return iconsFile[icon](props);
}
