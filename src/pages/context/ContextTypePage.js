import React, { Component } from 'react';
import { ThemeContext } from '../../ThemeContext';

class ContextTypePage extends Component {
  static contextType = ThemeContext
  render() {
    console.log(this)
    const { themeColor } = this.context
    return (
      <div>
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}

export default ContextTypePage;