import React, {useEffect, useState} from "react";
import "./index.css"
import Answercard from "../../components/quiz/answercard";
import {useLocation, useNavigate} from "react-router-dom";
import get from "../../services/api";
import Loading from "../../components/loading";

const Quiz = (props) => {
    const { state } = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const [question, setQuestion] = useState([{question:{text: ''},options:[]}])
    const [index, setIndex] = useState(1)
    const [totalQuestion, setTotalQuestion]= useState(0)
    const [score, setScore] = useState(0)

    const getQuestionText = () => {
      if (state === 'en') {
          return 'Question'
      } else if (state === 'id') {
          return 'Pertanyaan'
      } else {
          return '问题'
      }
    }

    useEffect( () => {
        setIsLoading(true)
        //passing getData method to the lifecycle method
        get(`jetlimpic/quiz/${state}`).then(res => {
            setQuestion(res.data)
            setTotalQuestion(res.data.length)
            setIsLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setIsLoading(true)
        setTimeout(function(){
            checkAnswer(isAnswer).then((tempScore) => {
                if (index<totalQuestion) {
                    setIndex(index + 1);
                } else {
                    navigate('/result', {state: {score: tempScore?tempScore:score}})
                }
            })
            setIsLoading(false)
        }, 500);
    }
  return(
    <div className={'container'} style={{justifyContent: 'space-between'}}>
        {
            isLoading ? <Loading></Loading>: ''
        }
      <div style={{marginTop: 100}}>{getQuestionText()} {index}/{totalQuestion}</div>
      <div style={{flexGrow: 2}}>
          <div className={'question-text'}>{question.length>0 ? question[index-1].question.text : ''}</div>
          {
              question[index-1].question.image ? <img className={'image-question'} src={question[index-1].question.image} alt=""/> : ''
          }
          <div className={'answer-wrap'}>
              {
                  question[index - 1].options.map(o => {
                      return (
                        <div key={o.id}>
                            <Answercard answer={o.text} onClick={() => onClickAnswer(o.is_answer)}/>
                        </div>
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