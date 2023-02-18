import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MouseClick from "./components/Click/Click";
import MouseClickComponent from "./components/ClickComponents/ClickComponent";
import MouseInside from "./components/Inner/Inner";
function App() {
  const HeaderWithInfo = MouseInside(Header);
  const MainWithInfo = MouseInside(Main);
  const FooterWithInfo = MouseInside(Footer);
  const MouseWithInfo = MouseClick(MouseClickComponent);
  return (
    <div className="App">
      <HeaderWithInfo />
      <MainWithInfo />
      <FooterWithInfo />
      <MouseWithInfo />
    </div>
  );
}

export default App;
