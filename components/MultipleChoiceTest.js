import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cn from "classnames";

function MultipleChoiceTest({ name, a, onCheck, showAnswer = false, correct }) {
  const [selected, setSelected] = useState([]);

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
              type="checkbox"
              name={choice.id}
              value={choice.id}
              checked={selected.includes(choice.id)}
              onChange={e =>
                e.target.checked
                  ? setSelected([...selected, choice.id])
                  : setSelected(selected.filter(id => id !== choice.id))
              }
            />
            &nbsp;&nbsp;&nbsp;{choice.value}
          </div>
        ))}
      </div>
      <button
        className="btn btn-sm btn-info"
        disabled={selected.length === 0}
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

export default MultipleChoiceTest;
