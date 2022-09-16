import React from "react";

//state 동적데이터를 와랄랄라

// function App() {
//   return <div>함수 컴포넌트</div>;
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: -1,
    };
  }
  up = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  down = () => {
    this.setState((state) => {
      return { count: state.count - 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>카운터 : {this.state.count}</h1>
        <button onClick={this.up}>+1</button>
        <span> </span>
        <button onClick={this.down}>-1</button>
      </div>
    );
  }
}

export default App;
