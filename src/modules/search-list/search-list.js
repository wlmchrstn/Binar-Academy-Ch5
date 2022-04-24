/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllCar } from '../../stores/actions/ActionListCar';
import styles from './search-list.module.scss';

import Card from '../../components/card/card';

const SearchList = (props) => {
    useEffect(() => {
        props.getAllCar(props.driver);
    }, [props.driver]);

    const getCard = (params) => {
        return params.map((value, index) => {
            return (
                <Card
                    key={index}
                    id={value.id}
                    name={value.name}
                    category={value.category}
                    price={value.price}
                    image={value.image} />
            );
        });
    };

    return (
        <div className={styles.root}>
            {getCard(props.listCar)}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        listCar: state.ReducerListCar.listCar,
        driver: state.ReducerListCar.driver,
    };
};

const SearchListConnect = connect(mapStateToProps, { getAllCar })(SearchList);

export default SearchListConnect;
