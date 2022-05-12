import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function ExampleComponent( props ){

  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id)
  const value1 = data.map(r => r.COUNT)
  const value2 = data.map(r => r.CATEGORY1)

  var ser1 = new Series({index: index, value: value1, name:'ser1'})
  var ser2 = new Series({index: index, value: value2, name:'ser2'})

  // change the index to ensure missing indices are handled properly
  ser2[0].__index__ = 4
  ser2[5].__index__ = 22

  const df = ser1.merge(ser2)

  return( <div> <df.react.semanticUI.Table /> </div>)

}
// <ser.react.semanticUI.Table />
