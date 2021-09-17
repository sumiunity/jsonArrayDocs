import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'

import echarts from 'echarts'

export default function SimpleScatter( props ){

  var data = [
    {"WEEK":1,"PRODUCT":"A", "VALUE":97.08416666666666},
    {"WEEK":2,"PRODUCT":"A", "VALUE":96.08416666666666},
    {"WEEK":3,"PRODUCT":"A", "VALUE":95.08416666666666},
    {"WEEK":4,"PRODUCT":"A", "VALUE":94.08416666666666},
    {"WEEK":5,"PRODUCT":"A", "VALUE":93.08416666666666},
    {"WEEK":6,"PRODUCT":"A", "VALUE":92.08416666666666},
    {"WEEK":1,"PRODUCT":"B", "VALUE":95.08416666666666},
    {"WEEK":2,"PRODUCT":"B", "VALUE":96.08416666666666},
    {"WEEK":3,"PRODUCT":"B", "VALUE":95.08416666666666},
    {"WEEK":4,"PRODUCT":"B", "VALUE":94.08416666666666},
    {"WEEK":5,"PRODUCT":"B", "VALUE":92.08416666666666},
    {"WEEK":6,"PRODUCT":"B", "VALUE":91.08416666666666},
    {"WEEK":1,"PRODUCT":"C", "VALUE":91.08416666666666},
    {"WEEK":2,"PRODUCT":"C", "VALUE":92.08416666666666},
    {"WEEK":3,"PRODUCT":"C", "VALUE":93.08416666666666},
    {"WEEK":4,"PRODUCT":"C", "VALUE":92.08416666666666},
    {"WEEK":5,"PRODUCT":"C", "VALUE":92.08416666666666},
    {"WEEK":6,"PRODUCT":"C", "VALUE":91.08416666666666},
    ]

  var json_array = new jsonArray( data )

  // pivot the table
  const pivot = json_array.pivot_table(
    'PRODUCT',
    'WEEK',
    'sum',
    'VALUE'
  )

  // extract a list of columns
  const columns = pivot.columns.filter(r => r !== 'row')

  var data = []

  // combine the data for each row including data for columns with missing data
  for( let i=0; i < pivot.length; i++ ){
    var row = []
    var id = pivot[i]['row']
    console.log( 'what is the id', id)
    for( let j=0; j < columns.length; j++ ){
      row.push(pivot[i][columns[j]])
    }
    data.push( series(id, row) )
  }


  console.log( data )
  console.log( options(data) )

  // var option = json_array.echartsOptions
  // option = option.scatter({
  //   colx:'WEEK',
  //   coly:'VALUE'
  // })
  //



  return(
    <json_array.react.echarts.Echarts
      key='zoom'
      option = {options(data)}
      />
  )


}


function series( id, data ){
  return {
      name: id,
      type: 'line',
      stack: 'stack',
      smooth: true,
      lineStyle: {
          width: 0
      },
      showSymbol: false,
      areaStyle: {
          opacity: 0.8,
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         color: 'rgba(128, 255, 165)'
      //     }, {
      //         offset: 1,
      //         color: 'rgba(1, 191, 236)'
      //     }])
      },
      emphasis: {
          focus: 'series'
      },
      data: data
  }

}

function options( series ){

  return {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    // title: {
    //     text: '渐变堆叠面积图'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5', 'Line 6']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: series
};

}


const testoption = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
        text: '渐变堆叠面积图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //     offset: 0,
                //     // color: 'rgba(128, 255, 165)'
                // }, {
                //     offset: 1,
                //     // color: 'rgba(1, 191, 236)'
                // }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
            name: 'Line 2',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
            name: 'Line 3',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(55, 162, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(116, 21, 219)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
            name: 'Line 4',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 0, 135)'
                }, {
                    offset: 1,
                    color: 'rgba(135, 0, 157)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
            name: 'Line 5',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 191, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(224, 62, 76)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
        }
    ]
};
