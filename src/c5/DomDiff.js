import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper'
class RendorTree extends React.Component {
  constructor (props) {
    super(props)
    this.wraper = this.wraper.bind(this)
  }

  wraper (event) {
    console.log(event.target.id)
    ReactDOM.render(<Wrapper shape={event.target.id} />,
      document.getElementById('diff-root'),
      function () {
        console.log('=====================')
      })
  }

  render () {
    return (
      <div>
        <button id='shape1' onClick={this.wraper}>Shape 1</button>
        <button id='shape2' onClick={this.wraper}>Shape 2</button>
        <button id='shape3' onClick={this.wraper}>Shape 3</button>
        <button id='shape4' onClick={this.wraper}>Shape 4</button>
        <button id='shape5' onClick={this.wraper}>Shape 5</button>
        <button id='shape6' onClick={this.wraper}>Shape 6</button>
        <button id='none' onClick={this.wraper}>Clear</button>
        <div id='diff-root' />
      </div>
    )
  }
}

export default RendorTree
