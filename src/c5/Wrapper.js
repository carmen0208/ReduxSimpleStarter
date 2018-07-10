import React from 'react'
import createComponent from './logComponent'
import './Wrapper.css'

var Root = createComponent('Root')
var A = createComponent('A')
var B = createComponent('B')
var C = createComponent('C')
var D = createComponent('D')
// var E = createComponent('E')

class Wrapper extends React.Component {
  shape1 () {
    return (
      <Root>
        <A>
          <B />
          <C />
        </A>
        <D />
      </Root>
    )
  }

  shape2 () {
    return (
      <Root>
        <A>
          <B />
        </A>
        <D>
          <C />
        </D>
      </Root>
    )
  }

  shape3 () {
    return (
      <Root>
        <A>
          <B>
            <C />
          </B>
        </A>
        <D />
      </Root>
    )
  }

  shape4 () {
    return (
      <Root>
        <A>
          <B />
          <D>
            <C />
          </D>
        </A>
      </Root>
    )
  }

  shape5 () {
    return (
      <Root>
        <A>
          <B key='B' />
          <C key='C' />
        </A>
      </Root>
    )
  }

  shape6 () {
    return (
      <Root>
        <A>
          <C key='C' />
          <B key='B' />
        </A>
      </Root>
    )
  }

  render () {
    if (this[this.props.shape]) {
      return this[this.props.shape]()
    } else {
      return <Root />
    }
  }
}

export default Wrapper
