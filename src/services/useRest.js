import axios from 'axios';
import { useDispatch } from 'react-redux';

import config from '../config/index.json'
import { addMessage, addNotes, removeNotes } from '../store/actions';

const useRest = () => {
    const dispatch = useDispatch();

    const errorMessage = (message, error) => ({
        ...message,
        type: 'danger',
        status: error.status,
        body: error.message,
        timestamp: Date.now(),
    });

    const successMessage = (message, response) => ({
        ...message,
        type: 'success',
        status: response.status,
        body: response.statusText,
        timestamp: Date.now(),
    });

    const getAllNotes = async (endpoint) => {
        let message = {
            endpoint,
            method: 'GET',
        };

        try {
            const response = await axios.get(`${config.baseUrl}/${endpoint}`);
            message = successMessage(message, response);
            dispatch(addNotes(response.data));
        } catch (error) {
            message = errorMessage(message, error);
        } finally {
            dispatch(addMessage(message));
        }
    };

    const getNote = async (endpoint) => {
        let message = {
            endpoint,
            method: 'GET',
        };

        try {
            const response = await axios.get(`${config.baseUrl}/${endpoint}`);
            message = successMessage(message, response);
            return response;
        } catch (error) {
            message = errorMessage(message, error);
            return error;
        } finally {
            dispatch(addMessage(message));
        }
    };

    const putNote = async (endpoint, body) => {
        let message = {
            endpoint,
            method: 'PUT',
        };

        try {
            const response = await axios.put(`${config.baseUrl}/${endpoint}`, body);
            message = successMessage(message, response);
            dispatch(removeNotes());
            getAllNotes('notes');
        } catch (error) {
            message = errorMessage(message, error);
        } finally {
            dispatch(addMessage(message));
        }
    };

    const postNote = async (endpoint, body) => {
        let message = {
            endpoint,
            method: 'POST',
        };

        try {
            const response = await axios.post(`${config.baseUrl}/${endpoint}`, body);
            message = successMessage(message, response);
            dispatch(removeNotes());
            getAllNotes('notes');
        } catch (error) {
            message = errorMessage(message, error);
        } finally {
            dispatch(addMessage(message));
        }
    };

    const deleteNote = async (endpoint) => {
        

        let message = {
            endpoint,
            method: 'DELETE',
        };

        try {
            const response = await axios.delete(`${config.baseUrl}/${endpoint}`);
            message = successMessage(message, response);
            dispatch(removeNotes());
            getAllNotes('notes');
        } catch (error) {
            message = errorMessage(message, error);
        } finally {
            dispatch(addMessage(message));
        }
    };

    return {
        getAllNotes,
        getNote,
        putNote,
        postNote,
        deleteNote,        
    };
};

export default useRest;
