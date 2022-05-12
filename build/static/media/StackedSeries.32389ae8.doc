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
  var pivot2 = json_array.pivot_table('CATEGORY1', stack_col, 'count')

  // retrieve the unique values for column you wish to stack
  const stacked_id = json_array.unique(stack_col)


  var option = pivot.echartsOptions.bar({
    colx: 'row',
    coly: stacked_id,
    stacked: 'series1'
  })

  option = option.append_series(
    pivot2.echartsSeries.bar({
      colx: 'row',
      coly: stacked_id,
      stacked: 'series2'
    })
  )

  return(
    <pivot.react.echarts.Echarts
      key={`Pareto`}
      option = {option}
      />
  )
  // return(
  //   <json_array.react.echarts.Echarts
  //     key={`Pareto`}
  //     option = {option}
  //     />
  // )



}
