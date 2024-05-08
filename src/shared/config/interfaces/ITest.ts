import { ITestCard } from "./ITestCard.ts";
import { IQuestions } from "./IQuestions.ts";

export interface ITest extends ITestCard {
  questions: IQuestions[];
}
