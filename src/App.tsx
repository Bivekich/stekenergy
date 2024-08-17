import Header from "./componensts/Header/Header";
import Hero from "./componensts/Hero/Hero";
import AboutComapny from "./componensts/AboutCompany/AboutCompany";
import Products from "./componensts/Products/Products";
import MainProducts from "./componensts/MainProducts/MainProducts";
import Contact from "./componensts/Contact/Contact";
import Power from "./componensts/Power/Power";
import News from "./componensts/News/News";
import Footer from "./componensts/Footer/Footer";
export default function App() {
  return (
    <div className="w-screen h-screen">
      <div></div>
      <Header></Header>
      <Hero></Hero>
      <AboutComapny></AboutComapny>
      <Products></Products>
      <MainProducts></MainProducts>
      <Contact></Contact>
      <Power></Power>
      <News></News>
      <Footer></Footer>
    </div>
  );
}
