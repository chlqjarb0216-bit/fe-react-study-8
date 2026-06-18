import { Routes, Link, Route } from "react-router";
import "./Quiz07.css";

function Quiz07() {
    return (
        <>
            <div id="q-navbar">
                <Link className="q-link" to="/">
                    Main
                </Link>
                <Link className="q-link" to="/info">
                    /info
                </Link>
                <Link className="q-link" to="/mypage">
                    /mypage
                </Link>
                <Link className="q-link" to="/cart">
                    /cart
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<p className="p-main">Main</p>} />
                <Route
                    path="/info"
                    element={
                        <h1 className="h1-element">
                            <strong>info</strong> 공간입니다.
                        </h1>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <h1 className="h1-element">
                            <strong>mypage</strong> 공간입니다.
                        </h1>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <h1 className="h1-element">
                            <strong>cart</strong> 공간입니다.
                        </h1>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <h1 className="h1-element">
                            <strong>잘못된</strong> 주소입니다.
                        </h1>
                    }
                />
            </Routes>
        </>
    );
}

export default Quiz07;
