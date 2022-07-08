
//import { request, response } from "express";
import User from "../schema/user_schema.js";

export const addUser = async (request, response) => {
    const user = request.body;
    // console.log(body);
    const newUser = new User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });

    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

//EDIT KARIYE ATLE PURTICULER ONE USER SELECT THAI

export const getUser = async (request, response) => {
    //   console.log(request.params.id);
    try {
        // const user = await User.find({_id:request.params.id});
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}


export const editUser = async (request, response) => {

    let user = request.body;
    const editUser = new User(user);

    try {
        const user = await User.updateOne({ _id: request.params.id }, editUser);
        // await User.updateOne({ _id: request.params.id });
        response.status(200).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const deleteUser = async (request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'User Delete Sucessfully' })
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}