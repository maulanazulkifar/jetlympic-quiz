import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/homepage";
import Quiz from "./views/quiz";
import Result from "./views/result";
import {useEffect, useState} from "react";
import Alert_desktop from "./components/alert_desktop";

function App() {
    const isMobile = window.matchMedia("only screen and (max-width: 770px)").matches;
    console.log(isMobile)
  return (
    <div className="App">
        {/*<HomePage></HomePage>*/}
        {
            isMobile?
                <HashRouter>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="result" element={<Result />} />
                    </Routes>
                </HashRouter>:<Alert_desktop/>
        }
    </div>
  );
}

export default App;
