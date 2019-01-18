import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Layout from './components/MyLayout'
import Head from 'next/head'
import App from './components/app'
import reducer from './reducer'

const store = createStore(reducer)


const Index = (props) => (
  <Provider store={store}>
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
  </Provider>
);

Index.getInitialProps = async function(){
  return {
    isServer: typeof window === 'undefined'
  }
};

export default Index
