import * as axios from 'axios';


const api_key = 'api_key='+process.env.REACT_APP_TOKEN;



const instanse = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/'
});





export const movie_api = {

    getPopularMovies(current_page) {
        const params = '&language=ru-RU&page='+current_page;
        return instanse
                .get('top_rated?' + api_key + params)
                .then(response => response.data)
    },

    getDetails(movie_id) {
        const params = '&language=ru-RU&append_to_response=videos,images';
        return instanse
                .get(movie_id + '?' + api_key + params)
                .then(response => response.data)
    },

    // получить список актеров, съемочной комманды
    getCredits(movie_id) {
        return instanse
                .get(movie_id + '/credits?' + api_key)
                .then(response => response.data)
    },

    getReleases(movie_id) {
        return instanse
                .get(movie_id + '/release_dates?' + api_key)
                .then(response => response.data)
                
    },

    rateMovie({id, session_id, rate}) {
        return instanse
                .post(id + '/rating?' + api_key + '&session_id=' + session_id, {'value': rate})
                .then(response => response.data)
                
    },
    
    rateMovieDelete({id, session_id}) {
        return instanse
                .delete(id + '/rating?' + api_key + '&session_id=' + session_id)
                .then(response => response.data)
                
    },

    getAccountStates({session_id, id}) {
        console.log('!!!!1=', session_id, id);
        return instanse
                .get(id+'/account_states?'+api_key+'&session_id='+session_id)
                .then(response => response.data)
    }
}


/*
показываются в кинотеатрах Германии на этой неделе
https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=de-DE&region=DE&release_date.gte=2016-11-16&release_date.lte=2016-12-02&with_release_type=2|3



GET /movie/upcoming - список предстоящих фильмов в кинотеатрах


*/