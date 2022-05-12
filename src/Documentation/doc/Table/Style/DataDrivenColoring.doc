import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function DataDrivenColoring( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})

  // compute the cell coloring outside of the table and pass it in as a param
  var cellBackgroundColor = []
  json_array.forEach(row => {
    if(row.COUNT < 4) cellBackgroundColor.push({COUNT: 'red'})
    if(row.COUNT > 4) cellBackgroundColor.push({COUNT: 'green'})
    if(row.COUNT === 4) cellBackgroundColor.push({COUNT: 'yellow'})
  })


  return (
    <json_array.react.semanticUI.Table
      tableName = {'SimpleTable'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      sortable={true}
      cellBackgroundColor={cellBackgroundColor}
      />
  )

}
