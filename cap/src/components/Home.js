import React, { useState } from "react";
import country from "../images/country.jpg";
import dotd from "../images/dotd.jpg";
import forteen from "../images/forteen.jpg";
import hereditary from "../images/hereditary.jpg";
import lies from "../images/lies.jpg";
import lighthouse from "../images/lighthouse.jpg";
import rev from "../images/rev.jpg";
import royale from "../images/royale.jpg";
import sicario from "../images/sicario.jpg";
import spr from "../images/spr.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Home = (props) => {
  console.log(props);
  return (
    <div className="container">
      <div className="image">
        <img src={country} alt="No Country For Old Men" />
        <h3>$20.00</h3>
        <h3>#0001</h3>
        <h3>Thriller</h3>
        <a
          onClick={() => props.addBasket("NoCountryFOM")}
          className="addToCart cart1"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={dotd} alt="Dawn of the Dead" />
        <h3>$20.00</h3>
        <h3>#0002</h3>
        <h3>Horror</h3>
        <a
          onClick={() => props.addBasket("DawnOfTD")}
          className="addToCart cart2"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={forteen} alt="1408" />
        <h3>$20.00</h3>
        <h3>#0003</h3>
        <h3>Horror</h3>
        <a
          onClick={() => props.addBasket("FourteenHE")}
          className="addToCart cart3"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={hereditary} alt="Hereditary" />
        <h3>$20.00</h3>
        <h3>#0004</h3>
        <h3>Horror</h3>
        <a
          onClick={() => props.addBasket("Hereditary")}
          className="addToCart cart4"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={lies} alt="Body of Lies" />
        <h3>$20.00</h3>
        <h3>#0005</h3>
        <h3>Spy</h3>
        <a
          onClick={() => props.addBasket("BodyOfLies")}
          className="addToCart cart5"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={lighthouse} alt="The Lighthouse" />
        <h3>$20.00</h3>
        <h3>#0006</h3>
        <h3>Horror</h3>
        <a
          onClick={() => props.addBasket("LightHouse")}
          className="addToCart cart6"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={rev} alt="Revenant" />
        <h3>$20.00</h3>
        <h3>#0007</h3>
        <h3>Suspense</h3>
        <a
          onClick={() => props.addBasket("Revenant")}
          className="addToCart cart7"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={royale} alt="Casino Royale" />
        <h3>$20.00</h3>
        <h3>#0008</h3>
        <h3>Spy</h3>
        <a
          onClick={() => props.addBasket("CRoyale")}
          className="addToCart cart8"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={sicario} alt="Sicario" />
        <h3>$20.00</h3>
        <h3>#0009</h3>
        <h3>Thriller</h3>
        <a
          onClick={() => props.addBasket("Sicario")}
          className="addToCart cart9"
          href="#"
        >
          Add to cart
        </a>
      </div>

      <div className="image">
        <img src={spr} alt="Saving Private Ryan" />
        <h3>$20.00</h3>
        <h3>#0010</h3>
        <h3>WW2</h3>
        <a
          onClick={() => props.addBasket("SavingPR")}
          className="addToCart cart10"
          href="#"
        >
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(Home);
