import React from "react";

const Products = (props) => {
  const inventory = props.items.map((item, i) => (
    <div className="productBox" key={item.productName + "box"}> 
      <img src={item.img} alt={"picture of " + item.productName}></img>
      <div className="productName">{item.productName}</div>
      <div className="productPrice">{item.price}€</div>
      <footer>
        <button
          className="addToCartBtn"
          onClick={props.addToCart}
          value={[item.productName]}
        >
          to Cart
        </button>
        <button className="addToFavBtn" value={[item.productName]}>
          <i
            className="far fa-star"
            key={item.productName}
            onClick={props.newWishItem}
          ></i>
        </button>
      </footer>
    </div>
  ));

  return <div id="products">{inventory}</div>;

};

export default Products;
