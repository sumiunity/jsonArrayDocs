import React from 'react';

import jsonArray from 'jsonArray'
import getData from 'Documentation/examples/getData'

export default function DevExample( props ){


  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data.slice(8,20) )


  const mapping = {UP16009: 'Value1', UP16012: 'Value2'}
  const df1 = json_array.replace('CATEGORY1', mapping )
  const df2 = json_array.replace('CATEGORY1', mapping, {newCol: 'CAT_NEW'} )

  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return (
    <div>
      replacing the values in the original column
      <df1.react.semanticUI.Table
        tableName = {'AccordianTable'}
        columns={['CATEGORY1', 'CATEGORY2']}
        />

      <br/>

      creating a new column with the mapped values
      <df2.react.semanticUI.Table
        tableName = {'AccordianTable'}
        columns={['CATEGORY1', 'CAT_NEW', 'CATEGORY2']}
        />
    </div>
  )

}
