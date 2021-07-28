import axios from 'axios';

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params : {
        api_key:"9028f4b34b27791c5d5f94162fbbf306",
        language:"en-US"
    }
});

export const moviesApi = {

    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movie : id => api.get(`movie/${id}`,{
        params : {
            append_to_response:"videos"
        }
    }),
    search : term => (api.get("search/movie",{
        params : {
            query: encodeURIComponent(term)
        }
    }))

}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    show : id => api.get(`tv/${id}`,{
        params : {
            append_to_response:"videos"
        }
    }),
    search : term => (api.get("search/tv",{
        params : {
            query: encodeURIComponent(term)
        }
    }))
}
/*
*
* {"web":
            {"client_id":"708361541583-0vaf8j58t3nsp9rt82qt0f6r31qhtddi.apps.googleusercontent.com",
                "project_id":"marine-outpost-321208",
                "auth_uri":"https://accounts.google.com/o/oauth2/auth",
                "token_uri":"https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
                "client_secret":"_2g9Nk0UHcsgogx9QpP6iWJw",
                "redirect_uris":["https://localhost"]
            }
        }
*
* */
const api2 = axios.create({
    baseURL:"/auth",
    params:{
        "client_id":"708361541583-0vaf8j58t3nsp9rt82qt0f6r31qhtddi.apps.googleusercontent.com",
        "client_secret":"_2g9Nk0UHcsgogx9QpP6iWJw",
        "redirect_uri":"https://localhost",
    }
})

export const calendarApi = {
    code : () => api2.get(""),
}