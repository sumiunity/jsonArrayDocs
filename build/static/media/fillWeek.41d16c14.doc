import React from 'react';


import jsonArray from 'jsonArray'

export default function DevExample( props ){


  var data = [
    {id: 3, WEEK: 5, YEAR: 2021},
    {id: 4, WEEK: 2, YEAR: 2021},
    {id: 1, WEEK: 48, YEAR: 2020},
    {id: 2, WEEK: 50, YEAR: 2020},
  ]


  var json_array = new jsonArray(data)

  json_array = json_array.dt.fill_weeks()

  return (
    <div>
      <json_array.react.semanticUI.Table
        tableName = {'Position 1'}
        />

    </div>
  )

}
