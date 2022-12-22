 

export default function FCSeriesIpn(props) {
    let txtName = null;
    let txtGenre = null;
    let txtSeason = null;
   const cngName = (e) => {
       txtName = e.target.value;
      };
     const cngGenre = (e) => {
       txtGenre = e.target.value;
    
      };
     const cngSeason = (e) => {
       txtSeason = e.target.value;
    
      };
    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        alignItems: "center",
      }}
    >
      

      <span>
        name: <input type="text" onChange={cngName} />
      </span>
      <span>
        genre: <input type="text" onChange={cngGenre} />
      </span>
      <span>
        season: <input type="text" onChange={cngSeason} />
      </span>
      <button
        style={{ marginTop: "10px", width: "50%" }}
        className="addSeriesBtn"
        onClick={()=> props.sendInpVal(txtName,txtGenre,txtSeason)}
      >
        Add Series
      </button>
    </div>
  );
}
