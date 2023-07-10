import React from 'react';
import { connect} from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import GifList from './components/GifList';
import GifForm from './components/GifForm';

import { getGifs } from './actions';

function App(props) {

const { loading, error, getGifs } = props;


  return (
    <div className="App">
      <h1>Search For Gifs</h1>
      <GifForm />
      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>We are loading</h3> : <GifList key={Date.now}/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    loading: state.loading,
    error: state.error
  }
}

export default  connect(mapStateToProps, {getGifs})(App);