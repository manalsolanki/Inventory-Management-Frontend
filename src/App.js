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
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/allpurchase' element={<ListPurchases />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
