import './App.css';
import Row from './Row'
import requests from './requests';
import './Row.css';
import Banner from './Banner'
import Nav from './Nav'
import './Nav.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="TOP RATED"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="ACTION" fetchUrl={requests.fetchAction_Movies}/>
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
