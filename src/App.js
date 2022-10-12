import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./component/layout/Alert";
import User from "./pages/User";
function App() {
  return (
    <>
    <GithubProvider>
      <AlertProvider>

        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Header />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />}  />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
              <Alert />
            </main>
            <Footer />
          </div>
        </Router>

      </AlertProvider>
    
    </GithubProvider>
      
    </>
  );
}
export default App;