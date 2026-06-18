import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Basic01 from "./components/Basic01";
import State01 from "./components/State01";
import Export01 from "./components/Export01";
import Quiz01 from "./quiz/quiz01/Quiz01";
import State02 from "./components/State02";
import State03 from "./components/State03";
import Props01 from "./components/Props01";
import Quiz02 from "./quiz/quiz02/Quiz02";
import Props02 from "./components/Props02";
import Quiz03 from "./quiz/quiz03/Quiz03";
import NewsBlog from "./newsblog/NewsBlog";
import Quiz04 from "./quiz/quiz04/Quiz04";
import Quiz05 from "./quiz/quiz05/Quiz05";
import FoodMarket from "./foodmarket/FoodMarket";
import Quiz06 from "./quiz/quiz06/Quiz06";
import Quiz07 from "../../router-quiz/src/quiz07/Quiz07";

function App() {
    // let tmp = ABC();
    // console.log(tmp);

    return (
        // <Basic01 />
        // <State01 />
        // <Export01 />
        // <Quiz01 />
        // <State02 />
        // <State03 />
        // <Props01 />
        // <Quiz02 />
        // <Props02 />
        // <Quiz03 />
        // <NewsBlog />
        // <Quiz04 />
        // <Quiz05 />
        // <FoodMarket />
        // <Quiz06 />
        // tmp[0]
        <Quiz07 />
    );
}

export default App;

// function ABC() {
//     return [
//         <div>
//             <h1>hi</h1>
//         </div>,
//         1,
//     ];
// }
