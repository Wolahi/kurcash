import { ETypeQuestions } from "./ETypeQuestions.ts";
import { IVariants } from "./IVariants.ts";

export interface IQuestions {
  type: ETypeQuestions;
  variants: IVariants[];
  nameVal: string;
  title: string;
  label: string;
}
