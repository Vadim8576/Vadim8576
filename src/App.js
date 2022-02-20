import React, { useEffect } from 'react';
import './styles/global.css';
import HeaderContainer from './components/header/HeaderContainer';
import PopularMovies from './components/mainPage/moviesList/PopularMoviesContainer';
import Footer from './components/footer/Footer';
import {withSuspense} from './Lazy/withSuspense';


import { getAuth, authentication } from './redux/auth_reducer';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

//////

const Login = React.lazy(() => import('./components/login/LoginContainer'));
const Profile = React.lazy(() => import('./components/profilePage/ProfilePageContainer'));
const MovieInfo = React.lazy(() => import('./components/mainPage/moviesInfo/MovieInfoContainer'));
const PeopleInfo = React.lazy(() => import('./components/mainPage/peopleInfo/PeopleInfoContainer'));
const MovieReleases = React.lazy(() => import('./components/mainPage/moviesInfo/MovieReleasesContainer'));
const MovieCasts = React.lazy(() => import('./components/mainPage/moviesInfo/MovieCasts'));
const MovieCrew = React.lazy(() => import('./components/mainPage/moviesInfo/MovieCrew'));
const PeopleFilmography = React.lazy(() => import('./components/mainPage/peopleInfo/PeopleFilmography'));
const PeopleCrew = React.lazy(() => import('./components/mainPage/peopleInfo/PeopleCrew'));
const Search = React.lazy(() => import('./components/mainPage/SearchContainer'));
const NowPlaying = React.lazy(() => import('./components/mainPage/moviesList/NowPlayingContainer'));
const Upcoming = React.lazy(() => import('./components/mainPage/moviesList/UpcomingContainer'));
const Person = React.lazy(() => import('./components/mainPage/PersonContainer'));




let App = ({ fetchWeather, ...props }) => {


  return (
    <div className="App">
      <HeaderContainer />

      <Container className="justify-content-md-center">
        {/* <Row className="justify-content-md-center"> */}
        {/* <Col> */}

        <Switch>     
          <Route exact path='/' render={() => <Redirect to={'/popular-movies'} />} />
          <Route path='/movie_info' render={() => <Redirect to={'/popular-movies'} />} />
          <Route path='/movie-info/:movie_id?' render={withSuspense(MovieInfo)} />
          <Route path='/movie-releases/:movie_id?' render={withSuspense(MovieReleases)} />
          <Route path='/casts/:movie_id?' render={withSuspense(MovieCasts)} />
          <Route path='/crew/:movie_id?' render={withSuspense(MovieCrew)} />
          <Route path='/people-filmography/:people_id?' render={withSuspense(PeopleFilmography)} />
          <Route path='/people-crew/:people_id?' render={withSuspense(PeopleCrew)} />
          <Route path='/people/:people_id?' render={withSuspense(PeopleInfo)} />
          <Route path='/search/:s_query=:s_query?' render={withSuspense(Search)} />
          <Route path='/login' render={withSuspense(Login)} />
          <Route path='/profile' render={withSuspense(Profile)} />

          <Route path='/popular-movies' render={() => <PopularMovies />} />
          <Route path='/now-playing' render={withSuspense(NowPlaying)} />
          <Route path='/upcoming' render={withSuspense(Upcoming)} />
          <Route path='/person' render={withSuspense(Person)} />
          <Route path='*' render={() => <div>404 NOT FOUND</div>} />
        </Switch>


        {/* </Col> */}

        {/* </Row> */}

      </Container>

      <Footer />
    </div>
  );
}


const getStateToProps = (state) => (
  {
    request_token: state.auth.request_token
    // popular_movie: state.movie.popular_movie
  }
)





// export default App;

export default App = compose(connect(getStateToProps, {
  getAuth,
  authentication
}), withSuspense)(App);
