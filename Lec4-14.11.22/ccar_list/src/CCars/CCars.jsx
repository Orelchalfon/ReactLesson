import { Component } from "react";
export default class CCars extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      id: this.props.id,
      model: this.props.model,
      speed: this.props.speed,
    };
  }
  btnAddToSpeed = () => {
      this.setState({
        speed: this.state.speed + 5,
      });
  };
  render() {
    return (
      <div className="container">
        <h3>cars</h3>
        <span> id={this.state.id}</span>
        <span>model={this.state.model} </span>
        <span> speed={this.state.speed}</span>
        <button className="btn" onClick={this.btnAddToSpeed}>
          Give Me More speed!!
        </button>
      </div>
    );
  }
}
