import axios from 'axios';
import { LIST_CAR, CAR, DRIVER } from './types';

export const getAllCar = data => async (dispatch) => {
    try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/car`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        });

        const filteredResponse = response.filter((e) => {
            if (data === 'Pilih Tipe Driver' ) return e;
            if (data === 'Dengan Sopir') return e.status === true;
            return e.status === false;
        });

        dispatch({
            type: LIST_CAR,
            payload: filteredResponse,
        });
    }
    catch (error) {
        dispatch({
            payload: error.response
        });
    };
};

export const getCar = data => async (dispatch) => {
    try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_BASE_URL}/admin/car/${data}`, {
            headers: { "Access-Control-Allow-Origin": '*' }
        });

        dispatch({
            type: CAR,
            payload: response,
        });
    }
    catch (error) {
        dispatch({
            payload: error.response
        });
    };
};

export const setDriver = data => async (dispatch) => {
    try {
        dispatch({
            type: DRIVER,
            payload: data,
        })
    }
    catch (error) {
        dispatch({
            payload: error.response
        });
    };
};
