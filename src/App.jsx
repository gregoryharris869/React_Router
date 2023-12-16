import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <Nav />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
