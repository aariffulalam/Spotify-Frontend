import Navbar from './components/navbar/Navbar'
// import Nav from './components/navbar/Nav'

import TopSong from './components/songs/Header';
import DataState from './context/DataState'
function App() {
  return (
    <DataState>
      <Navbar />
      {/* <Nav /> */}
      <TopSong />
    </DataState>
  );
}

export default App;