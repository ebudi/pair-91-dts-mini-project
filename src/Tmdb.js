const API_KEY = '7b199f1ef310b934b3fa2faa24192816';
const API_BASE = 'https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => { 
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originals Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendation',
                items: await basicFetch(`/trending/all/week?languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Popular',
                items: await basicFetch(`/movie/top_rated?languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Horror',
                items: await basicFetch(`/discover/movie?with_genres=27&languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&languague=id-ID&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentary',
                items: await basicFetch(`/discover/movie?with_genres=99&languague=id-ID&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=id-ID&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=id-ID&api_key=${API_KEY}`);
                break;
                default:
                    info = null
                break;
            }
        }
        return info;
    }
}