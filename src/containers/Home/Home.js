import React, { Component } from 'react';

import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';

class Home extends Component {
  state = {
    films: null,
    loading: false
  }

  componentWillMount() {
    this.getFilms();
  }

  getFilms = () => {
    const baseUrl =  'https://ghibliapi.herokuapp.com';
    this.setState({loading: true});
    axios.get(baseUrl + '/films')
      .then(res => {
        this.setState({
          films: res.data,
          loading: false
        })
      })
  }

  render() {
    let movies = <div className="loader"></div>;
    if(!this.state.loading) {
      movies = this.state.films.map(movie => {
        return <MovieCard 
          key={movie.id}
          title={movie.title} 
          relDate={movie.release_date} 
          rtScore={movie.rt_score} />
      })
    }
    return (
      <div className="w-90 w-100-ns pt5 mh0 center">
        {movies}
      </div>
    );
  }
}

export default Home;