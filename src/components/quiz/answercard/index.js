import "./index.css"
import {useState} from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const AnswerCard = (props) => {

    const [isTrue, setIsTrue] = useState(false);
    const [isFalse, setIsFalse] = useState(false);


  const onClickAnswer = () => {
    props.onClick()
    if (props.isTrue) {
      setIsTrue(true)
    } else {
      setIsFalse(true)
    }
  }
  return(
      <div className={'container-answer'}>
          <div className={'logo'}>
              {
                  isTrue ? <CheckCircleOutlineOutlinedIcon className="material-symbols-outlined" style={{color: "green", fontSize: 150}}/> :
                    ''
              }
              {
                  isFalse ? <CancelOutlinedIcon className="material-symbols-outlined" style={{color: "red", fontSize: 150}}/> :
                      ''
              }
          </div>
        <button onClick={() => onClickAnswer()} className={isTrue ? 'card-true': 'card' && isFalse? 'card-false':'card'}>{props.answer}</button>
      </div>
  )
}

export default AnswerCard;