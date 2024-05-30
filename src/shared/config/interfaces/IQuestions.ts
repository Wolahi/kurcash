import { IAnswer } from "./IAnswer.ts";

export interface IQuestions {
  id: number;
  title: string;
  question: string;
  answers: IAnswer[];
}
