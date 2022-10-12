import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import {MAINCARDS} from '../../data'

function Main() {
    return (
        <div className='main__container _container'>
            <Banner/>
            <Cards cards={MAINCARDS}/>
        </div>
    )
}

export default Main