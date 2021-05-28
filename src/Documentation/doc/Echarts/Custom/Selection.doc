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

  option.selection()

  return(
    <json_array.react.echarts.Echarts
      key='selection'
      option = {option}
      onSelect={(val) => console.log('sss', val.data)}
      />
  )


}
