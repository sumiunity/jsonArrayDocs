
import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleLine( props ){

  const data = getData( 'jsonArray/yield_timeframe.json' )
  var json_array = new jsonArray( data )

  return(
    <json_array.react.echarts.Line
      colx='WP_LOTID'
      coly='AVG_YIELD'
      />
  )


}
