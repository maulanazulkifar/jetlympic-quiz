import React, {useState} from 'react'
import './index.css'
import HomePageHeader from "../../components/homepage/homepageheader";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const [idLanguage, setIdLanguage] = useState('en')
  const [language, setLanguage] = useState('Select a Language')
  const [start, setStart] = useState('Start Quiz')
  const [flag, setFlag] = useState(
      [
          {
              id: 'en',
              link: 'uk-flag.jpg',
              isActive: true,
              select_language: 'Select a Language',
              start: 'Start Quiz'
          },
          {
              id: 'id',
              link: 'indo-flag.png',
              isActive: false,
              select_language: 'Pilih Bahasa',
              start: 'Mulai Kuis'
          },
          {
              id: 'cn',
              link: 'ch-flag.png',
              isActive: false,
              select_language: '选择一种语言',
              start: '开始测验'
          }
      ]
  )
  const onclickMulaiQuiz = () => {
    navigate('/quiz', {state: idLanguage})
  }
  const selectLanguage = (id) => {
      flag.forEach(f => {
          if (f.isActive) {
              f.isActive = false;
          }
      })
      flag.forEach(f => {
          if (f.id === id) {
              setIdLanguage(f.id);
              setLanguage(f.select_language);
              setStart(f.start)
              f.isActive = true;
          }
      })
  }

  return (
      <div>
          <div className={'container'}>
              <div>
                  <HomePageHeader/>
              </div>
              <div>
                  <div>
                      <div style={{marginBottom: 20}}>{language}</div>
                      <div className={'flag-group'}>
                          {
                              flag.map(f => {
                                  return (
                                      <div key={f.id} className={f.isActive?'active':''} style={{padding: 10}} onClick={() => selectLanguage(f.id)}>
                                          <img className={'flag'} src={`./assets/${f.link}`} alt={'bendera'}/>
                                      </div>
                                  )
                              })
                          }
                      </div>
                  </div>
                  <button id={'breathing-button'} onClick={() => onclickMulaiQuiz()}>{start}</button>
              </div>
              <div className={'footer'} style={{fontSize: 12}}>&copy; System & Software</div>
          </div>
      </div>
  )
}

export default HomePage;