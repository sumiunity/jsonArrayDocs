import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function CustomCellColoring( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})

  // compute the cell coloring outside of the table and pass it in as a param
  const cellBackgroundColor = [
    {COUNT: 'red'},
    {},
    {COUNT: 'green',VALUE: 'green',id: 'green'},
    {id: 'yellow'}
  ]
  
  return (
    <json_array.react.semanticUI.Table
      tableName = {'SimpleTable'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      sortable={true}
      cellBackgroundColor={cellBackgroundColor}
      />
  )

}
