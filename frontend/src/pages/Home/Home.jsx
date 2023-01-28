import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";

import styles from "./Home.module.css";
const Home = () => {
  const signInLink = {
    color: "#0077ff",
    marginLeft: "5px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.card}`}>
          <div className={`${styles.headingWrapper}`}>
            <h1>👋 Welcome to CodePods</h1>
            <p>
              We're working hard to get CodePods ready for everyone! So everyone
              can connect with the community and add new valuable skills to
              their lives :)
            </p>
            <div>
              <button onClick={registerHandler}>
                <span>Connect to community</span>
                <img src="/images/arrow-forward.png" alt="arrow-forward" />
              </button>
            </div>
            <div className={`${styles.loginWrapper}`}>
              <span>Already registered?</span>
              <Link style={signInLink} to="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.bannerImg}`}>
          <img src="/images/banner.png" alt="banner" width="1000px" />
        </div>
      </div>
    </>
  );
};

export default Home;
