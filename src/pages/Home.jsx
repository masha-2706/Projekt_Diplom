import React from 'react';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import DiscountForm from '../components/discountForm/DiscountForm';
import Banner from '../components/banner/Banner';


function Home() {
  return (
    <div style={{ width: '1440px', backgroundColor: '#fffff1' }}> {/*мешает адаптиву style*/}
      <Banner />
      <ContentBlock title="Categories" quantity={4} type={'сategories'} navigationButtonLabel={'All categories'} />
      <DiscountForm />
      <ContentBlock title="Sales" quantity={4} type={'sales'} navigationButtonLabel={'All sales'} />
    </div>
  );
}

export default Home;
