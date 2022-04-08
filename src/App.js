import './App.css';
import Banner from './components/banner/Banner';
import Productos from './components/lancamentos/Productos';
import Novos from './components/novos/novos';
import PopUp from './components/popup/dialog'

function App() {
  return (
    <>
      <Banner/>
      <Productos/>
      <Novos/>
      <PopUp/>
    </>
  );
}

export default App;
