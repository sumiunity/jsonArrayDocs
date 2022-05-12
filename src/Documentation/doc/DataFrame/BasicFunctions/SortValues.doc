import React from 'react';

import jsonArray from 'jsonArray'

export default function DevExample( props ){

  var data = [
    {id: 0, WEEK: 30, YEAR: 2020},
    {id: 3, WEEK: 20, YEAR: 2021},
    {id: 3, WEEK: 10, YEAR: 2021},
    {id: 2, WEEK: 50, YEAR: 2020},
    {id: 1, WEEK: 40, YEAR: 2020},
  ]


  var json_array = new jsonArray(data)



  // const mapping = {UP16009: 'Value1', UP16012: 'Value2'}
  const df1 = json_array.sort_values('YEAR' )
  const df2 = json_array.sort_values(['WEEK','YEAR'] )
  // const df2 = json_array.replace('CATEGORY1', mapping, {newCol: 'CAT_NEW'} )

  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return (
    <div>
      Sorting by a single column
      <df1.react.semanticUI.Table
        tableName = {'Position 1'}
        />

      <br/>

      Sorting by multiple columns
      <df2.react.semanticUI.Table
        tableName = {'Position 2'}
        />
    </div>
  )

}
