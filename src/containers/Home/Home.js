import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from '../../components/MovieCard/MovieCard';
import ModalDetail from '../../components/ModalDetail/ModalDetail';

class Home extends Component {
  state = {
    films: null,
    loading: false,
    isModalShowed: false,
    movieDetail: null
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

  movieCardClicked = (index) => {
    const movieDetail = {
      ...this.state.films[index]
    }
    this.setState({
      isModalShowed: true,
      movieDetail: movieDetail 
    });

  }

  render() {
    let movies = <div className="loader"></div>;
    if(!this.state.loading) {
      movies = this.state.films.map( (movie, index) => {
        return <MovieCard 
          key={movie.id}
          title={movie.title} 
          relDate={movie.release_date} 
          rtScore={movie.rt_score} 
          clicked={() => this.movieCardClicked(index)}/>
      })
    }
    return (
      <div className="w-90 w-100-ns pt5 mh0 center">
        {this.state.isModalShowed && (
          <div className="flex flex-column items-center h-100"> 
            <ModalDetail detail={this.state.movieDetail} />
          </div>
        )}
        {movies}
      </div>
    );
  }
}

export default Home;