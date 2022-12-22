import React, { Component } from "react";
import FCSeriesList from "../Func Comps/FCSeriesList";
import FCSeriesIpn from "../Func Comps/FCSeriesIpn";

const InitialSeriesList = [
  
];

export default class CCSeriesListApp extends Component {
  constructor() {
    super();
    this.state = {
      series: InitialSeriesList,
      count: InitialSeriesList.length,
    };
  }
  addSeries = (txtName, txtGenre, txtSeason) => {
    let newCount = this.state.count + 1;
    let newSeriesList = [
        ...this.state.series,
        {
          id: newCount,
          name: txtName,
          genre: txtGenre,
          seasons: txtSeason,
        }
      ];
    this.setState({
      
      series: newSeriesList,
      count:newCount
    });
    console.log(this.state.series);
  };
  getId2DelFromFCS_L=(id2Del)=>{
    
   let newSeriesList= this.state.series.filter(ser=>(ser.id!==id2Del))

   this.setState({
    series:newSeriesList,
    
   })
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignItems: "center",
        }}
      >
        <FCSeriesIpn sendInpVal={this.addSeries} />
        <FCSeriesList seriesList={this.state.series} id2DelFromFCS_L={this.getId2DelFromFCS_L}/>
      </div>
    );
  }
}
