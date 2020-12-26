import React, { useState, useEffect } from 'react';
import { ThemeConsumer } from '../ThemeContext';

const ConsumerPage = (props) => {
  return (
    <div>
      <ThemeConsumer>
        {ctx => <div className={ctx.themeColor}>文本</div>}
      </ThemeConsumer>
    </div>
  );
}

export default ConsumerPage;