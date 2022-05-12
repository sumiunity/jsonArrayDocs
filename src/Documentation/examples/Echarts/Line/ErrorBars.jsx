
import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleLine( props ){

  const data = getData( 'jsonArray/errorbars.json' )

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.line({
    colx:'INDEX',
    coly:'AVG'
  })

  option = option.append_series(
    json_array.echartsSeries.errorbars({
      colx:'__index__',
      avg:'AVG',
      min:'MIN',
      max:'MAX',
    })
  )

  console.log( json_array)

  option.xAxis[0].rotate()

  option.xtick_padding( 100 )

  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
