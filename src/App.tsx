import './App.css';
import Header from './components/Header/header';
import Category from './components/Body/Category';
import Posts from './components/Body/Posts';
import Footer from './components/Footer/footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header/>
      <Category/>
      <Posts/>
      <Footer/>

    </div>
  );
}

export default App;
