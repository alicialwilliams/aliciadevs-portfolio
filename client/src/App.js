import "./App.css";
import { Helmet } from "react-helmet";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>aliciaDevs</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Developer Porfolio" />
      </Helmet>
      <ToastContainer />
      <PortfolioContainer />
    </div>
  );
}

export default App;
