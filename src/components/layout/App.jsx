import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom"
import CustomContext from "../../miContexto"

function App() {
  return (
    <BrowserRouter>
      <CustomContext>
        <Header />
        <Main />
        <Footer />
      </CustomContext>
    </BrowserRouter>
  );
}
export default App;
