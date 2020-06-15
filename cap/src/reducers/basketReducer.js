import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
} from "../actions/types";
import { productQuantity } from "../actions/productQuantity";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    NoCountryFOM: {
      name: "No Country For Old Men",
      tagName: "NoCountryFOM",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    DawnOfTD: {
      name: "Dawn of the Dead",
      tagName: "DawnOfTD",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    FourteenHE: {
      name: "1408",
      tagName: "FourteenHE",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    Hereditary: {
      name: "Hereditary",
      tagName: "Hereditary",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    BodyOfLies: {
      name: "Body of Lies",
      tagName: "BodyOfLies",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    LightHouse: {
      name: "The Lighthouse",
      tagName: "LightHouse",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    Revenant: {
      name: "Revenant",
      tagName: "Revenant",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    CRoyale: {
      name: "Casino Royale",
      tagName: "CRoyale",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    Sicario: {
      name: "Sicario",
      tagName: "Sicario",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
    SavingPR: {
      name: "Saving Private Ryan",
      tagName: "SavingPR",
      price: 20.0,
      numbers: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      productSelected = { ...state.products[action.payload] };

      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_NUMBERS_BASKET:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.numbers += 1;
      return {
        ...state,
        basketNumbers: state.basketNumbers + 1,
        cartCost: state.cartCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      let newBasketNumbers = 0;
      if (productSelected.numbers === 0) {
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newBasketNumbers = state.basketNumbers;
      } else {
        productSelected.numbers -= 1;
        newCartCost = state.cartCost - state.products[action.payload].price;
        newBasketNumbers = state.basketNumbers - 1;
      }
      return {
        ...state,
        basketNumbers: newBasketNumbers,
        cartCost: newCartCost,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    case CLEAR_PRODUCT:
      productSelected = { ...state.products[action.payload] };
      let numbersBackup = productSelected.numbers;
      productSelected.numbers = 0;
      productSelected.inCart = false;
      return {
        ...state,
        basketNumbers: state.basketNumbers - numbersBackup,
        cartCost: state.cartCost - numbersBackup * productSelected.price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };

    default:
      return state;
  }
};
