import { Box, Button, Container } from "@mui/material"
import Search from "../components/home-page/Search";
import CategoryMenu from "../components/home-page/CategoryMenu";
import ProductsScreen from "../components/home-page/ProductsScreen";
import { useRef } from "react";
import NavBar from "../components/navigation-top-bar/Nav-Bar";
import { Route, Routes } from "react-router-dom";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";





function Home() {

  return (
    <>
    <NavBar/>
    <Container>
      <Routes>
        <Route path={'/'} element={<ProductsScreen/>} />
        <Route path={'cart'} element={<CartScreen/>} />
        <Route path={'orders'} element={<OrdersScreen/>} />
      </Routes>
    </Container>
    </>

  )
}

export default Home