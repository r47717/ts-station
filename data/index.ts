const types = {
  SingleChoice: 1,
  MultipleChoice: 2
};

export default {
  categories: [
    {
      id: 1,
      title: "Basic Types",
      docs: "https://www.typescriptlang.org/docs/handbook/basic-types.html"
    },
    {
      id: 2,
      title: "Advanced Types",
      docs: "https://www.typescriptlang.org/docs/handbook/advanced-types.html"
    },
    {
      id: 3,
      title: "Interfaces",
      docs: "https://www.typescriptlang.org/docs/handbook/interfaces.html"
    },
    {
      id: 4,
      title: "Generics",
      docs: "https://www.typescriptlang.org/docs/handbook/generics.html"
    },
    {
      id: 5,
      title: "Iterators",
      docs:
        "https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html"
    },
    {
      id: 6,
      title: "Generators",
      docs:
        "https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html"
    },
    {
      id: 7,
      title: "Modules",
      docs: "https://www.typescriptlang.org/docs/handbook/modules.html"
    }
  ],
  tests: [
    {
      id: 1,
      category: 1,
      q: "How many basic types are in TypeScript?",
      t: types.SingleChoice,
      a: [
        { id: 1, value: "6" },
        { id: 2, value: "8" },
        { id: 3, value: "10" },
        { id: 4, value: "5" }
      ],
      correct: [1]
    },
    {
      id: 2,
      category: 1,
      q: "What are correct values for boolean type?",
      t: types.SingleChoice,
      a: [
        { id: 1, value: "true, false, undefined and null" },
        { id: 2, value: "true and false" },
        { id: 3, value: "true, false, and null" }
      ],
      correct: [2]
    }
  ]
};
