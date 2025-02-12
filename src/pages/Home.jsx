import React from 'react';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import DiscountForm from '../components/discountForm/DiscountForm';
import Banner from '../components/banner/Banner';


import React from 'react'
import CardsContainer from '../components/CardsContainer/CardsContainer'
import BannerHome from "../components/bannerHome/BannerHome";
import DiscountForm from "../components/discountForm/DiscountForm";
function Home() {
  return (
    <main style={{ width: '1440px', backgroundColor: '#fffff1' }}> {/*мешает адаптиву style*/}
      <BannerHome />
      <CardsContainer title="Categories" quantity={4} type={'сategories'} navigationButtonLabel={'All categories'} />
      <DiscountForm />
      <CardsContainer title="Sale" quantity={4} type={'sales'} navigationButtonLabel={'All sales'} />
    </main>
  );
}

export default Home;
