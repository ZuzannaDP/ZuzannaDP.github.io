import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home/Home';
import { Container } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <Home />
    </Container>
  </React.StrictMode>
);

