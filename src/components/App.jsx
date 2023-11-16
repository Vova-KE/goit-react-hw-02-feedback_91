import { Component } from 'react';
import Feedback from './Feedback';

class App extends Component {
  state = {
    good: 1,
    neutral: 30,
    bad: 20,
  };

  render() {
    return (
      <div>
        <Feedback state={this.state} />
      </div>
    );
  }
}

export default App;
