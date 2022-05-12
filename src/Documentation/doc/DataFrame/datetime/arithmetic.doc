import React from 'react';

import moment from 'moment'

import jsonArray from 'jsonArray'

export default function DevExample( props ){


  var data = []
  for( let i=0; i < 3; i++ ){
    data.push({id: i, date: moment().subtract({days:i})})
  }

  var json_array = new jsonArray(data)

  const df1 = json_array.dt.add('date', {days:1})
  const df2 = json_array.dt.sub('date', {days:1})

  return (
    <div>
      Original Data
      <json_array.react.semanticUI.Table
        tableName = {'Original'}
        />

      1 Day added to each date
      <df1.react.semanticUI.Table
        tableName = {'Original'}
        />

      1 Day subtracted from each date
      <df2.react.semanticUI.Table
        tableName = {'Original'}
        />

    </div>
  )

}
