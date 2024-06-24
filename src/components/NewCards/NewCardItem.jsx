import {useHistory} from 'react-router-dom';
import {MediaCard} from '../../common/MediaCard';
import {CardDetails} from '../../common/CardDetails';
import {Box} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {useState} from 'react';

export const NewCardItem = ({
  card,
  data: { id, poster_path, name, title, vote_average, genre_ids },
  data,
}) => {
  const allGenres = useSelector((state) =>
    card === 'movie' ? state.data.genresSerials : state.data.genresMovies
  );
  const cardTitle = name ? name : title;

  const history = useHistory();
  const [mouseMove, setMouseMove] = useState(false);

  const handleClick = () => {
    if (!mouseMove) {
      history.push(`/${card}/${id}`);
    }
  };

  return (
    <Box position={'relative'} m={{ base: '0 5px', '2md': '0 10px 0 0' }}>
      <Box cursor={'pointer'}
        onMouseMove={() => setMouseMove(true)}
        onMouseDown={() => setMouseMove(false)}
        onMouseUp={() => handleClick()}
      >
        <MediaCard
          image={poster_path}
          title={cardTitle}
          vote_average={vote_average}
          genre_ids={genre_ids}
          genres={allGenres}
        />
      </Box>

      <CardDetails card={data} />
    </Box>
  );
};
