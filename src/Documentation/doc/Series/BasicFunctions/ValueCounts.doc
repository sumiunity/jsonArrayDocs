import React from 'react';

import Series from 'jsonArray/Series'
import getData from 'Documentation/examples/getData'

export default function Example( props ){


  const data = getData( 'jsonArray/data.json' )

  const index = data.map(r => r.id)
  const value = data.map(r => r.COUNT)
  
  var ser = new Series({index: index, value: value})

  console.log( 'pareto', ser.value_counts() )

  return( <div> see console... </div>)

}
