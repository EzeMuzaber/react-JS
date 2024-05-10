import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom"
import CustomContext from "../../miContexto"
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <CustomContext>
        <Header />
        <Main />
        <Footer />
      </CustomContext>
      <ToastContainer autoClose={1700}/>
    </BrowserRouter>
  );
}
export default App;
