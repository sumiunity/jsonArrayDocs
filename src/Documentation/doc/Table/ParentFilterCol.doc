import React from 'react';


import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function ColumnFilters( props ){

  const [filters, setFilters] = React.useState([])


  const data = getData( 'jsonArray/data.json' )

  var json_array = new jsonArray( data )
  json_array = json_array.astype({image: 'image', VALUE:'percentage'})


  return (
    <json_array.react.semanticUI.Table
      tableName = {'ParentFilterCol'}
      columns={['COUNT','VALUE','id','CATEGORY1','CATEGORY2', 'image']}
      filters = {filters}
      columnFilterOnChange = { (content) => {
        var temp = filters
        // manage initial conditions
        if( temp === undefined ) temp = []

        temp = temp.filter(r => r.col_name !== content.col_name)

        // only push valid values (accounts for dropdown clearing)
        if( content.value !== '' ) temp.push( content )
        setFilters( temp )
      }}
      sortable={true}
      />
  )

}
