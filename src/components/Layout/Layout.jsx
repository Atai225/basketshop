import React from 'react'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss'

function Layout({children}) {
  return (
    <>
        <Header/>
        <main className='main'>
             {children}
        </main>
        {/* <Footer/> */}
    </>
  )
}

export default Layout