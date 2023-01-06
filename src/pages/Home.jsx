import "../styles/pages/Home.scss";
import Header from "../components/Header";

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="imageDeco">
        
      </div>
      <div className="App-header">
        <p>La page Home de Kasa</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default Home;
