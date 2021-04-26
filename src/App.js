import { Component } from 'react';
import Container from './components/Container';
import Feedback from './components/FeedBack';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Feedback />
        </Container>
      </div>
    );
  }
}

export default App;
