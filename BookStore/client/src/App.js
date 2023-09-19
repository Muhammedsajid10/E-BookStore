import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from './AdminLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './SidebarNav';
import BookHomePage from './HomePageAndContent/BookHomePage';
import AddBookHome from './HomePageAndContent/AddBookHome';
import GetIdBook from './GetIdBook';
import ViewBookHome from './HomePageAndContent/ViewBookHome';
import UpdateBook from './Forms/UpdateBook';
import UpdateBookHome from './HomePageAndContent/UpdateBookHome';
import TeamMem from './Tables/TeamMem';
import AddTeamMem from './Forms/AddTeamMem';
import TeamMemHome from './HomePageAndContent/TeamMemHome';
import AddTeamMemHome from './HomePageAndContent/AddTeamMemHome';
import UpdateTeamHome from './HomePageAndContent/UpdateTeamHome';
import ViewTeamMem from './HomePageAndContent/ViewTeamMem';
import Orders from './Tables/Orders';
import OrdersHome from './HomePageAndContent/OrdersHome';
import AddOrders from './Forms/AddOrders';
import AddOrdersHome from './HomePageAndContent/AddOrdersHome';
import UpdateOrders from './Forms/UpdateOrders';
import UpdateOrdersHome from './HomePageAndContent/UpdateOrdersHome';
import GetIdOrders from './GetIdOrders';
import ViewOrdersHome from './HomePageAndContent/ViewOrdersHome';
import AdminNav from './AdminNav';
import SighupForm from './Users/SighupForm';

import Home from './Users/Home';
import ViewCart from './Users/ViewCart';

import TotalPrizeCart from './Users/TotalPrizeCart';
import CartAndTotalCart from './Users/CartAndTotalCart';
import Banner from './Users/Banner';
import LoginForm from './Users/LoginForm';
import SidebarAndImage from './HomePageAndContent/SidebarAndImage';
import PlaceOrderSuccess from './Users/PlaceOrderSuccess';
import PlaceOrderLList from './Users/PlaceOrderLList';




function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminNav/>} />
          <Route path='/adminLogin' element={<><AdminLogin/></>} />
          {/* <Route path='/home' element={<Sidebar/>} /> */}
          <Route path='/home' element={<SidebarAndImage/>} />
          <Route path='/Books' element={<BookHomePage/>} />
          <Route path='/AddBook' element={<AddBookHome/>} />
          <Route path='/selectedBook/:bookId' element={<ViewBookHome/>} />
          {/* <Route path='/update/:bookId' element={<UpdateBook/>} /> */}
          <Route path='/update/:bookId' element={<UpdateBookHome/>} />
          <Route path='/team' element={<TeamMemHome/>} />
          <Route path='/addTeam' element={<AddTeamMemHome/>} />
          <Route path='/teamMemUpdate/:teamId' element={<UpdateTeamHome/>} />
          <Route path='/teamMemIdPass/:teamId' element={<ViewTeamMem/>} />
          <Route path='/order' element={<OrdersHome/>} />
          <Route path='/addOrder' element={<AddOrdersHome/>} />
          <Route path='/updtOrder/:orderId' element={<UpdateOrdersHome/>} />
          <Route path='/viewOrder/:orderId' element={<ViewOrdersHome/>} />
          <Route path='/userSignup' element={<SighupForm/>} />
          <Route path='/userLogin' element={<LoginForm/>} />
          <Route path='/userHome' element={<Home/>} />
          <Route path='/cartView/:bookId' element={<ViewCart/>} />
          {/* <Route path='/cartProp/:bookId' element={<CartProp/>} /> */}
          <Route path='/banner' element={<Banner/>} />
          <Route path='/placeOrderSuccess' element={<PlaceOrderSuccess/>}/>
          <Route path='/place-order-list' element={<PlaceOrderLList/>} />
         
          
          
         
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
