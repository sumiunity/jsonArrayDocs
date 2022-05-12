import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function StackedScatter( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.waterfall({
    colx: 'id',
    coly:'COUNT'
  })


  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
