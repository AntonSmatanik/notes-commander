import axios from 'axios';
import { useDispatch } from 'react-redux';

import config from '../config/index.json'
import { addMessage, addNotes, removeNotes, addNote } from '../store/actions';

const useRest = () => {
    const dispatch = useDispatch();

    let message = {
        timestamp: Date.now(),
    };

    const getAllNotes = async (endpoint) => {
        message = {
            ...message,
            endpoint,
            method: 'GET',
        };

        try {
            const response = await axios.get(`${config.baseUrl}/${endpoint}`);

            message = {
                ...message,
                type: 'success',
                status: response.status,
                body: response.statusText,
            };

            dispatch(addNotes(response.data));
        } catch (error) {
            message = {
                ...message,
                type: 'danger',
                status: error.status,
                body: error.message,
            };
        } finally {
            dispatch(addMessage(message));
        }
    };

    const getNote = async (endpoint) => {
        message = {
            ...message,
            endpoint,
            method: 'GET',
        };

        try {
            const response = await axios.get(`${config.baseUrl}/${endpoint}`);

            message = {
                ...message,
                type: 'success',
                status: response.status,
                body: response.statusText,
            };

            dispatch(addNote(response.data));
        } catch (error) {
            message = {
                ...message,
                type: 'danger',
                status: error.status,
                body: error.message,
            };
        } finally {
            dispatch(addMessage(message));
        }
    };

    const putNote = async (endpoint, body) => {
        message = {
            ...message,
            endpoint,
            method: 'PUT',
        };
        
        try {
            const response = await axios.put(`${config.baseUrl}/${endpoint}`, body);

            message = {
                ...message,
                type: 'success',
                status: response.status,
                body: response.statusText,
            };
        } catch (error) {
            message = {
                ...message,
                type: 'danger',
                status: error.status,
                body: error.message,
            };
        } finally {
            dispatch(addMessage(message));
            getAllNotes('notes');
        }
    };

    const postNote = async (endpoint, body) => {
        message = {
            ...message,
            endpoint,
            method: 'POST',
        };
        
        try {
            const response = await axios.post(`${config.baseUrl}/${endpoint}`, body);

            message = {
                ...message,
                type: 'success',
                status: response.status,
                body: response.statusText,
            };
        } catch (error) {
            message = {
                ...message,
                type: 'danger',
                status: error.status,
                body: error.message,
            };
        } finally {
            dispatch(addMessage(message));
            getAllNotes('notes');
        }
    };

    const deleteNote = async (endpoint) => {
        dispatch(removeNotes());

        message = {
            ...message,
            endpoint,
            method: 'DELETE',
        };

        try {
            const response = await axios.delete(`${config.baseUrl}/${endpoint}`);

            message = {
                ...message,
                type: 'success',
                status: response.status,
                body: response.statusText,
            };
        } catch (error) {
            message = {
                ...message,
                type: 'danger',
                status: error.status,
                body: error.message,
            };
        } finally {
            dispatch(addMessage(message));
            getAllNotes('notes');
        }
    };

    return {
        getAllNotes,
        getNote,
        putNote,
        deleteNote,
        postNote
    };
};

export default useRest;
