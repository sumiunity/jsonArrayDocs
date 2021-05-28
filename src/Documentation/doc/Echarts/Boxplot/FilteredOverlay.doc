import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function AllSamples( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  return(
    <json_array.react.echarts.Boxplot
      colx='CATEGORY1'
      coly='id'
      overlayFilter = {r => r.CATEGORY2 === '71F00295B-05'}
      colorBy='CATEGORY2'

      />
  )


}
