import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import productContext from "../context/ProductContext";
const CategorieList = () => {
  const { categories } = useContext(productContext);

  return (
    <>
      <div className="container">
        <div className="promo-cards card-deck">
          {categories.map((cat) => (
            <div className="card ">
              <h5 className="card-title">{cat.cat_title} Deals</h5>
              <img
                className="card-img-top"
                src={"/img/" + cat.cat_img}
                alt={cat.cat_title}
              />

              <div className="card-body">
                <Link to={"/ProductListing/" + cat.id} className="card-link">
                  See all deals
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorieList;
