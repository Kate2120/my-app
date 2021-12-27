import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Filter from './components/Menu/menu';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <Filter/>
      <Footer/>
    </div>
  );
}

export default App;
