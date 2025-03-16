
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import MovieList from './components/MovieList'
import { useState, useEffect } from 'react'
import MovieSearch from './components/MovieSearch'
import { MovieProvider } from './context/MovieProvider'

function App() {
  const [movie, setMovie] = useState([]);
  const [moviePopular, setMoviePopular] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieUpcomig, setMovieUpcoming] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) =>{
    setMovieSearch([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };

      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/now_playing?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/popular?language=viS&page=1';
      const url3 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';
      const url4 = 'https://api.themoviedb.org/3/movie/upcoming?language=vi&page=1';

      const [res1, res2, res3, res4] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
        fetch(url4, options),
      ])
      
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();

      setMovie(data1.results);
      setMoviePopular(data2.results);
      setMovieRate(data3.results);
      setMovieUpcoming(data4.results);
    };

    fetchMovie();
  }, [])

  return (
    <>
    <MovieProvider>
    <div className="bg-black pb-10">
        <Header onSearch={handleSearch}/>
        <Banner/>
        {movieSearch.length > 0 ? (<MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch}/> ) : (
          <>
            <MovieList title={"Phim đang phát hành"} data={movie}/>
            <MovieList title={"Phim thịnh hành"} data={moviePopular}/>
            <MovieList title={"Phim có điểm số cao"} data={movieRate}/>
            <MovieList title={"Phim sắp ra mắt"} data={movieUpcomig}/>           
          </>
        )}

      </div>
    </MovieProvider>
           
    </>
  )
}

export default App
