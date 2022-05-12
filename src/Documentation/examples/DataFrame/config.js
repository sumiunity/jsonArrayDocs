
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

config = importConfig(config, 'BasicFunctions/config.json', true)
config = importConfig(config, 'datetime/config.json', false)
config = importConfig(config, 'toSeries/config.json', false)
config = importConfig(config, 'ValueCounts/config.json', false)
config = importConfig(config, 'Extract/config.json', false)
