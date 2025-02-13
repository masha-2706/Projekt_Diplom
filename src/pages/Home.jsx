import React from 'react';
import DiscountForm from '../components/discountForm/DiscountForm';
import CardsContainer from '../components/CardsContainer/CardsContainer'
function Home() {
  return (
    <main style={{ width: '1440px', backgroundColor: '#fffff1' }}> {/*мешает адаптиву style*/}

      <CardsContainer title="Categories" quantity={4} type={'categories'} />
      <DiscountForm />
      <CardsContainer title="Sales" quantity={4} type={'randomSales'} />
    </main>
  );
}

export default Home;
