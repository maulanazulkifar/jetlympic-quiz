import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./index.css"
import service from "../../services/api";

const ResultPage = (props) => {
  const { state } = useLocation();
    const [text, setText] = useState('');
    useEffect( () => {
        const dataAnswer = {
            ip: state.ip,
            score: state.score,
            quiz: state.quiz
        }
        service.post(`jetlimpic/quiz/${state.language}`, dataAnswer).then(res => {
            console.log(res)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getText = (state) => {
        if (state.score === 10) {
            if (state.language === 'id') {
                return 'Selamat kamu telah mendapatkan 10 poin! Begitu menakjubkan! Silakan menuju area penukaran untuk redeem hadiah kamu!'
            } else if (state.language === 'en') {
                return 'Congratulations on getting full score of 10 points! It\'s amazing! Please go to the redemption area to get a small gift!'
            } else {
                return '恭喜你获得满分10points！太厉害了！请到兑换区域领取一份小礼品吧！'
            }
        } else {
            if (state.language === 'id') {
                return `Selamat kamu telah mendapatkan ${state.score} poin! Jika kamu menjawab semua dengan benar, kamu akan mendapat suvenir! Ayo tantang lagi~`
            } else if (state.language === 'en') {
                return `Congratulation, you get ${state.score} point! If you answer all the questions correctly, you will receive an exquisite small gift! Let's challenge again~`
            } else {
                return `恭喜你获得 ${state.score} points！如果全部答对将获得精美小礼品哦！再来挑战一次吧～`
            }
        }
    }

  return (
      <div className={'container'}>
          <img className={'logo'} src={'logo.png'} alt={'logo jetlympic'}/>
        <div>
          <div className={'result-text'}>{getText(state)}</div>
        </div>
          <div style={{fontSize: 12}}>&copy; System & Software</div>
      </div>
  )
}

export default ResultPage;