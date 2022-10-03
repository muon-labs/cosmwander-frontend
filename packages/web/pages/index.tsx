import React from 'react'
import Footer from '../src/partials/Footer'
import App from '../src/partials/App'

export async function getServerSideProps ({ req, res }) {
  console.log({ req, res })
  // redirect to osmosis-1
  res.writeHead(307, {
    Location: '/osmosis-1'
  })
  res.end()
  return {
    props: {}
  }
}

function Home () {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main
        className='flex-grow'
        // style={{
        //   background: 'radial-gradient(#0089, transparent);',
        //   marginBottom: '6rem'
        // }}
      >
        {/*  Page sections */}
        <App />
      </main>
      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
