import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import Form from '../../pages/form';

const index = () => {
  return (
    <div>
        <Route path="/form" element={<Form />} />
    </div>
  );
};

export default index;