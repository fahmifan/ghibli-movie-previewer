import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

class Home extends Component {
  render() {
    return (
      <div className="w-90 ma0 center">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}

export default Home;