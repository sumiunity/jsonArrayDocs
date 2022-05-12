import React from "react";

import jsonArray from "jsonArray";
import getData from 'Documentation/examples/getData'


export default function SimpleScatter( props ){

  const [selected, setSelected] = React.useState()

  const data = getData( 'jsonArray/data.json' )
  var json_array = new jsonArray( data )

  var option = json_array.echartsOptions
  option = option.scatter({
    colx:'id',
    coly:'COUNT'
  })

  return(
    <div>
      <json_array.react.echarts.Echarts
        key='selection'
        option = {option}
        onClick={(val) => setSelected(val.data)}
        />

      {(selected === undefined) ? null : <h2>Selected -- {selected.join(',')}</h2>}

  </div>
  )


}
