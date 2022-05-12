import React from 'react';

import moment from 'moment'

import jsonArray from 'jsonArray'

export default function DevExample( props ){


  var data = []
  for( let i=0; i < 4; i++ ){
    data.push({id: i, date: moment().subtract({days:i})})
  }


  var json_array = new jsonArray(data)

  json_array = json_array.dt.week('date')

  return (
    <div>
      <json_array.react.semanticUI.Table
        tableName = {'Position 1'}
        />

    </div>
  )

}
