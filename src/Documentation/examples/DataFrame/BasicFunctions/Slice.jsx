import React from 'react';

import jsonArray from 'jsonArray'
import getData from 'Documentation/examples/getData'

export default function DevExample( props ){


  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  json_array = json_array.slice(5,10)

  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return (
    <div>
      16 objects sliced down to 5
      <json_array.react.semanticUI.Table
        tableName = {'AccordianTable'}
        columns={['id', 'COUNT', 'CATEGORY2']}
        />

      <br/>


    </div>
  )

}
