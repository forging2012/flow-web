import React, { Component } from 'react'
import { node } from 'prop-types'

import AlertControl from '../components/AlertControl'
export default class CoreLayout extends Component {
  static propTypes = {
    children: node.isRequired,
  }

  render () {
    const { children } = this.props
    return <div style={{ height: '100%' }}>
      <AlertControl />
      {children}
    </div>
  }
}