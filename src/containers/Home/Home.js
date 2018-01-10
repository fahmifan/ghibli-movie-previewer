import React, { Component } from 'react';

import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';

class Home extends Component {
  state = {
    films: null,
    loading: false
  }
  render() {
    return (
      <div className="w-90 w-100-ns pt5 mh0 center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}

export default Home;