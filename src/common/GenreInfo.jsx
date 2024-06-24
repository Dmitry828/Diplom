import {Box} from '@chakra-ui/react';
import {setGenre} from '../core/setGenre';

export const GenreInfo = ({ genres, genre_ids }) => {
  return (
    <Box
      color={'lightBlue'}
      p={'4px 8px'}
      background={'rgba(29, 29, 29, 0.5)'}
      borderRadius={'0px 8px'}
      fontSize={'14px'}
      lineHeight={'16px'}
    >
      {setGenre(genres, genre_ids)}
    </Box>
  );
};
