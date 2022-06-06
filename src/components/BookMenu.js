import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

export default function TitlebarBelowMasonryImageList() {
  return (
    <Box sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {bookData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
                <BookmarkAddSharpIcon/>
              </IconButton>
            }
          />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const bookData = [
  {
    id: 1,
    title: "Book1",
    author: "James Gleick",
    pages: 340,
    summary: "A Book that is Book1",
    subject: "History",
    img: "https://res.cloudinary.com/dr6guahhx/image/upload/v1654109908/cover_lroyk9.jpg",
    createdOn: ''
  },

  {
      id: 2,
      title: 'Book2',
      author: 'Mike Brown',
      pages: 299,
      summary: "A Book that is Book2",
      subject: "Space",
      img: 'https://res.cloudinary.com/dr6guahhx/image/upload/v1654109973/how_i_killed_pluto_and_why_it_had_it_coming.large__lsdbzm.jpg',
      createdOn: ''
  },

  {
      id: 3,
      title: 'Book3',
      author: 'Sarah Bakewell',
      pages: 444,
      summary: "A Book that is Book3",
      subject: "Life",
      img: 'https://res.cloudinary.com/dr6guahhx/image/upload/v1654110054/how_to_live_or_a_life_of_montaigne_in_one_question_and_twenty_attempts_at_an_answer_i4lwwj.jpg',
      createdOn: ''
   },
];


