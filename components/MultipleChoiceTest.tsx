import React, { FC } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

interface IProps {
  name: string;
  a: { id: number; value: string }[];
  onCheck: () => void;
  showAnswer: boolean;
  correct: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TestControls = styled.div``;

const CheckButton = styled.button``;

const Choice = styled.div<{ choiceId: number; showAnswer: boolean }>`
  padding: 5px 10px;
  min-width: 100px;
  background: ${props => (props.showAnswer ? "lightgreen" : "tomato")};
`;

const Checkbox = styled.input``;

const MultipleChoiceTest: FC<IProps> = ({
  name,
  a,
  onCheck,
  showAnswer = false,
  correct
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <Wrapper>
      <TestControls>
        {a.map(choice => (
          <Choice key={choice.id} choiceId={choice.id} showAnswer={true}>
            <Checkbox
              type="checkbox"
              className="form-control"
              name={"" + choice.id}
              value={choice.id}
              checked={selected.includes(choice.id)}
              onChange={e =>
                e.target.checked
                  ? setSelected([...selected, choice.id])
                  : setSelected(selected.filter(id => id !== choice.id))
              }
            />
            &nbsp;&nbsp;&nbsp;{choice.value}
          </Choice>
        ))}
      </TestControls>
      <CheckButton
        className="btn btn-sm btn-info"
        disabled={selected.length === 0}
        onClick={onCheck}
      >
        Check
      </CheckButton>
    </Wrapper>
  );
};

export default MultipleChoiceTest;
