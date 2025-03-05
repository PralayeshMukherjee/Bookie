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
  SellerLogin,
  SellerRegister,
  SellerRegisterSuccess,
  SellerFeature,
  Contact,
  MailSuccess,
  Product,
  ProductDetails,
  ContactSeller,
  DeliveryAddress,
  AddAddress,
  PaymentGetWay,
} from "./Component/index";
import { ThemeProvider } from "./Contexts/theme.jsx"; // Add `.jsx`

function App() {
  const MyRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          //for when / hit the url then home page automaticly loaded
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/UserRegisterSuccess" element={<UserRegisterSuccess />} />
        <Route path="/SellerLogin" element={<SellerLogin />} />
        <Route path="/SellerRegister" element={<SellerRegister />} />
        <Route path="MailSuccess" element={<MailSuccess />} />
        <Route path="/PaymentGetWay" element={<PaymentGetWay />} />
        <Route
          path="/SellerRegisterSuccess"
          element={<SellerRegisterSuccess />}
        />
        <Route path="/Main" element={<MainLayout />}>
          <Route index element={<MainHome />} />
          <Route path="MainHome" element={<MainHome />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Product" element={<Product />} />
          <Route path="DeliveryAddress" element={<DeliveryAddress />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="ContactSeller" element={<ContactSeller />} />
          <Route path="SellerFeature" element={<SellerFeature />} />
          <Route path="AddAddress" element={<AddAddress />} />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider>
      {/* <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          </div> */}
      <RouterProvider router={MyRouter} />
      {/* </div>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
