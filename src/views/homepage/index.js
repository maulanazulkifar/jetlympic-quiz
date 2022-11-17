import React, {useState} from 'react'
import './index.css'
import HomePageHeader from "../../components/homepage/homepageheader";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const [idLanguage, setIdLanguage] = useState('en')
    const [greeting, setGreeting] = useState('Hi, Sand’s people, let’s see how much you know about Sands! ')
  const [language, setLanguage] = useState('Select a Language')
  const [start, setStart] = useState('Let’s start')
  const [flag, setFlag] = useState(
      [
          {
              id: 'en',
              link: 'uk-flag.jpg',
              isActive: true,
              select_greeting: 'Hi, Sand’s people, let’s see how much you know about Sands! ',
              select_language: 'Select a Language',
              start: 'Let’s start'
          },
          {
              id: 'id',
              link: 'indo-flag.png',
              isActive: false,
              select_greeting: 'Halo rekan-rekan SANDS, Yuk! Uji seberapa baik kamu mengenal SANDS!',
              select_language: 'Pilih Bahasa',
              start: 'Mulai Menjawab'
          },
          {
              id: 'cn',
              link: 'ch-flag.png',
              isActive: false,
              select_greeting: '你好沙滩人，来测试一下你对沙滩的了解有多深吧！',
              select_language: '选择一种语言',
              start: '开始答题'
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
              setStart(f.start);
              setGreeting(f.select_greeting);
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
              <div style={{padding: 10}}>{greeting}</div>
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