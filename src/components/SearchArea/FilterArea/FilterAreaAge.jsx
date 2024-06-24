import {SearchAreaButton} from '../SearchAreaButton';
import {Flex} from '@chakra-ui/react';
import {useSelector} from 'react-redux';

export const FilterAreaAge = ({ card }) => {
  const filterCertification = useSelector((state) =>
    card === 'movie'
      ? state.data.certificationMovies
      : state.data.certificationSerials
  );

  return (
    <Flex flexWrap={'wrap'}>
      {filterCertification &&
        filterCertification.US.sort((a, b) => a.order - b.order).map((item, idx) => (
          <SearchAreaButton
            key={idx}
            id={item.order}
            text={item.certification}
            variant={'age'}
          />
        ))}
    </Flex>
  );
};
