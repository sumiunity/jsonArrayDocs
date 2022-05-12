import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function ExampleComponent( props ){

  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id).slice(0,5)
  const value = data.map(r => r.COUNT).slice(0,5)

  var ser = new Series({index: index, value: value})

  ser.index = [0,1,2,3,4]
  ser.replace( ['a','b','c','d','e'])
  
  return( <div> <ser.react.semanticUI.Table /> </div>)

}
