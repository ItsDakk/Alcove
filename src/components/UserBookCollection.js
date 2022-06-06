import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import FaceRetouchingNaturalSharpIcon from '@mui/icons-material/FaceRetouchingNaturalSharp';
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';

const actions = [
  { icon: <BookmarksSharpIcon />, name: 'Add/Edit' },
  { icon: <MenuBookSharpIcon />, name: 'View Books' },
  { icon: <FaceRetouchingNaturalSharpIcon />, name: 'Edit Profile' }
];

export default function AdminMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <>
        <Backdrop open={open} />
        <SpeedDial
          ariaLabel="Admin Menu"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
    </>
  );
}