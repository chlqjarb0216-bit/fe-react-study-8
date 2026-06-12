import { useState } from "react";

function State03() {
    //let arr = [1,2,3,4,5]; //일반 배열 변수
    let [arr, setArr] = useState([1, 2, 3, 4, 5]);

    // let count = 10;    count = 20;

    // 참조변수 (주소)
    // { key:value, key:value }
    // [ ㅇ, ㅇ, ㅇ]
    // { key:value, key:value, key:[]  }
    // [ {}, {}, {}]

    return (
        <div>
            <button
                onClick={() => {
                    //배열에 값 추가 : push  unshift   splice
                    //  [1,2,3,4,5];
                    //arr.push(6);  // [1,2,3,4,5, 6];   [1,2,3,4,5,6,6];
                    //console.log(arr);

                    // arr = [1, 2, 3, 4, 5];
                    // arr.push(7); //arr = [1,2,3,4,5, 7]
                    // console.log(arr);
                    // setArr(arr); //화면 재렌더링이 발생하지 않음

                    //setArr( [1,2,3,4,5,7] );

                    // 깊은복사 -> 새로운 주소에 데이터 생성...
                    // let temp = arr;  //얕은 복사

                    let temp = [...arr]; //배열 깊은 복사      [...[1,2,3,4,5] ]    [1,2,3,4,5]
                    temp.push(7); //[1,2,3,4,5,7]
                    setArr(temp); //state 변수 arr에 들어있는 값(배열의 주소) 변경 인지 -> 재렌더링

                    // arr.push(8);
                    // setArr([...arr]);

                    // setArr(prev=>{arr연산로직-return다음배열}) 방식으로 연산자체를 큐에 넣어버리는게 제일 안전해보임
                }}>
                배열변경버튼
            </button>

            {arr.map((val) => {
                return <p>{val}</p>;
            })}
        </div>
    );
}

export default State03;
