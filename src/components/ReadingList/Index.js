import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import ListBook from './ListBook';
import Box from '@mui/material/box';

export default function Index() {
    const { cart } = useContext(AppContext)

    return (
        <>
            <Box sx={{ mb:15 }}>
                {
                    [...new Set(list?.map(JSON.stringify))].map(JSON.parse)?.map(
                        (item) =><ListBook key={book.id} book={book}/>
                    )
                }
            </Box>
        </>
    )
};
