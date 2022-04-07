import React, { useState } from 'react';
import styles from './homepage.module.scss';

import Hero from '../../modules/hero/hero';
import Search from '../../modules/search/search';

const Homepage = () => {
    const [hero,setHero] = useState('home');
    return (
        <div className={styles.root}>
            {hero === 'home' ? (
                <Hero />
            ) : (
                <div className={styles.hero} />
            )}
            <Search setHero={setHero} />
        </div>
    );
};

export default Homepage;
