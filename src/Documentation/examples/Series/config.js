
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

config = importConfig(config, 'BasicFunctions/config.json', false)
config = importConfig(config, 'Pareto/config.json', false)
config = importConfig(config, 'Table/config.json', false)
config = importConfig(config, 'Echarts/config.json', false)
config = importConfig(config, 'toDataFrame/config.json', true)
