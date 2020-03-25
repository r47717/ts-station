import React, { FC } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

interface IProps {
  name: string;
  a: { id: number; value: string }[];
  onCheck: () => void;
  showAnswer: boolean;
  correct: number[];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TestControls = styled.div``;

interface IButtonProps {
  small?: boolean;
}

const CheckButton: any = styled.button.attrs<IButtonProps>(props => ({
  className: props.small ? "btn btn-info btn-sm" : "btn btn-info"
}))``;

const Choice = styled.div<{ bg: string }>`
  padding: 5px 10px;
  min-width: 100px;
  background: ${props => props.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

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
          <Choice
            key={choice.id}
            bg={
              showAnswer &&
              selected.includes(choice.id) &&
              correct.includes(choice.id)
                ? "lightgreen"
                : showAnswer &&
                  selected.includes(choice.id) &&
                  !correct.includes(choice.id)
                ? "tomato"
                : "#ffffff"
            }
          >
            <Checkbox
              type="checkbox"
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
        disabled={selected.length === 0}
        onClick={onCheck}
        small={true}
      >
        Check
      </CheckButton>
    </Wrapper>
  );
};

export default MultipleChoiceTest;
