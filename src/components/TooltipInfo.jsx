import * as React from 'react';
import { Tooltip, Button } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const TooltipInfo = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };


  const info = `Splitter - .היחיד שניגש למקורות המידע, לוקח מידע מהמקורות מפצל אותם ליחידים ומעביר אותם לטיפול המערכת
                                Mergeduser - מאגד את כל האובייקטים מכל מקורות המידע של אדם אחד תחת אובייקט אחד`;

  return (
    <div>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip sx={{maxWidth: 400}}
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={info}
          placement='bottom-end'
        >
          <Button
            sx={{
              color: '#757575',
              position: 'relative',
              left: '5px',
              top: '-25px',
              padding: '4px',
            }}
            onClick={handleTooltipOpen}
          >
            <InfoOutlinedIcon />
          </Button>
        </Tooltip>
      </ClickAwayListener>
    </div>
  );
};

export default TooltipInfo;
