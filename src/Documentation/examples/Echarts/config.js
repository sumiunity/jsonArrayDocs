
function importConfig( config, path, indev=false){

  var localConfig = require('./' + path)

  if( indev === false ){
    for( var i=0; i < localConfig.length; i++ ){
      localConfig[i]['indev'] = false
    }
  }

  return config.concat(localConfig)
}


export var config = []

config = importConfig(config, 'Area/config.json', false)
config = importConfig(config, 'Bar/config.json', false)
config = importConfig(config, 'Boxplot/config.json', false)
config = importConfig(config, 'Custom/config.json', false)
config = importConfig(config, 'Format/config.json', false)
config = importConfig(config, 'Heatmap/config.json', false)
config = importConfig(config, 'Line/config.json', false)
config = importConfig(config, 'Radar/config.json', false)
config = importConfig(config, 'RectGrid/config.json', false)
config = importConfig(config, 'Scatter/config.json', false)
config = importConfig(config, 'Selection/config.json', false)
config = importConfig(config, 'Tooltips/config.json', false)
config = importConfig(config, 'Waterfall/config.json', true)
