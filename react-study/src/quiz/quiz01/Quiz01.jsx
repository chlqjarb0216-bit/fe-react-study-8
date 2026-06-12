import { useState } from "react";

function Quiz01() {
    let [even, setEven] = useState(0);

    return (
        <div style={{ textAlign: "left" }}>
            <button
                onClick={() => {
                    setEven(even + 2);
                }}>
                짝수출력
            </button>
            <span style={{ color: "red" }}>{even > 0 ? even : ""}</span>
        </div>
    );
}

export default Quiz01;
