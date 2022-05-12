
export default function getConfig( docType ){

  switch(docType){
    case 'chart':
      return importConfig(config, 'Echarts/config.js', true)

    case 'table':
      return importConfig(config, 'Table/config.js', true)

    case 'dataframe':
      return importConfig(config, 'DataFrame/config.js', true)

    case 'series':
      return importConfig(config, 'Series/config.js', true)

    default:

      var config = []
      config = importConfig(config, 'Echarts/config.js', false)
      return config
  }

}

function importConfig( config, path, indev=false){

  var localConfig = require('./examples/' + path).config

  if( indev === false ){
    for( var i=0; i < localConfig.length; i++ ){
      localConfig[i]['indev'] = false
    }
  }

  return localConfig
}
