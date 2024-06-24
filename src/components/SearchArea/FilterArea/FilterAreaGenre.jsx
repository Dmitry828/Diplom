import {SearchAreaButton} from '../SearchAreaButton';
import {Flex} from '@chakra-ui/react';
import {useSelector} from 'react-redux';

export const FilterAreaGenre = ({ card }) => {
  const filterGenres = useSelector((state) =>
    card === 'movie' ? state.data.genresMovies : state.data.genresSerials
  );

  return (
    <Flex flexWrap={'wrap'}>
      {filterGenres &&
        filterGenres.map((genre) => (
          <SearchAreaButton
            key={genre.id}
            text={genre.name}
            id={genre.id}
            variant={'genres'}
          />
        ))}
    </Flex>
  );
};
