
import React from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock'
import BannerHome from "../components/bannerHome/BannerHome";
import DiscountForm from "../components/discountForm/DiscountForm";
function Home() {
  return (
    <div>
      <BannerHome />
      <div style={{ width: '1440px' }}> 
      <ContentBlock title="Categories" quantity={4} type={'сategories'} navigationButtonLabel={'All categories'} />
      <DiscountForm />
      <ContentBlock title="Sales" quantity={4} type={'sales'} navigationButtonLabel={'All sales'} />
    </div>
    </div>
  );
}

export default Home