import "./index.css"

const AnswerCard = (props) => {

  const onClickAnswer = () => {
  }
  return(
      <button onClick={() => onClickAnswer()} className={'card'}>{props.answer}</button>
  )
}

export default AnswerCard;