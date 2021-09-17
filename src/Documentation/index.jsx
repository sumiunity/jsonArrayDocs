/**
Example Components
==================

Renders all examples using a single component with
hotswapping. This consolidates all examples into a
single component and avoids multiple pages/routes

@author Nik Sumikawa
@date Nov 23, 2020
*/

import React, {useState} from 'react';

import {Grid, Segment, Menu, Button, Container} from 'semantic-ui-react'

import jsonArray from './components/jsonArray'
import Example from './components/Example'
import Sidebar from './components/Sidebar'
import getConfig from './config'

// wraps the fixed code documentation framework in the
// grid structure to provide one line per example
export default function Examples( props ){

  const [category, setCategory] = useState()
  const [subcategory, setSubCategory] = useState()
  const [docType, setDocType] = useState('table')

  var config = props.config
  if( config === undefined ){
    config = getConfig(docType)
  }


  config = new jsonArray(config)

  // set default based on indev flag
  const temp = config.filter(r => r.indev === true)

  if( temp.length > 0 ){
    // sort the configuration so the indev example is at the top
    config = config.fillna({indev: false})
    config = config.sort_values('indev', false)


    if( category === undefined) {
      setCategory( temp[0].category )
      setSubCategory( temp[0].subcategory )
    }
  }


  return (

    <Segment inverted style={{height: '100vh'}}>
      <Navbar callback={setDocType} docType={docType}/>

      <Segment style={{margin:'0 20px 0 20px'}}>

        <Grid columns={2}>
           <Grid.Column
             style={{maxWidth:'250px'}}>
            <Sidebar
              config={config}
              category={category}
              setCategory={setCategory}
              setSubCategory={setSubCategory}
              />
           </Grid.Column>

          <Grid.Column stretched style={{width:'calc(100% - 250px)'}}>
             <PageContent
               {...props}
               category={category}
               subcategory={subcategory}
               config={config}
               />
           </Grid.Column>
         </Grid>

       </Segment>
   </Segment>
  )
}




function PageContent( props ){

  // select all examples belonging to a single category
  var examples = props.config.filter(r => r.category === props.category )

  if( props.subcategory !== undefined ){
    examples = examples.filter(r => r.subcategory === props.subcategory )
  }



  // create an array of example components
  var exampleComponents = []
  for( var i=0; i < examples.length; i++ ){

    const title = examples[i].title

    exampleComponents.push(
      <Segment
        key={`Example-${title}`}
        vertical>
        <Example
          {...props}
          jsxDir='examples'
          docDir='doc'
          example={ examples[i]}
          />
      </Segment>
    )
  }


  return(
    <div>
      {exampleComponents}
    </div>
  )
}



/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
function Navbar(props){

  var callback = (value) => console.log( 'selected', value)
  if( props.callback !== undefined ) callback = (value) => props.callback(value)

  return (

      <Menu size='large' inverted>
        <Container>
          <Menu.Item as='a'
            active={props.docType==='chart'}
            onClick = {() => {
              callback('chart')
            }}>
            Charts
          </Menu.Item>
          <Menu.Item as='a'
            active={props.docType==='table'}
            onClick = {(value) => {
              callback('table')
            }}>
            Table
          </Menu.Item>
        </Container>
      </Menu>

  )
  // <Menu.Item position='right'>
  //   <Button as='a' inverted={!fixed}>
  //     Log in
  //   </Button>
  //   <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
  //     Sign Up
  //   </Button>
  // </Menu.Item>

}
