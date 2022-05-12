import React, {useState} from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function ParentSortColumn( props ){

  const [sortBy, setSortBy] = useState(props.sortBy)
  const [sortAscending, setSortAscending] = useState(props.sortAscending)

  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})


  return (
    <json_array.react.semanticUI.Table
      tableName = {'data'}
      columnOnClick={(content) => {
        setSortBy( content.col_name );
        setSortAscending( !sortAscending );
      }}
      sortBy = {sortBy}
      sortAscending = {sortAscending}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      />
  )

}
