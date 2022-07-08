import { useState } from 'react'
import styled from "@emotion/styled";
import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
// IMPORT API file name ----> api.js
import { addUser } from '../service/api.js';

const Container = styled(FormGroup)`
    width: 45%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top:20px
    }
`;



const AllUser = () => {

    // INPUT LIDHELO DATA STATE NO USE KARI ONE OBJECT THROW 
    const defaultValue = {
        name: '',
        username: '',
        email: '',
        phone: ''
    }
    const [user, setUser] = useState(defaultValue);

    const onValueChange = (e) => {
        //console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
        //console.log(user);
    }

    const navgate = useNavigate();

    //BUTTON CLICK THAI ATLE DATA BADHI database MA JASE

    const addUserDetails = async () => {
        await addUser(user);
        navgate('/all');
    }

    return (
        <div>
            <Container>
                <Typography variant="h4">Add User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel >Email-Id</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel >Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" />
                </FormControl>
                <FormControl>
                    <Button variant="contained" onClick={() => addUserDetails()}>Submit</Button>
                </FormControl>
            </Container>
        </div>
    );
}

export default AllUser;