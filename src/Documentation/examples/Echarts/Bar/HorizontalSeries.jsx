import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function StackedScatter( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions.bar({
    colx: '__index__',
    coly: ['COUNT', '__index__'],
    horizontal: true,
  })

  return(
    <json_array.react.echarts.Echarts
      key={`Pareto`}
      option = {option}
      />
  )


}
