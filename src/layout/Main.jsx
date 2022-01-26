import React from "react";
import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    moviesList: [],
    sortList: [],
    loading: true,
    direction: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ moviesList: data.Search, loading: false })
      )
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str = "iron man", type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ moviesList: data.Search, loading: false })
      )
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  sortMovies = () => {
    if (this.state.direction === true) {
      this.setState({
        sortList: this.state.moviesList.sort((a, b) => {
          return a.Year > b.Year ? 1 : a.Year < b.Year ? -1 : 0;
        }),
      });
    } else {
      this.setState({
        sortList: this.state.moviesList.reverse((a, b) => {
          return a.Year > b.Year ? 1 : a.Year < b.Year ? -1 : 0;
        }),
      });
    }
    this.setState({ direction: this.state.direction === false });
  };

  render() {
    const { moviesList, loading, sortList, direction } = this.state;
    console.log(sortList, direction);
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} sortMovies={this.sortMovies} />
        {loading ? <Preloader /> : <MoviesList moviesList={moviesList} />}
      </main>
    );
  }
}

export { Main };
