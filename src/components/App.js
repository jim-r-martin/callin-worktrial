import Header from './page/Header';
import Footer from './page/Footer';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
