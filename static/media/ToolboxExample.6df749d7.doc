import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function DevelopmentExample( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  // retrieve the echarts plot option calss
  var option = json_array.echarts.options

  // generate a scatter plot format
  option.scatter({
    colx:'COUNT',
    coly:'id',
    colorBy:'CATEGORY2'
  })

  option.toolbox()

  return(
    <json_array.react.echarts.Echarts
      option ={option}
      />
  )


}
