//import './App.css';
import { useCallback, useState } from 'react';
import Shodan from './components/Shodan';
import Form from './components/Form';

//const hosts = ["5.235.234.28", "5.235.234.29", "5.235.234.30", "46.21.94.158",
  //"46.21.94.156", "46.21.94.157", "91.98.10.179", "5.235.235.144"];
function App() {
  const [targets, setTargets] = useState(new Map());
  const updateTargets = useCallback((target) => setTargets(old => {
    const targetIp = Object.values(target)[0];
    return new Map(old.entries()).set(targetIp, targetIp);
  }), [])
  return (
    <div className="App">
      <Shodan targets={targets} />
      <Form updateTargets={ updateTargets } />
    </div>
  );
}
//385 page
export default App;
