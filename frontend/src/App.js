import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Header1 from './components/Header1';
import Relation from './components/Relation';
import HeaderStudy from './components/HeaderStudy';
import Table from './components/Table';
import Tablebar from './components/Tablebar';
import PlusComp from './components/PlusComp';
function App() {
  return (
    <div className="App">
      <Header/>
      <Header1/>
      <div className="mt-60  flex">
          <Relation/>
        </div>
        <HeaderStudy/>
        <Table/>
        <Tablebar/>
        <PlusComp/>
    </div>
  );
}

export default App;
