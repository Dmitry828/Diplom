import {Box} from '@chakra-ui/react';
import Slider from 'react-slick';
import '../../slider/slider.css';
import {IntroSliderItem} from './IntroSliderItem';
import {useSelector} from 'react-redux';
import {settings} from './sliderSettings';
import {useEffect, useState} from 'react';

export const IntroSlider = () => {
  const sliderMovies = useSelector((state) => state.nowPlaying.movies.results);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (sliderMovies) {
      setPopular([sliderMovies[0], sliderMovies[1], sliderMovies[2]]);
    }
  }, [sliderMovies]);

  return (
    <Box as={'section'}>
      <Slider {...settings}>
        {popular.map((movie, id) => (
          <IntroSliderItem key={id} movie={movie} />
        ))}
      </Slider>
    </Box>
  );
};
