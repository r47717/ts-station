const resultsKey = 'test-station-results';

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

export function countTestsRun(results, catid) {
    return results.run ? results.run.reduce((acc, curr) => (
        curr.category === catid ? acc + 1 : acc
    ), 0) : 0
}

export function countTestsSuccessful(results, catid) {
    return results.run ? results.run.reduce((acc, curr) => (
        curr.category === catid && curr.success ? acc + 1 : acc
    ), 0) : 0
}

export function getCategoryForTid(data, tid) {
    const {categories, tests} = data;
    const test = tests.find(t => t.id === tid);
    if (test) {
        return test.category;
    }

    return null; // wring tid?
}

export function getAnswersForTest(results, tid) {
    const record = results && results.run && results.run.find(item => item.tid === tid);
    return record ? record.answers : [];
}

export function allTestQuestionsAnswered(questions, answers) {
    return !!questions.find(q => answers.find(a => a.qid === q.id));
}

export function saveAnswersForTest(results, tid, answers) {
    let record = results && results.run && results.run.find(item => item.tid === tid);
    if (!record) {
        if (!results.run) {
            results.run = [];
        }
        results.run.push(record = {
            tid,
            success: false, // TBD: change it
        });
    }
    record.answers = answers;
    save(results);
}

export function testRunReducer(answers, action) {
    switch (action.type) {
        case 'ANSWER_QUESTION':
            const {qid, aid} = action.payload;
            if (answers.find(answer => answer.qid === qid) === undefined) {
                return [...answers, { qid, aid }]
            }
            return answers.map(a => (a.qid === qid ? {qid, aid} : {qid: a.qid, aid: a.aid}));

        default:
            throw new Error();
    }
}
