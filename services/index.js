const resultsKey = "test-station-results";

export function save(data) {
  localStorage.setItem(resultsKey, JSON.stringify(data));
}

export function restore() {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(resultsKey)) || {};
  } catch {
    // no action - wrong JSON data, return {}
  }

  return data;
}

// 'data' structure see in data/index.js

// results = {
//     run: [
//         {
//             tid: 123,
//             answers: [
//                 { qid: 123, aid: 456 },
//             ];
//             success: true,
//         },
//     ],
//
// };

export function countTestsAvailable(tests, catid) {
  return tests.reduce(
    (acc, test) => (test.category === catid ? acc + 1 : acc),
    0
  );
}

function getTestsRunByCategory(data, results, catid) {
  return results.run
    ? results.run.filter(item => getCategoryForTid(data, item.tid) === catid)
    : [];
}

export function countTestsRun(data, results, catid) {
  return getTestsRunByCategory(data, results, catid).length;
}

export function countTestsSuccessful(data, results, catid) {
  return getTestsRunByCategory(data, results, catid).reduce(
    (acc, curr) => (curr.success ? acc + 1 : acc),
    0
  );
}

export function getCategoryForTid(data, tid) {
  const test = data.tests.find(t => t.id === tid);
  return test ? test.category : null;
}

export function getAnswersForTest(results, tid) {
  const record =
    results && results.run && results.run.find(item => item.tid === tid);
  return record ? record.answers : [];
}

export function getAnswerForQuestion(answers, qid) {
  return (answers.find(a => a.qid === qid) || { aid: null }).aid;
}

export function allTestQuestionsAnswered(questions, answers) {
  return questions.every(q => answers.some(a => a.qid === q.id));
}

export function saveAnswersForTest(results, tid, answers) {
  let record =
    results && results.run && results.run.find(item => item.tid === tid);
  if (!record) {
    if (!results.run) {
      results.run = [];
    }
    results.run.push(
      (record = {
        tid,
        success: false // TBD: change it
      })
    );
  }
  record.answers = answers;
  save(results);
}

export function testRunReducer(answers, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      const { qid, aid } = action.payload;
      if (answers.find(answer => answer.qid === qid) === undefined) {
        return [...answers, { qid, aid }];
      }
      return answers.map(a =>
        a.qid === qid ? { qid, aid } : { qid: a.qid, aid: a.aid }
      );

    default:
      throw new Error();
  }
}

export function getNextTestInCategory(data, tid) {
  const thisTest = data.tests.find(test => test.id === tid);
  if (!thisTest) {
    return null;
  }
  const testsInCategory = data.tests.filter(
    test => test.category === thisTest.category
  );
  const thisTestIndex = testsInCategory.findIndex(test => test.id === tid);
  return thisTestIndex < testsInCategory.length - 1
    ? testsInCategory[thisTestIndex + 1].id
    : null;
}

export function getPrevTestInCategory(data, tid) {
  const thisTest = data.tests.find(test => test.id === tid);
  if (!thisTest) {
    return null;
  }
  const testsInCategory = data.tests.filter(
    test => test.category === thisTest.category
  );
  const thisTestIndex = testsInCategory.findIndex(test => test.id === tid);
  return thisTestIndex > 0 ? testsInCategory[thisTestIndex - 1].id : null;
}
