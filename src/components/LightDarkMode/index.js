// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode', head: 'heading', dark: 'back'}

  onChangeMode = () => {
    this.setState(preval => {
      if (preval.mode === 'Light Mode') {
        return {mode: 'Dark Mode', head: '', dark: ''}
      }
      return {mode: 'Light Mode', head: 'heading', dark: 'back'}
    })
  }

  render() {
    const {mode, head, dark} = this.state
    return (
      <div className="container">
        <div className={dark}>
          <h1 className={head}>Click To Change MOde</h1>
          <button onClick={this.onChangeMode}>{mode}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
