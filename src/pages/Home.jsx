
import React from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock'
import BannerHome from "../components/bannerHome/BannerHome";
import DiscountForm from "../components/discountForm/DiscountForm";
function Home() {
  return (
    <main style={{ width: '1440px', backgroundColor: '#fffff1' }}> {/*мешает адаптиву style*/}
      <BannerHome />
      <ContentBlock title="Categories" quantity={4} type={'сategories'} navigationButtonLabel={'All categories'} />
      <DiscountForm />
      <ContentBlock title="Sale" quantity={4} type={'sales'} navigationButtonLabel={'All sales'} />
    </main>
  );
}

export default Home