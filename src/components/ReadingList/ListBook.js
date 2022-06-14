import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/AppContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#F0EBD8' : '#748CAB',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function ListBook({book}) {
    const {list} = useContext(AppContext)

    useEffect(
        () => {
            setQty(list.filter((listBook) => listBook.id === book.id).length)
        },
        [list, book]
    )

    const [qty, setQty] = useState(list.filter((listBook) => listBook.id === book.id).length)
    return (
        <Grid container spacing={2} sx={{m:1, pr:2, borderRadius:1, alignItems:"stretch"}}>

        <Grid item md={4} sm={6} xs={12}>
          <Item sx={{ height:'100%' }}>
              <Avatar alt={book.title} variant="rounded" src={book.img} sx={{height:'100%', width: '100%'}}/>
          </Item>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Item sx={{ height:'100%' }}>
              <CartCard book={book}/>
          </Item>
        </Grid>

        <Grid item md={2} sm={6} xs={12}>
          <Item sx={ {height:'100%', alignContent: 'center' }}>
              <AddRemoveBooky book={book} setQty={setQty}/>
          </Item>
        </Grid>

      </Grid>
    )
};