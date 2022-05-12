import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleScatter( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions.pareto({
    col: 'CATEGORY1',
    ratio: true,
  })

  console.log( json_array)
  console.log(json_array.sum('COUNT'))

  return(
    <json_array.react.echarts.Echarts
      key={`Pareto`}
      option = {option}
      />
  )


}
