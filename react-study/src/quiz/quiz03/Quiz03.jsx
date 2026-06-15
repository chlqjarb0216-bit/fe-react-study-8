import "./Quiz03.css";

function Quiz03() {
    const textArr = ["하나", "둘", "셋", "넷", "다섯"];

    return (
        <div className="App">
            {textArr.map((item) => {
                return <InnerComp text={item} key={item} />;
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
