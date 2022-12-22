import { Component } from "react";
import CCars from "../CCars/CCars";
const InitCarsList = [];
export default class CCarsList extends Component {
  constructor(props) {
    super(props);
    this.txtModel = null;
    this.speed = null;
    this.state = {
      cars: InitCarsList,
      count: -1,
    };
  }
  clearInp = (e) => {
    if (this.speed !== null) e.target.value = "";
  };
  cngModel = (e) => {
    this.txtModel = e.target.value;
  };
  cngSpeed = (e) => {
    console.log(typeof e.target.value);
    this.speed = +e.target.value;
  };
  addCars = () => {
    if (this.txtModel !== null && this.speed !== null) {
      let newCount = this.state.count + 1;
      let newCars = [
        ...this.state.cars,
        { id: newCount, model: this.txtModel, speed: this.speed },
      ];
      console.log(newCars);
      this.setState({
        cars: newCars,
        count: newCount,
      });
    }
   
  };

  render() {
    let carsStr = this.state.cars.map((car) => (
      <CCars key={car.id} id={car.id} model={car.model} speed={car.speed} />
    ));
    return (
      <div className="Con">
        <h3>cars List</h3>
        <span>
          model:{" "}
          <input type="text" onChange={this.cngModel} onFocus={this.clearInp}/>
        </span>
        <span>
          speed:{" "}
          <input
            type="number"
            onChange={this.cngSpeed}
            onFocus={this.clearInp}
          />
        </span>
        <button
          style={{ marginBottom: "30px" }}
          className="btn"
          onClick={this.addCars}
        >
          Add Car
        </button>
        {carsStr}
      </div>
    );
  }
}
