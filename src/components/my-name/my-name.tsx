import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.css',
})
export class MyName {

  render() {
    return <div class="bg-blue padding">
      <div>Whatever name goes here...</div>
    </div>;
  }
}
