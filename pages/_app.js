import '@/styles/globals.css'
import Script from 'next/script'
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/plugins/jquery.countdown.css"
import "../public/assets/css/plugins/magnific-popup/magnific-popup.css"
import "../public/assets/css/style.css"
import "../public/assets/css/skins/skin-demo-26.css"
import "../public/assets/css/demos/demo-26.css"
import Header from '@/components/layout/Header'
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";

export default function App({ Component, pageProps }) {
  return(
    <>
  <div className='page-wrapper'>
    <Header/>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  </div>
  <Script src="assets/js/jquery.min.js"></Script>
    <Script src="assets/js/bootstrap.bundle.min.js"></Script>
    <Script src="assets/js/jquery.hoverIntent.min.js"></Script>
    <Script src="assets/js/jquery.waypoints.min.js"></Script>
    <Script src="assets/js/superfish.min.js"></Script>
    <Script src="assets/js/bootstrap-input-spinner.js"></Script>
    <Script src="assets/js/jquery.plugin.min.js"></Script>
    <Script src="assets/js/jquery.countdown.min.js"></Script>
    <Script src="assets/js/jquery.magnific-popup.min.js"></Script>
  </>
  )
  
}
