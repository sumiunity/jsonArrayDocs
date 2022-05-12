import React from 'react';

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleTable( props ){

  const data = getData( 'jsonArray/data.json' )

  var JsonArray = new jsonArray( data )
  JsonArray = JsonArray.astype({image: 'image', VALUE:'percentage'})


  return (
    <JsonArray.react.semanticUI.Table
      tableName = {'data'}
      sortable={true}
      lazyLoading = {true}
      lazyLoadingStart = {5}
      lazyLoadingStep = {5}
      />
  )

}
