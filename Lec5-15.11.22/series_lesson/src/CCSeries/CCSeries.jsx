import { Component } from "react";
import FCSeries from "../FCSeries/FCSeries";
const InitSeriesList = [];
export default class CCSeries extends Component {
  constructor() {
    super();
    this.txtName = null;
    this.txtGenre = null;
    this.txtSeason = null;
    this.state = {
      seriesList: InitSeriesList,
      count: InitSeriesList.length,
    };
  }
  cngName = (e) => {
    this.txtName = e.target.value;
    this.setState({ name: e.target.value });
  };
  cngGenre = (e) => {
    this.txtGenre = e.target.value;

    this.setState({ genre: e.target.value });
  };
  cngSeason = (e) => {
    this.txtSeason = e.target.value;

    this.setState({ season: e.target.value });
  };
  addSeries = () => {
    let newCount = this.state.count + 1;
    let newSeries = [
      ...this.state.seriesList,
      {
        id: newCount,
        name: this.txtName,
        genre: this.txtGenre,
        season: this.txtSeason,
      },
    ];
    this.setState({
      seriesList: newSeries,
      count: newCount,
      name: "",
      genre: "",
      season: "",
    });
  };
  render() {
    let newSeries = this.state.seriesList.map((ser, ind) => (
      <FCSeries
        name={ser.name}
        genre={ser.genre}
        season={ser.season}
        id={ser.id}
        key={ind}
      />
    ));

    console.log(newSeries);
    return (
      <div
      
      >
        <h4>Series List</h4>

        <span>
          name: <input type="text" onChange={this.cngName} />
        </span>
        <span>
          genre: <input type="text" onChange={this.cngGenre} />
        </span>
        <span>
          season: <input type="text" onChange={this.cngSeason} />
        </span>
        <button
          style={{ marginTop: "10px", width: "50%" }}
          className="addSeriesBtn"
          onClick={this.addSeries}
        >
          Add Car
        </button>
        <div>{newSeries}</div>
      </div>
    );
  }
}
