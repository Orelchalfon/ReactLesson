export default function FCSeries(props) {
  return (
    
      
      <div style={{paddingInline:"1rem",marginTop:"10px",fontSize: "1rem", gap: "5px", display: "flex" ,background:"lightblue",width:"9rem",height:"2rem",alignItems:"center",justifyContent:"space-between",borderRadius:"10px"}}>
        <span style={{ color: "lightcoral" }}>{props.name}</span>|
        <span style={{ color: "initial" }}>{props.genre}</span>| 
        <span style={{ color: "green" }}>{props.season}</span>
        <span className="delMark"></span>
      </div>
    
  );
}
