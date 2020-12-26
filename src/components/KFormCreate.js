import { Component } from "react";

export default function KFormCreate(Cmp) {
  return class extends Component {
    render() {
      return <div className='border'>
        <Cmp />
      </div>
    }
  }
}