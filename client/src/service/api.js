import axios from 'axios';
//import { deleteUser } from '../../../server/controller/user_controller';

const URL = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error While Calling Add User API", error);
    }
}


export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/all`);
    } catch (error) {
        console.log("Error While Calling GetUsers API ", error);
    }

}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`);

    } catch (error) {
        console.log("Error While Calling GetUser API ", error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log("Error While Calling EditUser API", error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("While Calling deleteUser API", error);
    }
}