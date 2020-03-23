import React, { FC } from "react";
import { useState } from "react";
import SingleChoiceTest from "./SingleChoiceTest";

interface IProps {
  test: {
    id: number;
    q: {}[];
    a: { id: number; value: string }[];
    correct: number[];
  };
}

const Test: FC<IProps> = ({ test }) => {
  const { id, q, a, correct } = test;
  const [showAnswersList, setShowAnswersList] = useState<number[]>([]);

  return (
    <div className="test-block">
      <div className="test-block-header">{q}</div>
      <div className="test-block-body">
        {
          <SingleChoiceTest
            name={"" + id}
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
};

export default Test;
