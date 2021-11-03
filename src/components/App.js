import { HelmetProvider } from "react-helmet-async";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Routes from "./page/Routes";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <div className="page-container">
          <Routes />
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
