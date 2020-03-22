import React from "react";
import { useState } from "react";
import cn from "classnames";

function SingleChoiceTest({ name, a, onCheck, showAnswer = false, correct }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="d-flex justify-content-between align-items-end">
      <div>
        {a.map(choice => (
          <div
            key={choice.id}
            className={cn("choice", {
              correct: showAnswer && choice.id === correct,
              incorrect:
                showAnswer && selected === choice.id && selected !== correct
            })}
          >
            <input
              type="radio"
              name={name}
              value={choice.id}
              checked={choice.id === selected}
              onChange={() => setSelected(choice.id)}
            />
            &nbsp;&nbsp;&nbsp;{choice.value}
          </div>
        ))}
      </div>
      <button
        className="btn btn-sm btn-info"
        disabled={selected === null}
        onClick={onCheck}
      >
        Check
      </button>
      <style jsx>{`
        .choice {
          padding: 5px 10px;
          min-width: 100px;
        }
        .correct {
          background: lightgreen;
        }
        .incorrect {
          background: tomato;
        }
      `}</style>
    </div>
  );
}

export default SingleChoiceTest;
