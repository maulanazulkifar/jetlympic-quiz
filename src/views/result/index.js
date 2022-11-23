import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import "./index.css"

const ResultPage = (props) => {
  const { state } = useLocation();
    const [text, setText] = useState('');
    useEffect( () => {
        const dataAnswer = {
            ip: state.ip,
            score: state.score,
            quiz: state.quiz
        }
        // service.post(`jetlimpic/quiz/${state.language}`, dataAnswer).then(res => {
        //     console.log(res)
        // })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getText = (state) => {
        if (state.score === 10) {
            if (state.language === 'id') {
                return (
                  <div style={{fontSize: '1.5em'}}>Selamat kamu telah mendapatkan
                    <div className={'score-text'}>
                      <div style={{fontWeight: 'bold'}}>
                        <span style={{color: "red"}}>{state.score}</span>
                        <div style={{color: "red"}}>Poin</div>
                      </div>
                    </div>
                    <div className={'desc-text'}>
                      Begitu menakjubkan! Silakan menuju area penukaran untuk redeem hadiah kamu!
                    </div>
                  </div>
                )
            } else if (state.language === 'en') {
                return (
                  <div>Congratulation, you get
                    <div className={'score-text'}>
                      <span style={{color: "red"}}>{state.score}</span>
                      <div style={{color: "red"}}>point</div>
                    </div>
                    <div className={'desc-text'}>
                      It's amazing! Please go to the redemption area to get a small gift!
                    </div>
                  </div>
                )
            } else {
                return (
                  <div>恭喜你获得
                    <div className={'score-text'}>
                      <span style={{color: "red"}}>{state.score}</span>
                      <div style={{color: "red"}}>point</div>
                    </div>
                    <div>
                      太厉害了！请到兑换区域领取一份小礼品吧！
                    </div>
                  </div>
                )
            }
        } else {
            if (state.language === 'id') {
                return (
                    <div style={{fontSize: '1.5em'}}>Selamat kamu telah mendapatkan
                        <div className={'score-text'}>
                          <div style={{fontWeight: 'bold'}}>
                            <span style={{color: "red"}}>{state.score}</span>
                            <div style={{color: "red"}}>Poin</div>
                          </div>
                        </div>
                        <div className={'desc-text'}>
                            Jika kamu menjawab semua dengan benar, kamu akan mendapat suvenir! Ayo tantang lagi~
                        </div>
                    </div>
                )
            } else if (state.language === 'en') {
                return (
                    <div>Congratulation, you get
                        <div style={{fontWeight: 'bold'}} className={'score-text'}>
                            <span style={{color: "red"}}>{state.score}</span>
                            <div style={{color: "red"}}>point</div>
                        </div>
                        <div className={'desc-text'}>
                            If you answer all the questions correctly, you will receive an exquisite small gift! Let's challenge again~
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>恭喜你获得
                        <div className={'score-text'}>
                            <span style={{color: "red"}}>{state.score}</span>
                            <div style={{color: "red"}}>point</div>
                        </div>
                        <div>
                            如果全部答对将获得精美小礼品哦！再来挑战一次吧～`
                        </div>
                    </div>
                )
            }
        }
    }

    const getBackButton = () => {
      if (state.language === 'en') {
        return 'Back To Home'
      } else if (state.language === 'id') {
        return 'Kembali ke Beranda'
      } else {
        return '回到家'
      }
    }

  const navigate = useNavigate();
    const onclickBack = (props) => {
      navigate('/');
    }

  return (
      <div className={'container'}>
          <img style={{width: 100}} src={'logo.png'} alt={'logo jetlympic'}/>
        <div style={{backgroundColor: "white", margin: '1em', padding: '1em'}}>
          <div className={'result-text'}>{getText(state)}</div>
          <div>
            <button id={'breathing-button'} onClick={() => onclickBack()}>{getBackButton()}</button>
          </div>
        </div>
          <div style={{fontSize: 12, padding: 10}}>&copy; System & Software</div>
      </div>
  )
}

export default ResultPage;