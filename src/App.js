import Navbar from './components/navbar/navbar'
import TopSong from './components/songs/topSongs';
import Test from './components/test/test'

import NoteState from './context/notes/NoteState'


function App() {
  return (
    <NoteState>
      <Test />
      <Navbar />
      <TopSong />
    </NoteState>
  );
}

export default App;