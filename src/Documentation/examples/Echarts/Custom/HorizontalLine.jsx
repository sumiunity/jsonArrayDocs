
import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleLine( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.scatter({
    colx:'id',
    coly:'COUNT'
  })

  option = option.axhline( 3.5 )

  
  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
