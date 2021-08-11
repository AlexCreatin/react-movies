import React from 'react';
import {MoviesList} from '../components/MoviesList';
import {Search} from '../components/Search';
import {Preloader} from '../components/Preloader';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        moviesList: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({moviesList: data.Search, loading: false}))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => this.setState({moviesList: data.Search, loading: false}))
    }

    render() {
        const {moviesList, loading} = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                loading ? (
                    <Preloader />
                    ) : ( <MoviesList moviesList={moviesList} />
                    )}
        </main>
    }
}

export {Main}