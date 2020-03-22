import React from "react";
import { useState } from "react";
import SingleChoiceTest from "./SingleChoiceTest";

function Test({ test }) {
  const { id, q, a, correct } = test;
  const [showAnswersList, setShowAnswersList] = useState([]);

  return (
    <div className="test-block">
      <div className="test-block-header">{q}</div>
      <div className="test-block-body">
        {
          <SingleChoiceTest
            name={id}
            a={a}
            onCheck={() => setShowAnswersList([...showAnswersList, id])}
            showAnswer={showAnswersList.includes(id)}
            correct={correct[0]}
          />
        }
      </div>

      {/* Language=CSS */}
      <style jsx>{`
        .test-block {
          margin: 0 0 20px 0;
        }
        .test-block-header {
          padding: 5px 10px;
          background: #eeeeee;
        }
        .test-block-body {
          padding: 10px;
          border: 1px solid #eeeeee;
        }
      `}</style>
    </div>
  );
}

export default Test;
