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
import "./Formulario.css"

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
        <section>
            <div class="bloco">
    <div class="titlo1">
      Formulário de Compras
    </div>
    <div class="formulario">
       <div class="entrada-dados">
          <label>Primeiro nome</label>
          <input type="text" class="input"/>
       </div>  
        <div class="entrada-dados">
          <label>Último Nome</label>
          <input type="text" class="input"/>
       </div>  
       <div class="entrada-dados">
          <label>Endereço</label>
          <input type="text" class="input"/>
       </div>  
      <div class="entrada-dados">
          <label>Codigo do cartão</label>
          <input type="text" class="input"/>
       </div> 
        <div class="entrada-dados">
          <label>Gênero</label>
          <div class="custom_select">
            <select>
              <option value="">Seleciona</option>
              <option value="male">Homem</option>
              <option value="female">Mulher</option>
            </select>
          </div>
       </div> 
        <div class="entrada-dados">
          <label>Endereço de Email</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados">
          <label>Número de telefone</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados">
          <label>Informações Adicionais</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div class="entrada-dados">
          <label>Codigo Postal</label>
          <input type="text" class="input"/>
       </div> 
      <div class="entrada-dados terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Concordar com os termos e condições</p>
       </div> 
      <div class="entrada-dados">
        <input type="submit" value="Register" class="btn"/>
      </div>
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
