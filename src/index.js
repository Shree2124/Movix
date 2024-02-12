import PageNotFound from './pages/404/PageNotFound'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import Home from './pages/Home/Home'
import Popular from './pages/Home/popular/Popular'
import SearchResult from './pages/searchResult/SearchResult'
import TopRated from './pages/Home/toprated/TopRated'

import useFetch from './hooks/useFetch'

import Header from './components/Header/Header'
import CircleRating from './components/circleRating/CircleRating'
import Footer from './components/Footer/Footer'
import Img from './components/lazyLoadImage/Img'
import ContentWrapper from './components/contentWrapper/ContentWrapper'
import Genres from './components/genres/Genres'
import Carousel from './components/carosel/Carousel'





export {
    PageNotFound,
    CircleRating,
    Details,
    Popular,
    Explore,
    TopRated,
    Home,
    SearchResult,

    useFetch,

    Header,
    Genres,
    ContentWrapper,
    Img,
    Carousel,
    Footer
}