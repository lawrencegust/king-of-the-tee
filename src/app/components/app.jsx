import React, {Component} from 'react';
import {connect} from 'react-redux';
//components
// import Footer from 'components/common/footer';
export class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(
  state => ({
    routing: state.routing.locationBeforeTransitions
  })
)(App);
