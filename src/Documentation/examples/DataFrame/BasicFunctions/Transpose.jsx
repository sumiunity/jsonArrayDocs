import React from 'react';

import jsonArray from 'jsonArray'

export default function DevExample( props ){


  const data = [{
    "row": "TOTAL",
    "2021-26": 0.4689655172413793,
    "2021-27": 0.576905311778291,
    "2021-28": 0.5764050162563864,
    "2021-29": 0.6131484794275492,
    "2021-30": 0.6065048098946404,
    "2021-31": 0.5656345399040559,
    "2021-32": 0.5592927986200948,
    "2021-33": 0.5551455514555146,
    "2021-34": 0.568241469816273,
    "2021-35": 0.5466835656949726,
    "2021-36": 0.5312372396896693,
    "2021-37": 0.508585445625511,
    "2021-38": 0.4974160206718346,
    "2021-39": 0.47007426823940585,
    "2021-40": 0.4702329594477998,
    "2021-41": 0.474321503131524,
    "2021-42": 0.4914735461303017,
    "2021-43": 0.5387374461979914
  }]


  var json_array = new jsonArray(data)
  json_array = json_array.set_index('row')

  var tposed = json_array.transpose()
  tposed = tposed.reset_index()
  console.log( json_array)
  console.log( tposed )
  // const data = getData( 'jsonArray/data.json' )
  //
  // var json_array = new jsonArray( data )
  //
  // json_array = json_array.slice(5,10)

  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return (
    <div>
      Original DataFrame with a single row and many columns
      <json_array.react.semanticUI.Table
        tableName = {'PreTranspose'}
        />

      <br/>
      Transposed DataFrame with many rows and a single column
      <tposed.react.semanticUI.Table
        tableName = {'PostTranspose'}
        />

    </div>
  )

}
