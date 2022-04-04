import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AddItem from './components/AddItem';
import ListPurchases from './components/ListPurchases';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/allpurchase' element={<ListPurchases />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
