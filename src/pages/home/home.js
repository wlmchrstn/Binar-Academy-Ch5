import React from 'react';
// import { connect } from 'react-redux';
import styles from './home.module.scss';

import Hero from '../../modules/hero/hero';
import SearchBox from '../../modules/search-box/search-box';

const HomePage = ({ props }) => {
    return (
        <div className={styles.root}>
            <Hero />
            <SearchBox />
        </div>
    );
};

// const mapStateToProps = (state) => {
//     return {
//         dataFromRedux : state.totalHarga,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addHarga : () => dispatch({ type: "ADDHARGA" }),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePage;
