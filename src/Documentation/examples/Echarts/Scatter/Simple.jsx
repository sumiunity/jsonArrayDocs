import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleScatter( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  return(
    <json_array.react.echarts.Scatter
      colx='COUNT'
      coly='id'
      />
  )


}
