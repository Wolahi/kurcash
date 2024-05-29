import { ITest } from "../config/interfaces/ITest.ts";
import { ETypeQuestions } from "../config/interfaces/ETypeQuestions.ts";

export const tests: ITest[] = [
  {
    id: "1",
    title: "Ну типа на язву тестик",
    descr: "Язва это такая штучка сложная, так и живем",
    questions: [
      {
        title: "Тошнота",
        label: "Появляется ли у Вас чувство тошноты?",
        nameVal: "nausea",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Нет",
          },
          {
            value: 1,
            label: "Постоянно",
          },
          {
            value: 2,
            label: "Натощак",
          },
          {
            value: 3,
            label: "После приема пищи",
          },
          {
            value: 4,
            label: "Без связи с приемом пищи",
          },
        ],
      },
      {
        title: "Cтул",
        label: "Какой стул?",
        nameVal: "defecation",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Хороший",
          },
          {
            value: 1,
            label: "Запор",
          },
          {
            value: 2,
            label: "Диарея",
          },
        ],
      },
      {
        title: "Изжога",
        nameVal: "heartburn",
        label: "Появляется ли у Вас чувство изжоги?",
        type: ETypeQuestions.Boolean,
        variants: [
          {
            value: true,
            label: "Да",
          },
          {
            value: false,
            label: "Нет",
          },
        ],
      },
      {
        title: "Отрыжка",
        nameVal: "belching",
        label: "Возникает ли у Вас отрыжка?",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Нет",
          },
          {
            value: 1,
            label: "Пищей",
          },
          {
            value: 2,
            label: "Воздухом",
          },
          {
            value: 3,
            label: "Тухлым яйцом",
          },
        ],
      },
      {
        title: "Чувство тяжести",
        nameVal: "heaviness",
        label: "Проявляется ли у Вас чувство тяжести?",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Нет",
          },
          {
            value: 1,
            label: "Связано с приемом пищи",
          },
          {
            value: 2,
            label: "Не связано с приемом пищи",
          },
        ],
      },
      {
        title: "Боль",
        nameVal: "pain",
        label: "Вы ощущаете боль?",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Нет",
          },
          {
            value: 1,
            label: "Натощак",
          },
          {
            value: 2,
            label: "Без связи с приемом пищи",
          },
          {
            value: 3,
            label: "После приема пищи",
          },
        ],
      },
      {
        title: "Место",
        nameVal: "placeOfPain",
        label: "Укажите область болезненных ощущений:",
        type: ETypeQuestions.Numb,
        variants: [
          {
            value: 0,
            label: "Нет боли",
          },
          {
            value: 1,
            label: "Правое подреберье",
          },
          {
            value: 2,
            label: "Левое подреберье",
          },
          {
            value: 3,
            label: "Под ложечкой",
          },
          {
            value: 4,
            label: "Опоясывающая",
          },
        ],
      },
    ],
  },
];
