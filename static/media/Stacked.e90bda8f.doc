import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function StackedScatter( props ){

  const data = getData( 'jsonArray/data.json' )

  var stack_col = 'CATEGORY2'

  var json_array = new jsonArray( data )
  // create a pivot table so there is a unique column for each
  // category you wish to stack (CATEGORY2 in this case)
  var pivot = json_array.pivot_table('CATEGORY1', stack_col, 'count')

  // retrieve the unique values for column you wish to stack
  const stacked_id = json_array.unique(stack_col)

  console.log( stacked_id)
  return(
    <pivot.react.echarts.Bar
      colx = 'row'
      coly = {stacked_id}
      stacked = {true}
      />
  )


}
