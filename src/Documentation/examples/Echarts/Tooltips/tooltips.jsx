import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'

import { Divider, Header } from 'semantic-ui-react'

export default function SimpleScatter( props ){

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )


  // retrieve the echarts plot option calss
  var option = json_array.echarts.options

  // generate a scatter plot format
  option.scatter({
    colx: 'COUNT',
    coly: 'id',
  })

  console.log( json_array )
  option.tooltip.from_DataFrame(
    data,
    ['COUNT', 'id', 'NUMBER','CATEGORY1', 'CATEGORY2']
  )



  return(
    <div>

      <Divider horizontal>Example 1</Divider>
      <Header as='h4'>Tooltips are provided as a parameter</Header>
      <json_array.react.echarts.Scatter
        colx='COUNT'
        coly='id'
        tooltip = {['COUNT', 'id', 'NUMBER','CATEGORY1', 'CATEGORY2']}
        />

      <Divider horizontal>Example 2</Divider>
      <Header as='h4'>Tooltips are added to the option. This enables more customization</Header>
      <json_array.react.echarts.Echarts
        option ={option}
        />

    </div>
  )


}
