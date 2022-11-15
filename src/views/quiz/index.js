import React, {useEffect, useState} from "react";
import "./index.css"
import Answercard from "../../components/quiz/answercard";
import {useLocation, useNavigate} from "react-router-dom";
import get from "../../services/api";

const Quiz = (props) => {
    const { state } = useLocation();
    const [question, setQuestion] = useState([{question:{text: ''},options:[]}])
    const [index, setIndex] = useState(1)
    const [totalQuestion, setTotalQuestion]= useState(0)
    const [score, setScore] = useState(0)

    const getData = async () => {
        get(`jetlimpic/quiz/${state}`).then(res => {
            setQuestion(res.data)
            setTotalQuestion(res.data.length)
        })
    }

    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    }, [])

    const navigate = useNavigate();
    const checkAnswer = async (isAnswer) => {
        if (isAnswer) {
            let tempScore = score + 10;
            setScore(tempScore);
            return tempScore
        }
    }
    const onClickAnswer = (isAnswer) => {
        checkAnswer(isAnswer).then((tempScore) => {
            if (index<totalQuestion) {
                setIndex(index + 1);
            } else {
                navigate('/result', {state: {score: tempScore?tempScore:score}})
            }
        })
    }
  return(
    <div className={'container'} style={{justifyContent: 'space-between'}}>
      <div style={{marginTop: 100}}>Question {index}/{totalQuestion}</div>
      <div style={{flexGrow: 2}}>
          <div className={'question-text'}>{question.length>0 ? question[index-1].question.text : ''}</div>
          {
              question[index-1].question.image ? <img className={'image-question'} src={question[index-1].question.image} alt=""/> : ''
          }
          <div className={'answer-wrap'}>
              {
                  question[index - 1].options.map(o => {
                      return (
                          <Answercard answer={o.text} onClick={() => onClickAnswer(o.is_answer)}/>
                      )
                  })
              }
          </div>
      </div>
        <div style={{fontSize: 12}}>&copy; System & Software</div>
    </div>
  )
}

export default Quiz;