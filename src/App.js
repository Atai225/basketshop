import React from 'react';
import './App.scss';
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage';
import Shop from './pages/Shop/Shop';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div className='wrapper'>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App