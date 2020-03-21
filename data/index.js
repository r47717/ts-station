export default {
  categories: [
    { id: 1, title: "Types" },
    { id: 2, title: "Statements" },
    { id: 3, title: "Generics" },
    { id: 4, title: "Iterators" },
    { id: 5, title: "Generators" },
    { id: 6, title: "Modules" }
  ],
  tests: [
    {
      id: 1,
      category: 1,
      title: "Basic types",
      q: [
        {
          id: 1,
          title: "How many basic types are in TypeScript?",
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [5]
        },
        {
          id: 2,
          title: "What will the following code output to console:",
          code: `const obj = { a: 123 };
                 for (let i = 0; i < 10; i++) {
                   console.log(i);
                 }`,
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [3]
        }
      ]
    },
    {
      id: 2,
      category: 1,
      title: "Advanced types",
      q: [
        {
          id: 1,
          title: "How many basic types are in TypeScript?",
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [4]
        },
        {
          id: 2,
          title: "What will the following code output to console:",
          code: `const obj = { a: 123 };
                 for (let i = 0; i < 10; i++) {
                   console.log(i);
                 }`,
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [1]
        }
      ]
    },
    {
      id: 3,
      category: 1,
      title: "Very Advanced types",
      q: [
        {
          id: 1,
          title: "How many basic types are in TypeScript?",
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [3]
        },
        {
          id: 2,
          title: "What will the following code output to console:",
          code: `const obj = { a: 123 };
                 for (let i = 0; i < 10; i++) {
                   console.log(i);
                 }`,
          a: [
            { id: 1, value: "6" },
            { id: 2, value: "8" },
            { id: 3, value: "10" },
            { id: 4, value: "5" },
            { id: 5, value: "Hundreds" }
          ],
          correct: [2]
        }
      ]
    }
  ]
};
