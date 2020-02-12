import React  from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import store from '../stores/administratorStore';
import Login from '../components/Login/Login';

const Giris = () => (
  <div>
    <Provider store={store}>
        <Head>
          <title>4F Menu | Yetkili Girişi</title>
          <style global="true">{`
      body {
        margin: 0;
        background-image:url('https://siparistakip.yemeksepeti.com/assets/images/login/login-background.jpg');
        background-repeat:no-repeat;
        background-size: cover;
     }
  }`}</style>
        </Head>
        <Login></Login>
      </Provider>
  </div>
);

export default Giris;