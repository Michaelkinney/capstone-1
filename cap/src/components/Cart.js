import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity, clearProduct } from "../actions/productQuantity.js";
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

function Cart({ basketProps, productQuantity, clearProduct }) {
  console.log(basketProps);

  let productsInCart = [];
  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  const productImages = (product) => {
    if (product.tagName === "NoCountryFOM") {
      return country;
    } else if (product.tagName === "DawnOfTD") {
      return dotd;
    } else if (product.tagName === "FourteenHE") {
      return forteen;
    } else if (product.tagName === "Hereditary") {
      return hereditary;
    } else if (product.tagName === "BodyOfLies") {
      return lies;
    } else if (product.tagName === "LightHouse") {
      return lighthouse;
    } else if (product.tagName === "Revenant") {
      return rev;
    } else if (product.tagName === "CRoyale") {
      return royale;
    } else if (product.tagName === "Sicario") {
      return sicario;
    } else if (product.tagName === "SavingPR") {
      return spr;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    console.log("My product is: ");
    console.log(product);
    return (
      <Fragment>
        <div className="product">
          <ion-icon
            onClick={() => clearProduct(product.tagName)}
            name="close-circle"
          ></ion-icon>
          <img src={productImages(product)} />
          <span className="sm-hide">{product.name}</span>
        </div>
        <div className="price sm-hide">${product.price}.00</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", product.tagName)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{product.numbers}</span>
          <ion-icon
            onClick={() => productQuantity("increase", product.tagName)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${product.numbers * product.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
      <div className="products">{productsInCart}</div>
      <div className="basketTotalContainer">
        <h4 className="basketTotalTitle">Cart Total:</h4>
        <h4 className="basketTotal">${basketProps.cartCost}.00</h4>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
