import { useState, useEffect } from 'react'
import styled from "@emotion/styled";
import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
// IMPORT API file name ----> api.js
import { editUser, getUser } from '../service/api.js';

const Container = styled(FormGroup)`
    width: 45%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:20px
    }
`;
const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const EditUser = () => {

    // INPUT LIDHELO DATA STATE NO USE KARI ONE OBJECT THROW 

    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        //  console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        //  console.log(user);
    }

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }


    //BUTTON CLICK THAI ATLE DATA BADHI database MA JASE

    const editUserDetails = async () => {
        await editUser(user, id);
        navigate('/all');
    }

    return (
        <div>
            <Container>
                <Typography variant="h4">Edit User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={user.name} />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
                </FormControl>
                <FormControl>
                    <InputLabel >Email-Id</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
                </FormControl>
                <FormControl>
                    <InputLabel >Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button>
                </FormControl>
            </Container>
        </div>
    );
}

export default EditUser;