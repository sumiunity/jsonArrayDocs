import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function Example( props ){


  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id).slice(0,5)
  const value = data.map(r => r.COUNT).slice(0,5)

  var ser = new Series({index: index, value: value})

  var serAdd = ser.add(2)
  var serSub = ser.sub(2)
  var serMultiply = ser.multiply(2)
  var serDivide = ser.divide(2)

  return(
    <div>
    original series
    <ser.react.semanticUI.Table />

    added 2
    <serAdd.react.semanticUI.Table />

    subtract 2
    <serSub.react.semanticUI.Table />

    multiply 2
    <serMultiply.react.semanticUI.Table />


    Divide 2
    <serDivide.react.semanticUI.Table />

   </div>)

}
