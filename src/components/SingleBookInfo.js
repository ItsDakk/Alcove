import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Book = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#F0EBD8' : '#748CAB',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 export default function BookInfo() {

    const book = {
            'id': 1,
            'title': "Book1",
            'author': "James Gleick",
            'pages': 340,
            'summary': "A Book that is Book1",
            'subject': 'History',
            'img': "https://res.cloudinary.com/dr6guahhx/image/upload/v1654109908/cover_lroyk9.jpg",
            'createdOn': ''
        };

    return (
        <>
            <Grid container spacing={1} sx={{ m:1, p:2, border: '1px solid', borderRadius:1 }}>
          
          <Grid item xs={12} sm={12} md={12}>
            <Book sx={{ display:"flex", justifyContent:"center" }}>
              <Avatar alt={book.name} sx={{height:'30%', width:'30%'}} variant="rounded" src={book.img}/>
            </Book>
          </Grid>

        {/* Book Title Area */}{/* Book Title Area */}{/* Book Title Area */}
        <Grid item xs={12} sm={12} md={12}>
        <Book sx={{height:'100%', alignContent:"center"}}>
            <Typography variant="subtitle1"> 
                <strong>Book Title:</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.title}
            </Typography>
        </Book>
        </Grid>
        {/* Book Title Area */}{/* Book Title Area */}{/* Book Title Area */}
  
        {/* Book Summary Area */}{/* Book Summary Area */}{/* Book Summary Area */}
        <Grid item xs={12} sm={12} md={12}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"> 
                <strong>Summary</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.summary}
            </Typography>
        </Book>
        </Grid>
        {/* Book Summary Area */}{/* Book Summary Area */}{/* Book Summary Area */}
  
        {/* Book Subject Area */}{/* Book Subject Area */}{/* Book Subject Area */}
        <Grid item sm={3} xs={3} md={3}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"> 
                <strong>Subject</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.subject}
            </Typography>
        </Book>
        </Grid>
        {/* Book Subject Area */}{/* Book Subject Area */}{/* Book Subject Area */}
          
        {/* Book Pages Area */}{/* Book Pages Area */}{/* Book Pages Area */}
        <Grid item xs={3} sm={3} md={3}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"> 
                <strong>Pages</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.pages}
            </Typography>
        </Book>
        </Grid>
        {/* Book Pages Area */}{/* Book Pages Area */}{/* Book Pages Area */}
  
        {/* Book Author Area */}{/* Book Author Area */}{/* Book Author Area */}
        <Grid item xs={3} sm={3} md={3}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"> 
                <strong>Author</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.author}
            </Typography>
        </Book>
        </Grid>
        {/* Book Author Area */}{/* Book Author Area */}{/* Book Author Area */}

         {/* Book ID Area */}{/* Book ID Area */}{/* Book ID Area */}
         <Grid item xs={3} sm={3} md={3}>
        <Book sx={{height:'100%'}}>
            <Typography variant="subtitle1"> 
                <strong>Book ID</strong>
            </Typography>
            <Typography variant="body1"> 
                {book.id}
            </Typography>
        </Book>
        </Grid>
        {/* Book ID Area */}{/* Book ID Area */}{/* Book ID Area */}
  
    </Grid>

    </>
    );
 } 

 