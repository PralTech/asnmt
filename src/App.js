import './App.css';
import Header from './Components/Header/Header';
import Page from './Components/Page/Page';
import Footer from './Components/Footer/Footer'
import Bottom from './Components/Bottom/Bottom';

function App() {
  return (
    <div className='App'>
      {/* <div className="container"> */}
        <Header />
        <Page />
        <Bottom />
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
