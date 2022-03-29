import "../styles/globals.scss";
import Layout from "../components/Layout";
import { Provider, useDispatch } from "react-redux";
import store from "../store";

import "../styles/form.module.scss";
import "../utils/firebase.config";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
