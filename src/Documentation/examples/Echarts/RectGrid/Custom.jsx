import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


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

  var option = json_array.echartsOptions
  // option = option.scatter({
  //   colx: 'x',
  //   coly: 'y',
  //   // value: 'v',
  //   // label: true
  // })

  option = option.rectGrid({
      colx: 'x',
      coly: 'y',
      value: 'v',
      label: true
  })

  option = option.append_series(
      json_array.echartsSeries.circle({
          data: [2,2],
          radius: 150
      })
    )

  // option = option.rectGrid({
  //   colx: 'x',
  //   coly: 'y',
  //   // value: 'v',
  //   label: true
  // })
  //
  option.zoom({
    scroll: true,
    sliders : {
      xAxis: true,
      yAxis: true
    }
  })
  // // option['xAxis'][0]['show'] = false
  // // option['xAxis'][0]['min'] = function (value) { return value.min }
  // // option['xAxis'][0]['max'] = function (value) { return 6 }
  // // option['yAxis'][0]['min'] = function (value) { return  value.min - 1 }
  // // option['yAxis'][0]['max'] = function (value) { return 6 }
  // // option['xAxis']['max'] = 6
  // // option['yAxis']['min'] = -1
  // // option['yAxis']['max'] = 6
  //
  // option['dataZoom'] = [
  //       {
  //           type: 'slider',
  //           show: true,
  //           xAxisIndex: [0],
  //           startValue: -1,
  //           endValue: 6
  //       },
  //       {
  //           type: 'slider',
  //           show: true,
  //           yAxisIndex: [0],
  //           startValue: -1,
  //           endValue: 6
  //           // left: '93%',
  //           // start: 0,
  //           // end: 5
  //       },
  //       // {
  //       //     type: 'inside',
  //       //     xAxisIndex: [0],
  //       //     // start: 1,
  //       //     // end: 5
  //       // },
  //       // {
  //       //     type: 'inside',
  //       //     yAxisIndex: [0],
  //       //     // start: 1,
  //       //     // end: 5
  //       // }
  //   ]

  console.log( option )
  return(
    <div>
      this is still custom
      <json_array.react.echarts.Echarts
        key='zoomslider'
        option = {option}
        />
    </div>

    // echartsStyle={{height:'500px'}}

  )


}
