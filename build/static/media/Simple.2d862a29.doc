import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleScatter( props ){

  const data = getData( 'jsonArray/data.json' )
  console.log( data )
  var json_array = new jsonArray( data )

  return(
    <json_array.react.echarts.Heatmap
      colx='__index__'
      coly='COUNT'
      value='id'
      />
  )


}
