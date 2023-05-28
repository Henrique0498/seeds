import { HtmlHTMLAttributes } from "react";
import { iconsFile } from "./icons";

type TypeIconsName = keyof typeof iconsFile;

export interface InterfaceIcon extends HtmlHTMLAttributes<SVGSVGElement> {
  icon: TypeIconsName;
}

export type InterfaceIconFile = HtmlHTMLAttributes<SVGSVGElement>;
