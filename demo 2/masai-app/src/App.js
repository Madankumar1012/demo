import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="firstline">
        Admissions for our 18th December batch are open.
        <a className="apply" href="APPLY NOW">
          APPLY NOW
        </a>
      </div>

      <div className="secondline">
        <div className="logo">
          <img width="100%" height="auto" src="./images/logo.png"></img>
        </div>
        <div className="links">
          <div className="course">
            <a href="COURSES">COURSES</a>
          </div>
          <div className="fees">
            <a href="FEES">FEES</a>
          </div>
          <div className="event">
            <a href="EVENTS">EVENTS</a>
          </div>
          <div className="learn">
            <a href="LEARN">LEARN</a>
          </div>
          <div className="stories">
            <a href="SUCCESS STORIES">SUCCESS STORIES</a>
          </div>
          <div className="hire">
            <a href="HIRE FROM US">HIRE FROM US</a>
          </div>
        </div>
        <div className="refer">
          <div className="earn">
            <a href="REFER & EARN">REFER & EARN</a>
          </div>
          <div className="sign">
            <a href="SIGN UP">SIGN UP</a>
          </div>
        </div>
      </div>
      <img width="100%" height="230px" src="./images/pic.webp"></img>
      <div className="student">
        <div className="para">
          <h1>
            Realise Your Potential With,<br></br>
            <mark>Assured Outcomes ,</mark>
            <br></br>
            Delivered.
          </h1>
          <div>
            <div>
              <p>
                India’s only outcome-based career institute. <br></br>
                Enter the tech workforce industry-ready.
              </p>
            </div>
            <div>
              <a className="job" href="GET YOUR DREAM JOB">
                GET YOUR DREAM JOB
              </a>
            </div>
          </div>
        </div>
        <div>
          <img width="100%" height="350px" src="./images/student.webp"></img>
        </div>
      </div>
      <div>
        <div>
          <h1 className="h1">
            Driven By <mark> Outcomes</mark> To Launch Your Career In Tech
          </h1>
        </div>
        <div>
          <img
            className="vector"
            width="200px"
            src="./images/yellow-vector.svg"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
