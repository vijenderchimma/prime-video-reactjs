// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {dots: false, slidesToScroll: 1, slidesToShow: 4}
  const {moviesList} = props

  return (
    <Slider {...settings}>
      {moviesList.map(eachMovie => (
        <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
