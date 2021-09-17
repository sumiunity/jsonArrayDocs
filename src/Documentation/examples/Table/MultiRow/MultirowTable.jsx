import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleTable( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})


  return (
    <json_array.react.semanticUI.Table
      tableName = {'MultiRow'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2']}
      multirow={[['CATEGORY1', 'CATEGORY2'], ['CATEGORY1']]}
      sortable={true}
      rowOnClick = {(val) => alert(`row selected - ${val}`)}
      />
  )

}
