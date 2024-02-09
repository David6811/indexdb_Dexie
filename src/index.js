import Parse from 'parse'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './parseComponents/Root';
import Login from './parseComponents/Login';

Parse.initialize('xxxxxxxxxx', 'xxxxxxx');
Parse.serverURL = 'Your serverURL'
Parse.CoreManager.set('IS_NODE', false);

const root = createRoot(document.getElementById('root') ?? (() => {
  throw new Error('Root element with id "root" not found in the document.');
})());
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  </BrowserRouter>
);