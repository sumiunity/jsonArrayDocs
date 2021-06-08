import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function DevelopmentExample( props ){

  const data = [
    {value: 1048, name: 'Bubba'},
    {value: 735, name: 'Churro'},
    {value: 580, name: 'Oates'},
    {value: 484, name: 'Pistachio'},
    {value: 300, name: 'Stu'}
  ]

  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.pie({
    value: 'value',
    label: 'name'
  })

  option.legend('left')

  return(
    <json_array.react.echarts.Echarts
      option ={option}
      />
  )


}
