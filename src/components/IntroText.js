import React, { Component } from 'react';

class IntroText extends Component {
  render() {
    return (
      <div className="flex-parent border-blue">
        <div className="flex-child border-green">
          <h4>Introduction</h4>
          <p>These borders are displaying how css flex works. The blue border is a flex-parent which contains two flex-children. 
            The parent sets direction (row) and alignment (space-between) for its children. The children sets its own content direction (column).

            To remove the borders, go to IntroText.js and remove border-blue, border-green and border-red.
          </p>
          <b>To get a sense of flex, try to duplicate the div with className="flex-child" inside of flex-parent </b>
        </div>
        <div className="flex-child border-red">
        <h4>Coffee</h4>
          <ul>
            <li>Espresso</li>
            <li>Macchiato</li>
            <li>Americano</li>
            <li>Café Latte</li>
            <li>Cappucino</li>
            <li>Mocha</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default IntroText;
