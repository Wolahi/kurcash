import { ReactElement } from "react";

export interface IRoutesItem {
  path: string;
  element: ReactElement;
  isPrivate: boolean;
}
