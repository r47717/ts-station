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
import SingleChoiceTest from "../components/SingleChoiceTest";

export default {
  title: "Single Choice Test Component",
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
  correct: 1
};

const arr = object("answers", [
  { id: 1, value: "6" },
  { id: 2, value: "8" },
  { id: 3, value: "10" },
  { id: 4, value: "5" }
]);

export const noAnswerView = () => (
  <SingleChoiceTest
    name={text("name", "abc")}
    a={arr}
    onCheck={action("onCheck")}
    showAnswer={boolean("showAnswer", false)}
    correct={number("correct", data.correct)}
  />
);

export const withAnswerView = () => (
  <SingleChoiceTest
    name={text("name", "abc")}
    a={arr}
    onCheck={action("onCheck")}
    showAnswer={boolean("showAnswer", false)}
    correct={number("correct", data.correct)}
  />
);
