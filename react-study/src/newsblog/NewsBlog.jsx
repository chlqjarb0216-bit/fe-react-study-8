import "./NewsBlog.css";
import { useState } from "react";
import Modal from "./Modal";

function NewsBlog() {
    //제목 내용
    //하드코딩(텍스트 직접) vs 변수 vs state변수
    let title = "React Study"; // useState('React Study');

    let [news1, setNews1] = useState("어제의 뉴스");
    let [news2, setNews2] = useState("오늘의 뉴스");
    let [news3, setNews3] = useState("내일의 뉴스");

    let [news, setNews] = useState(["어제의 뉴스", "오늘의 뉴스", "내일의 뉴스"]);

    let [likeCounts, setLikeCounts] = useState([0, 0, 0]);

    let [modalIdx, setModalIdx] = useState(-1);

    // Modal 창에 전달할 선택한 뉴스 포스팅의 관련 정보
    let [selectedTitle, setSelectedTitle] = useState("");
    let [selectedLikeCount, setSelectedLikeCount] = useState("");

    //input 요소에서 입력된 값을 저장하는 용도
    let [inputText, setInputText] = useState("");

    return (
        <div>
            <div className="black-nav">
                <h3>Blog Header</h3>
                {/* <div>React Study</div> */}
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {news.map((item, index) => {
                console.log(item);
                return (
                    <NewsComp
                        title={item}
                        likeCounts={likeCounts}
                        setLikeCounts={setLikeCounts}
                        index={index}
                        modalIdx={modalIdx}
                        setModalIdx={setModalIdx}
                        key={index}
                    />
                );
            })}

            <button
                onClick={() => {
                    let temp = [...news];
                    temp[0] = "Today 긴급 속보";
                    setNews(temp);
                }}>
                긴급제목변경
            </button>

            <div>
                <input
                    type="text"
                    id="input_news_title"
                    value={inputText}
                    onChange={(event) => {
                        //input 창에서 입력이 발생 -> onChange 변경된 함수 -> value 값 -> state변수에 저장

                        //console.log(event);
                        console.log(event.target.value);
                        setInputText(event.target.value);

                        /*
                    let input_title = document.getElementById('input_news_title');
                    let title = input_title.value;

                    배열...push(title);
                    input_title.value = '';
                    */
                    }}
                />
                <button
                    onClick={() => {
                        // 발행 버튼 클릭 -> input 입력한 값 state변수에 저장된값 -> 배열에 등록/추가 처리
                        const trimed = inputText.trim();

                        if (trimed == "") return;

                        let temp = [...news];
                        temp.push(trimed);
                        setNews(temp);
                        console.log(news);

                        temp = [...likeCounts, 0];
                        setLikeCounts(temp);

                        setInputText(""); //입력된 값 제거
                    }}>
                    발행
                </button>
            </div>

            {/* <div className="post-list">
                <h4
                    onClick={() => {
                        //setModalFlag(true);

                        //setModalFlag( modalFlag ? false : true );
                        setModalFlag(!modalFlag); // !true -> false    !false -> true
                        //재렌더링

                        /* if(modalFlag){
                        setModalFlag(false);
                    } else {
                        setModalFlag(true);
                    } */
            /*
                    }}>
                    {news[0]}{" "}
                    <span
                        onClick={(event) => {
                            //event.preventDefault();
                            event.stopPropagation(); //이벤트 발생을 추가로 전파(전달)하는 것을 stop!
                            setLikeCount(likeCount + 1); //재렌더링
                        }}>
                        ❤
                    </span>{" "}
                    {likeCount}{" "}
                </h4>
                <p>내용자리</p>
            </div>
            <div className="post-list">
                <h4>{news[1]}</h4>
                <p>내용자리</p>
            </div>
            <div className="post-list">
                <h4>{news[2]}</h4>
                <p>내용자리</p>
            </div> */}

            {/* <div className='post-list'>
                <h4>{news1}</h4>
                <p>내용자리</p>
            </div>
            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용자리</p>
            </div> */}

            {/* modalFlag == true ?  <Modal/> : nul */}

            {modalIdx != -1 && (
                <Modal
                    title={news[modalIdx]}
                    likeCount={likeCounts[modalIdx]}
                    news={news}
                    setNews={setNews}
                    bgColor={"lightblue"}
                />
            )}
        </div>
    );
}

function NewsComp({ title, likeCounts, setLikeCounts, index, modalIdx, setModalIdx }) {
    return (
        <div className="post-list">
            <h4
                onClick={() => {
                    //setModalFlag(true);

                    //setModalFlag( modalFlag ? false : true );
                    setModalIdx(modalIdx != index ? index : -1); // !true -> false    !false -> true
                    //재렌더링

                    /* if(modalFlag){
                        setModalFlag(false);
                    } else {
                        setModalFlag(true);
                    } */
                }}>
                {title}{" "}
                <span
                    onClick={(event) => {
                        //event.preventDefault();
                        event.stopPropagation(); //이벤트 발생을 추가로 전파(전달)하는 것을 stop!
                        const tmpArr = [...likeCounts];
                        tmpArr[index]++;
                        setLikeCounts(tmpArr); //재렌더링
                    }}>
                    ❤
                </span>{" "}
                {likeCounts[index]}{" "}
            </h4>
            <p>내용 무</p>
        </div>
    );
}

export default NewsBlog;
