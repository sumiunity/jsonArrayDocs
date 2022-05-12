import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleTable( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})


  return (
    <json_array.react.semanticUI.Table
      tableName = {'SimpleTable'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      columnNames={{COUNT: 'NewTitle'}}
      sortable={true}
      />
  )

}
