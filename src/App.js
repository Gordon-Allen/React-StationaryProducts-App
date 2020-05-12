import React from 'react';
import Product from './Product';
import StationaryProducts from './StationaryProducts';

// function App() {
//   const sProdComponents = StationaryProducts.map((prod) => (
//     <Product key={prod.id} name={prod.name} price={prod.price} desc={prod.desc}/>
//   ));
//   return (
//     <div className="App">
//       <h1><em>G’sProduct List:</em> All soon to be in stock!</h1>
//         {sProdComponents}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const sProdComponents = StationaryProducts.map((prod) => (
      <Product key={prod.id} name={prod.name} price={prod.price} desc={prod.desc}/>
    ));
    return (
      <div className="App">
      <h1><em>G’sProduct List:</em> All soon to be in stock!</h1>
        {sProdComponents}
    </div>
    );
  }}


export default App;