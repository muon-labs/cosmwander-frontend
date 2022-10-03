import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-[#151416]'>
      <span className='text-sm text-secondary sm:text-center horiz'>
        <img src='/logo_cosmwander.svg' style={{ height: 32 }} />
        <p className='ml mr'>by</p>
        <img
          style={{ cursor: 'pointer', height: 24 }}
          onClick={() => window.open('https://twitter.com/Muon_labs')}
          src='/muon_logo.png'
        />
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-400sm:mt-0'>
        <li>
          <a
            target='_blank'
            href='https://twitter.com/cosmwander'
            className='mr-4 hover:underline md:mr-6'
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target='_blank'
            href='https://t.me/+jK9QOgdmmJEzYzlh'
            className='mr-4 hover:underline md:mr-6'
          >
            Telegram
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
