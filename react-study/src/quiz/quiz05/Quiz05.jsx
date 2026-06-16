import { useState } from "react";
import "./Quiz05.css";

const addFront = (color, boxManager, setBoxManager) => {
    setBoxManager({
        cnt: boxManager.cnt + 1,
        boxes: [{ color: color, id: boxManager.cnt }, ...boxManager.boxes],
    });
};

const addBack = (color, boxManager, setBoxManager) => {
    setBoxManager({
        cnt: boxManager.cnt + 1,
        boxes: [...boxManager.boxes, { color: color, id: boxManager.cnt }],
    });
};

function Quiz05() {
    const [boxManager, setBoxManager] = useState({
        cnt: 4,
        boxes: [
            { color: "red", id: 0 },
            { color: "blue", id: 1 },
            { color: "green", id: 2 },
            { color: "black", id: 3 },
        ],
    });

    return (
        <>
            <div>
                <button
                    onClick={() => {
                        addFront("red", boxManager, setBoxManager);
                    }}>
                    앞빨간박스추가
                </button>
                <button
                    onClick={() => {
                        addFront("blue", boxManager, setBoxManager);
                    }}>
                    앞파란박스추가
                </button>
                <button
                    onClick={() => {
                        addFront("green", boxManager, setBoxManager);
                    }}>
                    앞초록박스추가
                </button>

                <button
                    onClick={() => {
                        addBack("red", boxManager, setBoxManager);
                    }}>
                    뒤빨간박스추가
                </button>
                <button
                    onClick={() => {
                        addBack("blue", boxManager, setBoxManager);
                    }}>
                    뒤파란박스추가
                </button>
                <button
                    onClick={() => {
                        addBack("green", boxManager, setBoxManager);
                    }}>
                    뒤초록박스추가
                </button>
                <button
                    onClick={() => {
                        const tmpBoxes = [...boxManager.boxes];
                        tmpBoxes.shift();
                        setBoxManager({
                            cnt: boxManager.cnt,
                            boxes: tmpBoxes,
                        });
                    }}>
                    앞 박스 삭제
                </button>
                <button
                    onClick={() => {
                        const tmpBoxes = [...boxManager.boxes];
                        tmpBoxes.pop();
                        setBoxManager({
                            cnt: boxManager.cnt,
                            boxes: tmpBoxes,
                        });
                    }}>
                    뒤 박스 삭제
                </button>
            </div>
            <div>
                {boxManager.boxes.map((item) => {
                    return <div className={"box " + item.color} key={item.id}></div>;
                })}
            </div>
        </>
    );
}

export default Quiz05;
