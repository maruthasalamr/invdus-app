import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import AddContacts from '../Pages/AddContacts';
import EditContacts from '../Pages/EditContacts';
function navigation() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add-contacts' element={<AddContacts />} />
          <Route path='/edit-contacts/:id' element={<EditContacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default navigation