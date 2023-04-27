// import logo from './logo.svg';
import './App.css';
import "./FComps/cardItem.css"
// import FCCardItems from './FComps/FCCardItems';
import CCMyShop from './CComps/CCMyShop';

  // let displayItemList=itemList.map(item=><)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <FCCardItems title={itemList.title} imgSrc={itemList.imgUrl} price={itemList.price} id={itemList.id}/> */}
       <CCMyShop/>
      </header>
    </div>
  );
}

export default App;
