import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  boolean,
  number,
  object,
  text
} from "@storybook/addon-knobs";
import MultipleChoiceTest from "../components/MultipleChoiceTest";

export default {
  title: "Multiple Choice Test Component",
  decorators: [withKnobs]
};

const data = {
  id: 1,
  category: 1,
  q: "How many basic types are in TypeScript?",
  t: 1,
  a: [
    { id: 1, value: "6" },
    { id: 2, value: "8" },
    { id: 3, value: "10" },
    { id: 4, value: "5" }
  ],
  correct: [1, 3]
};

const arr = object("answers", [
  { id: 1, value: "6" },
  { id: 2, value: "8" },
  { id: 3, value: "10" },
  { id: 4, value: "5" }
]);

export const noAnswerView = () => (
  <MultipleChoiceTest
    name={text("name", "abc")}
    a={arr}
    onCheck={action("onCheck")}
    showAnswer={boolean("showAnswer", false)}
    correct={object("correct", data.correct)}
  />
);

export const withAnswerView = () => (
  <MultipleChoiceTest
    name={text("name", "abc")}
    a={arr}
    onCheck={action("onCheck")}
    showAnswer={boolean("showAnswer", false)}
    correct={object("correct", data.correct)}
  />
);
