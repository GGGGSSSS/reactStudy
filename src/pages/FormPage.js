import { Form, Input, Icon, Button } from 'antd';
import React, { Component } from 'react';

class FormPage extends Component {
  submit = () => { console.log('submit') }
  render() {
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item name='username'>
            <Input placeholder='plz type ur name'></Input>
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='plz type ur password'></Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={this.submit}>提交</Button>
          </Form.Item>
        </Form>
      </div>);
  }
}

export default FormPage;