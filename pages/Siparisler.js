import React  from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const Siparisler = () => (
  <div>
    <Head>
      <title>4F Menu | Siparişler </title>
    </Head>
    <Topbar />
<Navbar />
  </div>
);

export default Siparisler;