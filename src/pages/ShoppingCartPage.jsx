import React from "react";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";

function ShoppingCartPage() {
  return (
    <main>
      <Breadcrumbs />
      <ShoppingCart />
    </main>
  );
}

export default ShoppingCart;
