import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'



export default function SimplePie( props ){


  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )
  //
  var col = 'CATEGORY1'
  var groups = json_array.groupby([col])

  //
  // generate the radar plot grid
  var indicator = []
  groups.forEach( row => {
    var maxValue = groups.max('count')
    if( props.maxValue !== undefined ) maxValue = props.maxValue[col]

    indicator.push({name: row[col], max: maxValue})
  })



  var option = {
    radar: {
      // shape: 'circle',
      indicator: indicator
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: groups.map(r => r.count),
            name: col
          }
        ]
      }
    ]
  }

  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
