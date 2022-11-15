import "./index.css"

const AnswerCard = (props) => {

  const onClickAnswer = () => {
    props.onClick()
  }
  return(
      <button onClick={() => onClickAnswer()} className={'card'}>{props.answer}</button>
  )
}

export default AnswerCard;