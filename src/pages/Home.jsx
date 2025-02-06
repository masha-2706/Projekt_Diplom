import React from 'react'
import ContentBlock from '../components/ContentBlock/ContentBlock'

function Home() {
  return (
    // стили прописаны временно, для удобства верстки
    <div style={{ width: '1440px', backgroundColor: '#fffff1' }}>
      <p>This is HOMEPAGE</p>
      <ContentBlock title="Categories" quantity={4} type={'сategories'} navigationButtonLabel={'All categories'} />
      <ContentBlock title="Sales" quantity={4} type={'sales'} navigationButtonLabel={'All sales'} />
    </div>
  )
}

export default Home
