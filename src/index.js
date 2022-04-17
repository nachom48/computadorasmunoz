import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const theme = createTheme({
  palette:{
    primary:{
      main:'#464646'
    }

    
  }
})
ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

