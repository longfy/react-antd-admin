import React, { Component } from 'react'
import moduleCss from './layout.module.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className={moduleCss.layout}>
        layout
        <h1>hello</h1>
      </div>
    )
  }
}
