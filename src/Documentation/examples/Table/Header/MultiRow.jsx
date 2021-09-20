import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleTable( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})

  console.log( data )
  const columnGroups = {
    id: 'id',
    category: ['CATEGORY1','CATEGORY2'],
    data: ['COUNT','VALUE', 'image']
  }

  return (
    <json_array.react.semanticUI.Table
      tableName = {'NoHeader'}
      columnGroups={columnGroups}
      sortable={true}
      />
  )

}
