import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'



export default function SimplePie( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )
  
  var col = 'CATEGORY1'
  var groups = json_array.groupby([col])

  var option = groups.echartsOptions
  option = option.radar({
    col:col,
    value:'count'
  })



  return(
    <json_array.react.echarts.Echarts
      option = {option}
      />
  )


}
