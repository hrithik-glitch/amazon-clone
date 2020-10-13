import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="49538094"
          title="Butterfly Desire Mixer Grinder with 4 Jars (Red and White)"
          price={1340}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81mMl6KpKUL._SX425_.jpg"
        />

        <Product
          id="12321341"
          title="Flip Phone NovaZone (Color white)"
          price={2562}
          rating={2}
          image="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="5511225"
          title="Echo Input Portable Smart Speaker Edition"
          price={3000}
          rating={4}
          image="https://content.fortune.com/wp-content/uploads/2018/09/457b2498-77e7-4dde-8a1d-fdccd9ef4366-e1537475748366.jpeg"
        />
        <Product
          id="1515125"
          title="Amazon Fire Stick remote with a Fire Stick"
          price={1999}
          rating={5}
          image="https://i.insider.com/5e4465933b62b711084fb43c?width=1136&format=jpeg"
        />
        <Product
          id="188544"
          title="Travel Adapter Plug by Ceptics with Dual USA"
          price={400}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/51OdpSKBCEL._AC_SY355_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="23652"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={40000}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91vjlAdkdfL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
