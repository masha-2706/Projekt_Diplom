import DiscountForm from "../components/discountForm/DiscountForm";
import Banner from "../components/banner/Banner";
import { useCategories } from "../hooks/useCategories";
import { useEffect, useState } from "react";
import CardsContainerHomepage from "../components/CardsContainerHomepage/CardsContainerHomepage";
import { getAllDiscounts } from "../services/baseBackEnd";
import { getRandomArray } from "../utils/cardRenderLogic";
function Home() {

  const { categories, fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  const arrayCategories = categories.slice(0, 4)

  const [discounts, setDiscounts] = useState([])
  useEffect(() => {
    getAllDiscounts()
      .then(data => getRandomArray(data, 4))
      .then(data => setDiscounts(data))
  }, [])

  return (
    <main>
      <Banner />
      <CardsContainerHomepage title={'Categories'} array={arrayCategories} />
      <DiscountForm />
      <CardsContainerHomepage title={'Sale'} array={discounts} />

    </main>
  );
}

export default Home;
