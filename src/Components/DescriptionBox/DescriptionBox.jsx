import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews</div>
      </div>
      <div className="description-box-description">
        <p>
          "Ecommerce" stands for electronic commerce, which refers to the buying
          and selling of goods or services using the internet, as well as the
          transfer of money and data to execute these transactions. Ecommerce
          encompasses a wide range of activities, including online retail
          stores, digital marketplaces, auction sites, and online payment
          systems.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
