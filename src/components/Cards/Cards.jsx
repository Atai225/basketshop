import React from 'react';
import {motion} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Cards.scss'


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: .5,
            staggerChildren: .2,
        }
    }
};

const item = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1
    }
};


function Cards({cards}) {
    const nav = useNavigate();

    return (
        <motion.div
            className='cards'
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {cards.map((card) => (
                <motion.div
                    onClick={() => nav(card.href)}
                    variants={item}
                    key={card.id}
                    className='card'>
                    <h3 className='card__name'>{card.name}</h3>
                    <img className='card__img img' src={card.img} alt={card.name} />
                    <img className='arrow' src={card.arrow} alt='arrow' />
                </motion.div>
            ))}

        </motion.div>
    )
}

export default Cards