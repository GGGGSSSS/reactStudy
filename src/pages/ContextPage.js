import React, { Component } from 'react';
import { ThemeProvider } from '../ThemeContext';
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