import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plasmic-host" element={<PlasmicCanvasHost />} />
    </Routes>
  </BrowserRouter>
);

