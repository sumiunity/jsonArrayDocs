import React from 'react';

import { Button } from 'semantic-ui-react'

import jsonArray from 'jsonArray'
import getData from 'Documentation/examples/getData'

export default function AccordianTable( props ){


  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )

  json_array = json_array.astype({image: 'image', VALUE:'percentage'})
  var ser = json_array.toSeries('CATEGORY1')


  console.log( ser )
  // console.log( json_array.value_counts(['CATEGORY1', 'CATEGORY2'] ) )

  return(
    <div>
      <json_array.react.semanticUI.Table />
      <Button
        primary
        onClick={() => json_array.toCsv('extract.csv')}
        >
        Download to Csv
      </Button>

    </div>
  )
  // return (
  //   <groups.react.semanticUI.Table
  //     tableName = {'AccordianTable'}
  //     columns={['CATEGORY1', 'CATEGORY2', 'count']}
  //
  //     accordian={true}
  //     accordianColumns = {['id','VALUE', 'COUNT','image']}
  //     accordianHeader = {true}
  //     sortable={true}
  //     />
  // )

}
