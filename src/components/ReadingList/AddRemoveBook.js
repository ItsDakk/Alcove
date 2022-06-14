import { useContext } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import BookmarkRemoveSharpIcon from '@mui/icons-material/BookmarkRemoveSharp';
import { AppContext } from '../../Context/AppContext';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

export default function AddRemoveBook({book}) {
    const { addToList, removeFromList, removeAllFromList } = useContext(AppContext)

    return (
        <ButtonGroup sx={{margin:"auto"}}>

            <IconButton key="Add" onClick={()=>{addToList(book)}}>
                <BookmarkAddSharpIcon fontSize="small"/>
            </IconButton>

            <IconButton key="RemoveOne" onClick={()=>{removeFromList(book)}}>
                <BookmarkRemoveSharpIcon fontSize="small"/>
            </IconButton>

            <IconButton key="RemoveAll" onClick={()=>{removeAllFromList(book)}}>
                <DeleteOutlineSharpIcon fontSize="small"/>
            </IconButton>

        </ButtonGroup>
      )
};

