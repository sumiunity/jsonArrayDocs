import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function Hyperlink( props ){

  var data = getData( 'jsonArray/data.json' )

  data[0]['CATEGORY1'] = 'www.google.com'

  // var mapping = {value: `thisurl`}

  var json_array = new jsonArray( data )
  json_array = json_array.astype({
    image: 'image',
    VALUE:'percentage',
    CATEGORY1: 'hyperlink'
  })



  return (
    <json_array.react.semanticUI.Table
      tableName = {'SimpleTable'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      columnNames={{COUNT: 'NewTitle'}}
      sortable={true}
      />
  )

}
