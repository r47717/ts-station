import { useEffect, useMemo, useReducer, useState } from "react";
import router from "next/router";
import Layout from "../../components/Layout";
import data from "../../data";
import {
  allTestQuestionsAnswered,
  getAnswerForQuestion,
  getAnswersForTest,
  getCategoryForTid,
  getNextTestInCategory,
  getPrevTestInCategory,
  restore,
  saveAnswersForTest,
  testRunReducer
} from "../../services";
import { highlight } from "../../services/syntax";

function Test({ test, category, prevTest, nextTest }) {
  const { id: tid, q: questions, title } = test;
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const results = useMemo(() => restore(), []);
  const [answers, dispatch] = useReducer(
    testRunReducer,
    getAnswersForTest(results, tid)
  );

  useEffect(() => {
    // enable/disable submit button
    setSubmitDisabled(!allTestQuestionsAnswered(questions, answers));
  }, [questions, answers]);

  function onClick(qid, aid) {
    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        qid,
        aid
      }
    });
  }

  function onSubmit() {
    saveAnswersForTest(results, tid, answers);
  }

  async function onClickPrevious() {
    await router.push(`/test/${prevTest}`);
  }

  async function onClickNext() {
    await router.push(`/test/${nextTest}`);
  }

  return (
    <Layout title="Test" page="category" activeCategory={category}>
      <div>
        <h1>
          Test #{tid} ({title})
        </h1>
        <div className="questions">
          {questions.map(q => (
            <div key={q.id} className="card mb-2">
              <div className="card-header">
                <div>{q.title}</div>
                <div>
                  {q.code && (
                    <code
                      dangerouslySetInnerHTML={{ __html: highlight(q.code) }}
                    />
                  )}
                </div>
              </div>
              <div className="card-body">
                {q.a.map(answer => (
                  <div key={answer.id}>
                    <input
                      type="radio"
                      name={q.id}
                      value={answer.id}
                      defaultChecked={
                        getAnswerForQuestion(answers, q.id) === answer.id
                      }
                      onClick={() => onClick(q.id, answer.id)}
                    />
                    &nbsp;&nbsp;{answer.value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="button-group mt-5 d-flex justify-content-between">
          <button
            className="btn btn-warning"
            disabled={submitDisabled}
            onClick={() => onSubmit()}
          >
            Submit
          </button>
          <div>
            <button
              className="btn btn-info mr-3"
              disabled={prevTest === null}
              onClick={onClickPrevious}
            >
              &#60;&#60;&nbsp;Previous
            </button>
            <button
              className="btn btn-info"
              disabled={nextTest === null}
              onClick={onClickNext}
            >
              Next&nbsp;&#62;&#62;
            </button>
          </div>
        </div>
      </div>
      {/* language=CSS */}
      <style jsx>{`
        code {
          display: block;
          color: #ffffff;
          background: #333333;
          padding: 20px;
          margin: 20px 0 20px 0;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps = async ({ params: { id } }) => {
  const { tests } = data;

  const test = tests.find(test => test.id === +id);
  const category = test && getCategoryForTid(data, test.id);
  const prevTest = getPrevTestInCategory(data, test.id);
  const nextTest = getNextTestInCategory(data, test.id);

  return {
    props: {
      test,
      category,
      prevTest,
      nextTest
    }
  };
};

export const getStaticPaths = async () => {
  const { tests } = data;

  return {
    paths: tests.map(test => ({
      params: { id: "" + test.id }
    })),
    fallback: false // 404 if wrong param
  };
};

export default Test;
