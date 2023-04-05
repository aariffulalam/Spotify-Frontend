import Navbar from './components/NAVBAR'
import DataState from './context/DataState'
function App() {
  return (
    <DataState>
      <Navbar/>
    </DataState>
  );
}

export default App;