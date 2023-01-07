import './Main.css';

import React  from 'react';

import CardComponent from './CardComponent.jsx';
import TableComponent from './TableComponent.jsx';

const element = () => {


  return (
    <div class = "row0">
      <div class = "cardColumn">
        <CardComponent/>
      </div>
      <div class = "tableColumn">
        <TableComponent/>
      </div>
    </div>
  )
}

export default element

