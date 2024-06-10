import Router from "./routes/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
        <Router />
      <Footer />
    </>
  )
}

export default App