import DiscountForm from "../components/discountForm/DiscountForm";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Banner from "../components/banner/Banner";
import BlockTitle from "../components/BlockTitle/BlockTitle";
function Home() {


  return (
    <main>
      <Banner />
      <div>
        <BlockTitle title="Categories" navButton={true} />

      </div>
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
