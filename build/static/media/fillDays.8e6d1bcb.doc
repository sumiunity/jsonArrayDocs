import React from 'react';


import jsonArray from 'jsonArray'

export default function DevExample( props ){


  var data = [
    {id: 1, date: '2021-10-01'},
    {id: 2, date: '2021-09-28'},
    {id: 3, date: '2021-10-03'},
  ]


  var json_array = new jsonArray(data)

  const df1 = json_array.dt.to_datetime('date', {inplace: true})
  console.log( df1.dtypes )
  const df2 = df1.sort_values('date', {inplace: true})
  console.log( df2.dtypes )

  json_array = json_array.dt.fill_days('date')

  return (
    <div>
      <json_array.react.semanticUI.Table
        tableName = {'Position 1'}
        />

    </div>
  )

}
