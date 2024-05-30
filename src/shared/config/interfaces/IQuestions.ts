import { IAnswer } from "./IAnswer.ts";

export interface IQuestions {
  id: number;
  question: string;
  answers: IAnswer[];
}
