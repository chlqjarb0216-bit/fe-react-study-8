import { useState } from "react";

function Quiz02() {
    const textList = ["하나", "둘", "셋"];
    let [idx, setIdx] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
            <p>{textList[idx]}</p>
            <br />
            <button
                onClick={() => {
                    setIdx(++idx % textList.length);
                }}>
                변경버튼
            </button>
        </div>
    );
}

export default Quiz02;
