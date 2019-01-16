import React from 'react'
import Layout from './components/MyLayout'
import Head from 'next/head'
import App from './components/app'

const Index = (props) => (
  <Layout>
    <Head>
      <title key="title">react-redux</title>
    </Head>
    <div>
    	<h1>Redux demo</h1>
    	<p>This page was rendered on the server side: {props.isServer.toString()}</p>
      <p>Hello Redux</p>
    </div>
    <App />
  </Layout>
);

Index.getInitialProps = async function(){
  return {
    isServer: typeof window === 'undefined'
  }
};

export default Index
