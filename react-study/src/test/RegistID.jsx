import { useNavigate } from "react-router";

function RegistID() {
    let navigate = useNavigate();

    return (
        <div>
            <p>회원가입</p>
            <form action="">
                <label style={{ whiteSpace: "pre-wrap" }}>
                    {"아이디*\t"}
                    <input type="text" />
                </label>
                <label style={{ whiteSpace: "pre-wrap" }}>
                    {"비밀번호*\t"}
                    <input type="password" />
                </label>
                <label style={{ whiteSpace: "pre-wrap" }}>
                    {"이메일\t"}
                    <input type="text" />
                </label>
                <p style={{ color: "gray" }}>*표는 필수입력입니다.</p>
                <button
                    onClick={() => {
                        navigate("items");
                    }}>
                    회원가입
                </button>
            </form>
        </div>
    );
}

export default RegistID;
