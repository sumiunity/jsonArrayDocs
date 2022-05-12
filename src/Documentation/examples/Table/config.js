
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

config = importConfig(config, 'Accordian/config.json', false)
config = importConfig(config, 'Header/config.json', true)
config = importConfig(config, 'LazyLoading/config.json', false)
config = importConfig(config, 'MultiRow/config.json', false)
config = importConfig(config, 'Style/config.json', false)
config = importConfig(config, 'Filtering/config.json', false)
config = importConfig(config, 'SpecialContent/config.json', false)
