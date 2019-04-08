import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../fsm/actions';

class productDetail extends Component<any, any> {
  simpleAction = (event: React.MouseEvent) => {
    console.log(event);
    this.props.simpleAction();
    console.log(this.props);

  }

  render() {
    return <div>
      Product detail of {this.props.match.params.id}
      <button onClick={(e: React.MouseEvent) => this.simpleAction(e)}>Test</button>
      <pre>
        {
          JSON.stringify(this.props)
        }
      </pre>
    </div>;
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});
const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(productDetail);