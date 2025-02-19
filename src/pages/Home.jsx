import React from "react";
import DiscountForm from "../components/discountForm/DiscountForm";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Banner from "../components/banner/Banner";
function Home() {
  return (
    <main style={{ width: "1440px", backgroundColor: "#fffff1" }}>
      {/*мешает адаптиву style*/}
      <Banner />
      <CardsContainer
        title="Categories"
        quantity={4}
        type={"categories"}
        navButton={true}
      />
      <DiscountForm />
      <CardsContainer
        title="Sales"
        quantity={4}
        type={"randomSales"}
        navButton={true}
      />
    </main>
  );
}

export default Home;
