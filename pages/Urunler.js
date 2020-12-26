import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import productStore from '../stores/productStore';

import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import Content from '../components/Content';
import ProductList from '../components/Product/ProductList';
import Top from '../components/Product/Top';
import Footer from "../components/Footer";
import Title from "../components/Title";

const Urunler = () => (
  <Provider ProductStore={productStore}>
    <Head>
      <title>4F Menu | Ürünler</title>
      <style global="true">{`
      body {
        margin: 0;
     }
  }`}</style>
    </Head>
    <Topbar />
    <Navbar />
    <Top></Top>
    <Content>
      <ProductList></ProductList>
    </Content>
    <Footer>
      <Title color="white" lineHeight="30px" marginRight="10px" float="center"> OKTAY ©™ 2020 4F</Title>
    </Footer>
  </Provider>
);

export default Urunler;
