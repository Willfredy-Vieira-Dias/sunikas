import * as React from 'react';
import "./dialog.css"
import PropTypes from 'prop-types';
import {Button} from '@mui/material';
import { styled } from '@mui/material';
import {Dialog} from '@mui/material';
import {DialogTitle} from '@mui/material';
import {DialogContent} from '@mui/material';
import {DialogActions} from '@mui/material';
import {IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import imagem1 from "../img/jordan-shoe.png"
import imagem2 from "../img/NikeAirJordan23.png"
import imagem3 from "../img/NikeAirJordan24.png"
import imagem4  from "../img/NikejustDoit.png"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
})); 

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth='lg'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h2 style={{color: '#212121', textAlign: 'center', fontSize: 25}}>Sunikas</h2>
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <section className='popuptenis'>
        <div className="banner">
            <div className="texto-banner">
                <h1>
                    Nike <br/> Air  <br/> <span>Jordan</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Fugiat, neque itaque? Id tempora earum doloremque.
                </p>
                <div className="preco">
                    <h3>63.800 Kz</h3>
                </div>
                <a href="#" className="botao-comprar">Comprar</a>
            </div>
            <div className="imagem-banner">
                <img className='img1' src={imagem1}/>
                <img src={imagem2}/>
                <img className='img2' src={imagem3}/>
                <img className='img3' src={imagem4}/>
            </div>
        </div>
    </section>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
