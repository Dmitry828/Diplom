import {Box, Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import arrowRight from '../../assets/arrow-right.svg';
import Slider from 'react-slick';
import {settings} from './sliderSettings';
import {useSelector} from 'react-redux';
import {NewCardItem} from './NewCardItem';

export const NewCards = ({ card }) => {
  const headTitleOfCard =
    card === 'movie' ? 'New releases ' : 'Featured TV shows ';
  const newCards = useSelector((state) =>
    card === 'movie'
      ? state.nowPlaying.movies.results
      : state.nowPlaying.serials.results
  );

  return (
    <Box as={'section'}>
      <Box as={'h3'} fontSize={{ '2xl': '22px' }}>
        <Link to={`/${card}`}>
          {headTitleOfCard}
          <Image display={'inline-block'} src={arrowRight} />
        </Link>
      </Box>
      <Slider {...settings}>
        {newCards &&
          newCards.map((item) => (
            <NewCardItem key={item.id} data={item} card={card} />
          ))}
      </Slider>
    </Box>
  );
};
