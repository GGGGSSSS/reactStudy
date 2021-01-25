import React, { Component } from 'react';
import { ThemeProvider } from '../../ThemeContext';
import ConsumerPage from './ConsumerPage';
import ContextTypePage from './ContextTypePage';

class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      }
    }
  }
  render() {
    const { theme } = this.state
    return (
      //下面通过CTP CP两个组件体现两种不同的consumer组件使用方式
      <div>
        {/* <ThemeProvider value={theme}> */}
        <ContextTypePage />
        <ConsumerPage />
        {/* </ThemeProvider> */}
      </div>
    );
  }
}

export default ContextPage;