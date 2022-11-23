import React, {useEffect, useState} from "react";
import "./index.css"
import Answercard from "../../components/quiz/answercard";
import {useLocation, useNavigate} from "react-router-dom";
import service  from "../../services/api";
import Loading from "../../components/loading";
import axios from "axios";

const Quiz = (props) => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }

    useEffect( () => {
        //passing getData method to the lifecycle method
        getData()
    }, [])


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
        service.get(`jetlimpic/quiz/${state}`).then(res => {
            setQuestion(res.data)
            setTotalQuestion(res.data.length)
            setIsLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigate = useNavigate();
    const checkAnswer = async (isAnswer) => {
        if (isAnswer) {
            let tempScore = score + 1;
            setScore(tempScore);
            return tempScore
        }
    }

    const [quizAnswer, setQuizAnswer] = useState([])
    const onClickAnswer = (isAnswer, id) => {
        let dataAnswer = [{
            "question_id" : question[index - 1].question.id,
            "answer_id" : id
        }];
        setQuizAnswer(quizAnswer.concat(dataAnswer))
        setTimeout(function(){
            checkAnswer(isAnswer).then((tempScore) => {
                if (index<totalQuestion) {
                    setIndex(index + 1);
                } else {
                    navigate('/result', {state: {score: tempScore?tempScore:score, ip: ip, language: state, quiz: quizAnswer}})
                }
            })
        }, 500);
    }
  return(
    <div className={'container'} style={{justifyContent: 'space-between', backgroundColor: "white"}}>
        {
            isLoading ? <Loading></Loading>: ''
        }
        <div style={{height: "fit-content"}}>
            <img style={{width: 75}} src={'logo.png'} alt={'logo jetlympic'}/>
        </div>
      <div style={{backgroundColor: 'aliceblue', margin: 10, paddingBottom: 10, height: "fit-content", borderRadius: 16}}>
          <div style={{marginTop: 10, padding: 20}}>{getQuestionText()} {index}/{totalQuestion}</div>
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
                                <Answercard isTrue={o.is_answer} answer={o.text} onClick={() => onClickAnswer(o.is_answer, o.id)}/>
                            </div>
                          )
                      })
                  }
              </div>
          </div>
      </div>
        <div style={{fontSize: 12}}>&copy; System & Software</div>
    </div>
  )
}

export default Quiz;