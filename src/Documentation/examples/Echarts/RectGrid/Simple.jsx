import React from "react";

import jsonArray from "jsonArray";


export default function SimpleScatter( props ){

  var json_array =[
    [0,0,5],[1,0,5],[2,0,5],[3,0,5],[4,0,5],
    [0,1,4],[1,1,2],[2,1,5],[3,1,5],[4,1,5],
    [0,2,3],[1,2,3],[2,2,5],[3,2,5],[4,2,3],
    [0,3,5],[1,3,5],[2,3,5],[3,3,1],[4,3,2],
    [0,4,5],[1,4,5],[2,4,5],[3,4,5],[4,4,0],
  ]


  json_array = new jsonArray( json_array )
  json_array = json_array.create_column('x', r=>r[0])
  json_array = json_array.create_column('y', r=>r[1])
  json_array = json_array.create_column('v', r=>r[2])

  return(
    <json_array.react.echarts.RectGrid
      colx = {'x'}
      coly = {'y'}
      value = {'v'}
      label = {true}
      />
    // echartsStyle={{height:'500px'}}

  )


}
