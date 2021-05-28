import React from "react";

import jsonArray from "jsonArray";


export default function SimplePie( props ){

  const data = [
    {"START_TIME":"2021-02-24 04:32:01","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ69647.1N","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-13 19:15:32","HOLD_CODE":"WQ02","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ69644.1L","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-02-22 06:09:14","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70094.1A","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-06 17:28:18","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70500.1C","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-14 14:35:14","HOLD_CODE":"AW03","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70500.1C","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-11 01:13:39","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70486.1K","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-07 21:40:40","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70491.1X","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-10 07:42:45","HOLD_CODE":"WT04","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70097.1C","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-14 19:43:32","HOLD_CODE":"WQ01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ71008.1W","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-07 03:49:22","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70484.1A","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-02-22 13:21:03","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ69643.1W","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-02-26 14:05:36","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70096.1K","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-02-26 07:41:31","HOLD_CODE":"WQ02","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70099.1L","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-02-25 21:17:36","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70489.1L","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-11 04:18:51","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70106.1J","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-02-25 02:12:10","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70103.1H","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-11 03:55:42","HOLD_CODE":"WT04","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70489.1L","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-10 17:33:24","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70486.1K","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-11 16:07:48","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ71012.1N","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-15 03:36:58","HOLD_CODE":"WT01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ71011.1X","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-02-24 06:30:56","HOLD_CODE":"AT06","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ69639.1A","FAB":"CHDFAB","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-16 08:49:56","HOLD_CODE":"WT04","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70500.1C","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-10 10:03:11","HOLD_CODE":"WT01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70101.1X","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-09 21:34:30","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70483.1J","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-14 14:09:28","HOLD_CODE":"AW03","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ71008.1W","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-13 18:25:51","HOLD_CODE":"WT01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ71008.1W","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-13 01:25:29","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ71018.1T","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-02-24 18:41:14","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70103.1H","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-10 23:08:54","HOLD_CODE":"WT04","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70096.1K","FAB":"CHD","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"CHD"},
    {"START_TIME":"2021-03-10 13:48:53","HOLD_CODE":"WQ02","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70097.1C","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-13 11:29:21","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ70490.1F","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-02-23 20:52:06","HOLD_CODE":"","CLASSPROBE":true,"MASK":"N06G","LOT":"TZ69647.1N","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-14 12:30:11","HOLD_CODE":"WT04","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70500.1C","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-03-02 18:32:23","HOLD_CODE":"WQ02","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ69221.1R","FAB":"CHDFAB","QRB":true,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-15 03:36:57","HOLD_CODE":"WT01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ71011.1X","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":true,"FORCE_INK":true,"SITE":"ATTJ"},
    {"START_TIME":"2021-02-23 10:26:55","HOLD_CODE":"AT06","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ69253.1W","FAB":"CHDFAB","QRB":false,"DEV":false,"SBL":false,"FORCE_INK":false,"SITE":"ATTJ"},
    {"START_TIME":"2021-03-14 17:21:56","HOLD_CODE":"WQ01","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ70500.1C","FAB":"CHD","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":true,"SITE":"CHD"},
    {"START_TIME":"2021-02-28 04:32:00","HOLD_CODE":"WQ02","CLASSPROBE":false,"MASK":"N06G","LOT":"TZ69641.1K","FAB":"CHDFAB","QRB":false,"DEV":true,"SBL":false,"FORCE_INK":false,"SITE":"ATTJ"}]


  var json_array = new jsonArray( data )

  json_array = json_array.create_column('type', r => {
    if(r.QRB === true) return 'QRB'
    if(r.FORCE_INK === true) return 'FORCE_INK'
    if(r.DEV === true) return 'DEV'
    if(r.SBL === true) return 'SBL'
    return 'OTHER'
  })

  // const col = 'type'
  // const group = json_array.groupby([col])
  //
  // console.log( group )
  var option = json_array.echartsOptions
  option = option.pieFromSeries({
    col: 'type'
  })

  option.legend('left')

  return(
    <json_array.react.echarts.Echarts
      key='pieFromSeries'
      option = {option}
      />
  )


}
