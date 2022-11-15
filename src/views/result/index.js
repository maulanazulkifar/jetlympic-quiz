import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ResultPage = (props) => {
  const { state } = useLocation();
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

  return (
      <div className={'container'}>
        <div>asd</div>
        <div>
          <div>Selamat Anda Berhasil !!!</div>
          <div>Skor Anda {state.score}</div>
          <div>IP Device ini {ip}</div>
        </div>
        <div>asd</div>
      </div>
  )
}

export default ResultPage;