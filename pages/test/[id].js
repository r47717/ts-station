import { useEffect, useMemo, useReducer, useState } from "react";
import Layout from "../../components/Layout";
import data from "../../data";
import {
  allTestQuestionsAnswered,
  getAnswersForTest,
  getCategoryForTid,
  restore,
  saveAnswersForTest,
  testRunReducer
} from "../../services";
import { highlight } from "../../services/syntax";

function Test({ test, category }) {
  const { id: tid, q: questions } = test;
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

  return (
    <Layout title="Test" page="category" activeCategory={category}>
      <div>
        <h1>Test #{tid}</h1>
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
            <button className="btn btn-info mr-3" onClick={() => {}}>
              &#60;&#60;&nbsp;Previous
            </button>
            <button className="btn btn-info" onClick={() => {}}>
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

  return {
    props: {
      test,
      category
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
