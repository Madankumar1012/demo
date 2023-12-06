import logo from "./logo.svg";
import "./App.css";
import Movies from "./vinny/Movies";

function App() {
  return (
    <div className="app">
      <h1>
        <mark>SITA</mark> RAMAM❤️
      </h1>
      <p>
        {" "}
        An orphaned soldier's life changes after he receives a letter from a
        girl named Sita. He meets her and love blossoms between them. <br></br>{" "}
        When he returns to her camp in Kashmir, he sends a letter to Sita that
        will not reach her.❤️
      </p>
      <div className="RAM">
        <div className="sita">
          <img src="./images/sita.jpg"></img>
          <img src="./images/ramam.jpg"></img>
          <img src="./images/12.jpg"></img>
        </div>

        <p className="story">
          In 1964, a Pakistani extremist Ansari expects to break the brotherly
          bond between Kashmiri Pandits and Muslims using the Indian Army as a
          pawn through his machination, as a part of which he sends a few
          brainwashed teenagers to live in Kashmir as its natives. In 1985, an
          aggressive Pakistani rabble-rouser Afreen is demanded by the dean of
          her university in London to apologize to an Indian philanthropist
          Anand Mehta for setting his car ablaze in retaliation for burning
          Pakistani flag. When Afreen repudiates, Mehta asks her to pay a
          compensation of 10 lakhs INR within a month or else she will be sent
          to prison. Afreen undertakes an initiative to reconcile with her
          estranged grandfather Abu Tariq, former Brigadier of Pakistani Army
          and take money from him. Hence, she flies to Karachi, Pakistan only to
          learn that he died of illness a few days ago and she, herself is
          supposed to deliver a letter of Indian Army Lieutenant Ram, written in
          1965 to Sita Mahalakshmi of Hyderabad, India which her grandfather
          could not deliver by means of post. According to Tariq's will, she
          would inherit his wealth only after the letter is delivered to Sita.
          Left with no choice, Afreen goes to Noor Jahan Palace, Hyderabad where
          the letter is intended but realizes that the palace was donated by its
          princess Noor Jahan for higher education of girls twenty years ago.
        </p>
      </div>

      <Movies />
    </div>
  );
}

export default App;
