'use client'
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MainLayout({children}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavBar />
        <div className="pb-16">{children}</div>
        <Footer />  
      </PersistGate>    
    </Provider>
  )
}
export default MainLayout