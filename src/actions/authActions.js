import api from '../components/utils/api';
import axiosWithCred from '../components/utils/axiosWithCred'
import axios from 'axios';
import toastr from 'toastr';
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE,
    GET_COACH_INFO
} from './types';

//Coach Registration endpoint
export const registerCoach = (coachData) => dispatch => {
    return axiosWithCred
        .post(
            `${process.env.REACT_APP_BACKEND}/auth/register?user_type=coach`,
            coachData
        )
        .then(res => {
            window.location = '/coach-login';
        })
        .catch(err => {
            toastr.error(err);
        });
};
//Coach login endpoint
export const loginCoach = (coachCreds) => dispatch => {
    return axiosWithCred
        .post(`${process.env.REACT_APP_BACKEND}/auth/login?user_type=coach`, coachCreds)
        .then(async res => {
            window.location = '/dashboard'          
        })
        .catch(err => {
            toastr.error(err)
        });
};
//Get Coach Clientlist
export const getClients = token => dispatch => {
    
    axiosWithCred
        .get(`${process.env.REACT_APP_BACKEND}/coach/me`)
        .then(res => {
            dispatch({ type: GET_COACH_INFO,
                payload: res.data });
            return res.data 
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};
