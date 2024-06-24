import {Link} from 'react-router-dom';
import {MediaCardDown} from '../../common/MediaCardDown';
import {CardDetails} from '../../common/CardDetails';
import {GridItem} from '@chakra-ui/react';

export const ShowCaseCard = ({
  entrie: {
    title,
    vote_average,
    poster_path,
    release_date,
    id,
    name,
    first_air_date,
  },
  entrie,
}) => {
  const showCaseTitle = name ? name : title;
  const showCaseUrl = name ? 'tv' : 'movie';
  const showCaseDate = first_air_date ? first_air_date : release_date;
  const showCaseRating = Number(vote_average).toFixed(1);
  return (
    <GridItem
      bg={'rgba(255, 255, 255, .1);'}
      borderRadius={'10px'}
      overflow={'hidden'}
      pos={'relative'}
    >
      <Link to={`/${showCaseUrl}/${id}`}>
        <MediaCardDown
          release_date={showCaseDate}
          image={poster_path}
          title={showCaseTitle}
          vote_average={showCaseRating}
        />
      </Link>
      <CardDetails card={entrie} />
    </GridItem>
  );
};
