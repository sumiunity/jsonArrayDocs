import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function Example( props ){


  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id)
  const value = data.map(r => r.COUNT)

  var ser = new Series({index: index, value: value})

  console.log( 'values in ascending order', ser.sort_values(true) )
  console.log( 'values in descending order', ser.sort_values(false) )

  return( <div> <ser.react.semanticUI.Table /> </div>)

}
