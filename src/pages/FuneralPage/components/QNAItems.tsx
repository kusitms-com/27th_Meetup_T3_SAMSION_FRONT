import styled from 'styled-components';
import { useState } from 'react';
import type { QNAContent } from './QNAPresenter';
import QNAForms from './QNAForms';

const QuestionItemContainer = styled.button`
  all: unset;
  width: 80vw;
  height: 120px;
  background-color: ${({ theme }) => theme.color.main.lightOrange};
  border-radius: 16px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size : 20px;

  .question_box {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }

  .question_circle {
    background-color: ${({ theme }) => theme.color.main.orange};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .question_content {
    margin-left: 24px;
    font-family: ${({ theme }) => theme.font.family.pretendard_bold};
  }

  .quesiton_arrow {
    margin-right: 40px;
    transition: 0.5s;

    &.active {
      transform: rotate(180deg);
      transition: 0.5s;
    }
  }
`;

type QNAItemProps = {
    question: QNAContent;
};

const QNAItems = ({ question }: QNAItemProps) => {
    const [canRead, setCanRead] = useState(false);

    const handleCanRead = () => {
        setCanRead(!canRead);
    };

    return (
        <>
            <QuestionItemContainer onClick={handleCanRead}>
                <div className="question_box">
                    <div className="question_circle">
                        <img src="/img/question_icon.svg" alt="heart" />
                    </div>
                    <div className="question_content">{question.questionTitle}</div>
                </div>
                <img
                    src="/img/blackArrow.svg"
                    alt="arrow"
                    className={canRead ? 'quesiton_arrow active' : 'quesiton_arrow'}
                />
            </QuestionItemContainer>
            {canRead ? <QNAForms answerDescription={question.answerDescription} /> : null}
        </>
    )
}
export default QNAItems;