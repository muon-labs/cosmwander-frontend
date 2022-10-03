import React from 'react'
import Footer from '../src/partials/Footer'
import Hero from '../src/partials/Hero'

// export function getServerSideProps (context) {
//   // redirect to app
//   context.res.writeHead(307, {
//     Location: '/app'
//   })
//   context.res.end()
//   return {
//     props: {}
//   }
// }

function Home () {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main
        className='flex-grow'
        style={{
          marginBottom: '6rem'
        }}
      >
        {/*  Page sections */}
        <Hero />
      </main>

      {/*  Site footer */}
      {/* 
      // @ts-ignore */}
      <Footer />
    </div>
  )
}

export default Home
