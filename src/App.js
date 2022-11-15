import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/homepage";
import Quiz from "./views/quiz";
import Result from "./views/result";

function App() {
  return (
    <div className="App">
        {/*<HomePage></HomePage>*/}
        <HashRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
