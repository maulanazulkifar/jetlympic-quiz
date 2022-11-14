import React from 'react'
import './index.css'
import HomePageHeader from "../../components/homepage/homepageheader";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const onclickMulaiQuiz = () => {
    navigate('/quiz')
  }
  return (
    <div className={'container'}>
      <div>
        <HomePageHeader/>
      </div>
      <div>
        <button onClick={() => onclickMulaiQuiz()}>Mulai Quiz</button>
      </div>
      <div>&copy; System & Software</div>
    </div>
  )
}

export default HomePage;