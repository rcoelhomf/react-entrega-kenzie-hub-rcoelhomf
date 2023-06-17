import axios from 'axios';

// const token = localStorage.getItem('@KenzieHub:Token')

export const api = axios.create({
    baseURL: 'https://kenziehub.herokuapp.com',
    headers: {Authorization: `Bearer ${localStorage.getItem('@KenzieHub:Token')}`}
})