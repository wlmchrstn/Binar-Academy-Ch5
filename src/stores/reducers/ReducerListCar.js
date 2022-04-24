import { LIST_CAR, CAR, DRIVER } from '../actions/types';

const initialState = {
    listCar : [],
    car: {
        id: '',
        name: '',
        price: 0,
        image: '',
        category: '',
    },
    driver: 'Pilih Tipe Driver',
};

const ReducerListCar = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LIST_CAR:
            return {
                ...state,
                listCar: payload,
            }
        case CAR:
            return {
                ...state,
                car: payload,
            }
        case DRIVER:
            return {
                ...state,
                driver: payload,
            }
        default:
            return state;
    };
};

export default ReducerListCar;
