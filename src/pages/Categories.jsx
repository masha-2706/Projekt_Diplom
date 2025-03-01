import React from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import CategoryCard from "../components/CategoryCard/CategoryCard";

function Categories() {
  return (
    <main>
      {/* хлебные крошки */}
      {<Breadcrumbs />}

      <CardsContainer
        title="Categories"
        type={"categories"}
        navButton={false}
      />
  
    </main>
  );
}

export default Categories;
