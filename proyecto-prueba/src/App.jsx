  import './App.jsx'
  import Card from './components/card.jsx';
  import vehicles from './data/vehicles.js';
  import ShowHide from './components/ShowHide.jsx';

  function App() {  
    const vehiclesList = vehicles.map((v) => {
      return <Card title={v.name} description={v.description}/>;
    })
    return <div className="App">
      <h1>Medios de transporte</h1>
      <div className="Container">
        {vehiclesList}
      </div>
    </div>;

  }

  export default App