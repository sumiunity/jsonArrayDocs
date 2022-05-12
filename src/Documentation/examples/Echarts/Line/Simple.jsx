
import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleLine( props ){

  const data = getData( 'jsonArray/errorbars.json' )
  var json_array = new jsonArray( data )

  return(
    <json_array.react.echarts.Line
      colx='INDEX'
      coly='AVG'
      />
  )


}
