import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function StackedScatter( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  json_array = json_array.create_column('completed', r => 0.25)

  var option = json_array.echartsOptions
  option = option.waterfall({
    colx: 'id',
    coly:'COUNT',
    colz:'completed'
  })


  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
