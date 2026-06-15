import { useState } from "react";
import "./Quiz03.css";

function initializeArr() {
    const textArr = ["하나", "둘", "셋", "넷", "다섯"];
    let tmp = 0;
    const tmpArr = [];
    for (; tmp < 5; tmp++) {
        tmpArr.push({ id: `id-${tmp}`, text: textArr[tmp] });
    }
    return [tmpArr, tmp];
}

const [tmpArr, tmp] = initializeArr();

function Quiz03() {
    const [list, setList] = useState(tmpArr);
    const [cnt, setCnt] = useState(tmp);

    return (
        <div className="App">
            {list.map((item) => {
                return <InnerComp text={item.text} key={item.id} />;
            })}
        </div>
    );
}

function InnerComp({ text }) {
    return (
        <div className="textItem">
            <p className="title">제목 : {text}</p>
            <p>내용 : 내용{text}</p>
        </div>
    );
}

export default Quiz03;
