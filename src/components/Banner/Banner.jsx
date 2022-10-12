import React from 'react';
import {motion} from 'framer-motion';
import bannerImg from '../../assets/kyrie5.png';
import './Banner.scss'


const banner = {
    hidden: { x: -1980 },
    visible: {
        x: 0,
        transition: {
            duration: .2,
            delay: .2,
            type: 'spring',
        }
    }
};

function Banner() {
    return (
        <motion.div
            variants={banner}
            initial="hidden"
            animate="visible"
            className='banner'
        >
            <div className='banner__info'>
                <h1 className='banner__title'>Нужны баскетбольные кроссовки?</h1>
                <p className='banner__desc'>Тут ты найдешь для себя лучшие кроссвоки для занятия баскетболом. У нас очень большой выбор!</p>
                <button className='button' type="button">Заказать</button>
            </div>
            <img className='banner__img img' src={bannerImg} alt='Kyrie7' />
        </motion.div>
    )
}

export default Banner