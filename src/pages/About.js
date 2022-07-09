import { useNavigate } from "react-router-dom";
import style from "../css/About.module.css";

export default function About() {
  const navigate = useNavigate();
  const submitClick = () => {
    navigate("/signup", { replace: true });
  };
  return <div className="container fade left">
      <h2>About Us</h2>
      <p>Why are we here?</p>
      <p>We want to give woman the power of independence.</p>
      <p>We know not all woman have the same freedoms most of us take for granted.  
        Some woman feel oppressed or controlled by those they live with, 
        whether it's by physical means, financial or mental.  
        We want to give woman the power to support themselves in everything they do.  
      </p>
      <p>Through Empower, you can talk to other women, make friends, provide support and find your own freedom in the world</p>
      <br />
      <div className={style.link_button} onClick={submitClick}>
        <div class={style.link_wrapper}>
          <a href="#">Join the cause!</a>
          <div class={style.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>;
}
