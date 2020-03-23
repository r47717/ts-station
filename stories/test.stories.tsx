import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "../components/Test";

export default { title: "Test Component" };

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
  correct: [1]
};

export const test = () => <Test test={data} />;
