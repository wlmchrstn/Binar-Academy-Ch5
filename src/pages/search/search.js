import React from 'react';
import styles from './search.module.scss';

import SearchList from '../../modules/search-list/search-list';
import SearchBox from '../../modules/search-box/search-box';

const SearchPage = () => {
    return (
        <div className={styles.root}>
            <div className={styles.hero} />
            <SearchBox step={'list'} />
            <SearchList />
        </div>
    );
};

export default SearchPage;

