import { useState } from "react";
import "./Quiz04.css";

function Quiz04() {
    let [cnt, setCnt] = useState(1);

    return (
        <div>
            <div>
                <button
                    style={{ margin: "10px", border: "1px solid black" }}
                    onClick={() => {
                        setCnt(cnt + 1);
                    }}>
                    추가
                </button>
            </div>
            <div>
                {[...Array(cnt)].map((item, index) => {
                    return (
                        <div className="box" key={index}>
                            박스
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Quiz04;
