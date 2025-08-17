import {useState} from "react"

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MaterialUi(){



    return (
        <>
        <Button variant="contained" color="error" size="medium" startIcon={<DeleteIcon/>}>Click Me</Button>
        </>
    )
}