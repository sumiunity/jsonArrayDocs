import React from 'react';

import jsonArray from 'jsonArray'

export default function DevExample( props ){

  var data = []
  for( let i=0; i < 4; i++ ){
    data.push({id: i, value: i})
  }


  var json_array = new jsonArray(data)



  // const mapping = {UP16009: 'Value1', UP16012: 'Value2'}
  const df2 = json_array.sort_index([2,0,1,3] )
  // const df2 = json_array.replace('CATEGORY1', mapping, {newCol: 'CAT_NEW'} )

  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return (
    <div>
      unsorted DataFrame
      <json_array.react.semanticUI.Table
        tableName = {'Position 1'}
        />

      <br/>

      DataFrame sorted by index [2,0,1,3]
      <df2.react.semanticUI.Table
        tableName = {'Position 2'}
        />
    </div>
  )

}
