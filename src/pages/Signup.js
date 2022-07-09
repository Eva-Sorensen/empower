import { useNavigate } from "react-router-dom";
import style from "../css/Signup.module.css";

export default function Signup() {
  const navigate = useNavigate();
  const submitClick = () => {
    navigate("/whereto", { replace: true });
  };
  return (
    <div className={style.background}>
      <div className={style.mainSection}>
        <div className={style.formContainer}>
          <form className={style.form}>
            <input
              type="text"
              className={style.input}
              placeholder="Email"
            ></input>
            <input
              type="password"
              className={style.input}
              placeholder="Password"
            ></input>
            <input
              type="password"
              className={style.input}
              placeholder="Confirm Password"
            ></input>
          </form>
          <button
            type="button"
            className={style.listLink}
            onClick={submitClick}
          >
            Submit
          </button>
        </div>
        <div className={style.bottomSection}>
          <div className={style.signupSection}>
            <p>Sign Up</p>
          </div>
          <div className={style.loginSection}>
            <p>Log in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
