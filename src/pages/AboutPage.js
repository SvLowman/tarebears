import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <div className="aboutContainer">
        <div className="textContainer">
          <div className="aboutText">
            <p>Zu viel Insulin intus?</p>
            <p>
              TareBears rechnet grammgenau Mengen von kohlenhydrathaltigem Essen
              in ihr Gummibärchen-Äquivalent um. So lassen sich überschüssige
              Insulinmengen auffangen.
            </p>
            <p>
              Auf der Seite{" "}
              <Link to="/valuepage" className="valueLink">
                Meine Werte
              </Link>{" "}
              kannst du den Kohlenhydratgehalt von beliebig vielen Lebensmitteln
              abspeichern.
            </p>
            <p>
              Im{" "}
              <Link to="/" className="calcLink">
                Rechner
              </Link>{" "}
              kannst du dann auf diese Werte zugreifen und für jede beliebige
              Menge davon ausrechnen, wie vielen Gummibärchen die darin
              enthaltenen Kohlenhydrate entspricht.
            </p>
          </div>
        </div>
        <div className="roundedBottom"></div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
