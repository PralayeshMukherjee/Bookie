import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Layout,
  Home,
  UserLogin,
  UserRegister,
  UserRegisterSuccess,
  MainHeader,
  MainLayout,
  MainFooter,
  MainHome,
  About,
  SearchBox,
  Features,
  Sellers,
  SellerLogin,
  SellerRegister,
  SellerRegisterSuccess,
  SellerFeature,
} from "./Component/index";

function App() {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          //for when / hit the url then home page automaticly loaded
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/UserRegisterSuccess" element={<UserRegisterSuccess />} />
        <Route path="/SellerLogin" element={<SellerLogin />} />
        <Route path="/SellerRegister" element={<SellerRegister />} />
        <Route
          path="/SellerRegisterSuccess"
          element={<SellerRegisterSuccess />}
        />
        <Route path="/Main" element={<MainLayout />}>
          <Route index element={<MainHome />} />
          <Route path="MainHome" element={<MainHome />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Features />}>
            <Route index element={<SearchBox />} />
            <Route path="Sellers" element={<Sellers />} />
          </Route>
          <Route path="SellerFeature" element={<SellerFeature />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={MyRouter} />
    </>
  );
}

export default App;
