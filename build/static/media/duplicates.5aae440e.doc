import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function Example( props ){


  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id)
  const value = data.map(r => r.COUNT)

  var ser = new Series({index: value, value: index})

  console.log( ser.duplicate('drop') )
  console.log( ser.duplicate('sum') )

  return( <div> see console... </div>)

}
