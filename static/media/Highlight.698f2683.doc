
import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'

export default function SimpleLine( props ){

  const data = getData( 'jsonArray/yield_timeframe.json' )

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.line({
    colx:'WP_LOTID',
    coly:'AVG_YIELD'
  })

  option = option.append_series(
    json_array.echartsSeries.errorbars({
      colx:'__index__',
      avg:'AVG_YIELD',
      min:'MIN_YIELD',
      max:'MAX_YIELD',
    })
  )

  option.xAxis[0].rotate()
  option.xAxis[0].max = json_array.length
  option.xAxis[0].min = -1


  option.xtick_padding( 100 )

  option = option.highlight({
    colx:'WP_LOTID',
    coly:'AVG_YIELD',
    value: 'TZ62817.1C',

  })

  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
