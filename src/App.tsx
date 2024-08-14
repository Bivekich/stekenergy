import Header from "./componensts/Header/Header";
import Hero from "./componensts/Hero/Hero";
import AboutComapny from "./componensts/AboutCompany/AboutCompany";
import Products from "./componensts/Products/Products";
import MainProducts from "./componensts/MainProducts/MainProducts";
import Contact from "./componensts/Contact/Contact";
import Power from "./componensts/Power/Power";
import Nothing from "./componensts/Nothing/Nothin";
export default function App() {
  return (
    <div className="w-screen h-screen">
      <Header></Header>
      <Hero></Hero>
      <AboutComapny></AboutComapny>
      <Products></Products>
      <MainProducts></MainProducts>
      <Contact></Contact>
      <Power></Power>
      <Nothing></Nothing>
    </div>
  );
}
