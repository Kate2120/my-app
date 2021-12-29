import './App.css';
import Header from './components/Header/header';
import Posts from './components/Body/Posts';
import Footer from './components/Footer/footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>

      <Posts/>
      <Footer/>

    </div>
  );
}

export default App;
