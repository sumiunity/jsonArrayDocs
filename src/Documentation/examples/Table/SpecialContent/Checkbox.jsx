import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function CheckboxTable( props ){

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  json_array = json_array.create_column( 'checkboxField', () => false )
  json_array = json_array.astype({checkboxField: 'checkbox', VALUE:'percentage'})


  return (
    <json_array.react.semanticUI.Table
      tableName = {'data'}
      columns={['checkboxField','COUNT','VALUE','id','CATEGORY1','CATEGORY2' ]}
      sortable={true}
      cellOnClick={{
        checkboxField: (val) => {
          alert('checkbox selected. see console for details')
          console.log( 'cell was selected', val)
      }}}
      />
  )

}
