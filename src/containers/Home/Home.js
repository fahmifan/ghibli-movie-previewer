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