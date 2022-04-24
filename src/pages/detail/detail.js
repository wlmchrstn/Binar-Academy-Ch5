import React from 'react';
import styles from './detail.module.scss';

import SearchBox from '../../modules/search-box/search-box';
import SearchDetail from '../../modules/search-detail/search-detail';

const DetailPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.hero} />
            <SearchBox step={'detail'} />
            <SearchDetail />
        </div>
    )
};

export default DetailPage;
