import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import RouteConfigExample from './routes';
import appModules from './modules';

for (const m of appModules) {
  m.routes;
}

class App extends Component<{ simpleAction: any }> {
  simpleAction = (event: React.MouseEvent) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <RouteConfigExample></RouteConfigExample>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //     <pre>
      //       {
      //         JSON.stringify(this.props)
      //       }
      //     </pre>
      //     <button onClick={(e: React.MouseEvent) => this.simpleAction(e)}>Test redux action</button>
      //   </header>
      // </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});
const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
