
import { useEffect, useState } from "react";
import { TableBody, TableHead, TableRow, Table, TableCell, styled, Button } from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
width:90%;
margin: 50px auto 0 auto;
`;

// header =  ma TableCell = th
const THead = styled(TableRow)`
    background-color: #000000;
    & > th{ 
        color: #36cec3;
        font-size: 18px;
    }
    
`;
//Body = ma TableCell = td
const TBody = styled(TableRow)`
& > td{
   font-size:18px
}

`;

const AddUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();

    }, []);

    const getAllUsers = async () => {
        let responce = await getUsers();
        setUsers(responce.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return (
        <div>
            <StyledTable>
                <TableHead>
                    <THead key={users._id}>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email-Id</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TBody key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                                </TableCell>
                            </TBody>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </div>
    );
}

export default AddUser;