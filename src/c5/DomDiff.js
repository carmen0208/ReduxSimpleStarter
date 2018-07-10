import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './Wrapper'
class RendorTree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {isToggleOn: true}
    // This binding is necessary to make `this` work in the callback
    // take this as a example, the probelm is not they will get handleClick,
    // It's the cann't get state
    //
    this.handleClick = this.handleClick.bind(this)
    // this.wraper = this.wraper.bind(this)
  }

  handleClick () {
    // DomDiff.js:17 Uncaught TypeError: Cannot read property 'state' of undefined
    // at handleClick (DomDiff.js:17)
    // All this would not works
    console.log(this.state)
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  wraper (event) {
    console.log(event.target.id)
    ReactDOM.render(<Wrapper shape={event.target.id} />,
      document.getElementById('diff-root'))
  }
  handleClick2 () {
    // undefined or RendorTree objects
    console.log('this is:', this)
  }
  render () {
    return (
      <div>
        <button id='shape1' onClick={(e) => this.wraper(e)}>Shape 1</button>
        <button id='shape2' onClick={this.wraper}>Shape 2</button>
        <button id='shape3' onClick={this.wraper}>Shape 3</button>
        <button id='shape4' onClick={this.wraper}>Shape 4</button>
        <button id='shape5' onClick={this.wraper}>Shape 5</button>
        <button id='shape6' onClick={this.wraper}>Shape 6</button>
        <button id='none' onClick={this.wraper}>Clear</button>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button onClick={this.handleClick2}>
          not Bind(undefined)
        </button>
        <button onClick={(e) => this.handleClick2(e)}>
          Bind
        </button>
        <div id='diff-root' />
      </div>
    )
  }
}

export default RendorTree
