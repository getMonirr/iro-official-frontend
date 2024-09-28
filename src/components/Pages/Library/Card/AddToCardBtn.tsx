"use client";

import { Button } from "antd";
import React from "react";

const AddToCardBtn = () => {
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add your add-to-cart logic here
    console.log("Add to cart clicked");
  };

  return (
    <Button
      className="mt-[50%] z-50"
      type="primary"
      size="large"
      onClick={handleAddToCartClick}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCardBtn;
