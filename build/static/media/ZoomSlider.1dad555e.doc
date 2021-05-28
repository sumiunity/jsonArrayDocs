import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleScatter( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.scatter({
    colx:'id',
    coly:'COUNT'
  })

  option.zoom({sliders: {xAxis: true, yAxis: true}})

  return(
    <json_array.react.echarts.Echarts
      key='zoomslider'
      option = {option}
      />
  )


}
