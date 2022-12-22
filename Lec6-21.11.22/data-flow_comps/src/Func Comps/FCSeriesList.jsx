import FCSeries from "./FCSeries";

export default function FCSeriesList(props) {

 
  let series = props.seriesList.map((ser) => (
    <FCSeries
      id={ser.id}
      name={ser.name}
      genre={ser.genre}
      seasons={ser.seasons}
      key={ser.id}  
      id2DelFromFCS={(id2Del)=>(props.id2DelFromFCS_L(id2Del))}
    />
  ));

  return <div>{series}</div>;
}
