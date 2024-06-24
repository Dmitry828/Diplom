import {Box, Container, Flex, Grid, Heading} from '@chakra-ui/react';
import {SearchArea} from '../SearchArea/SearchArea';
import {Pagination} from '../Pagination/Pagination';
import {useDispatch, useSelector} from 'react-redux';
import {ShowCaseCard} from './ShowCaseCard';
import {nextPage, prevPage, searchRequest,} from '../../features/modules/search/search.actions';

export const ShowCaseCards = ({ entrie }) => {
  const dispatch = useDispatch();
  const caseTitle = entrie === 'movie' ? 'Movies' : 'Tv';
  const caseEntries = useSelector((state) => state.search.entries.results);
  const caseSort = useSelector((state) => state.search.sort);
  const caseRelease = useSelector((state) => state.search.release);
  const caseGenres = useSelector((state) => state.search.genres);
  const caseCertification = useSelector((state) => state.search.certification);
  const allPages = useSelector((state) => state.search.entries.total_pages);
  const casePage = useSelector((state) => state.search.entries.page);

  const handleNextFunc = (currentPage) => {
    dispatch(nextPage());
    dispatch(
      searchRequest(
        entrie,
        currentPage,
        caseSort,
        caseRelease,
        caseGenres,
        caseCertification,
      )
    );
  };

  const handlePrevFunc = (currentPage) => {
    dispatch(prevPage());
    dispatch(
      searchRequest(
        entrie,
        currentPage,
          caseSort,
          caseRelease,
          caseGenres,
          caseCertification,
      )
    );
  };

  return (
    <Box>
      <Container>
        <Heading py={'24px'}>{caseTitle}</Heading>
        <Flex
          w={'100%'}
          alignItems={{ base: 'center', '2md': 'flex-start' }}
          flexDir={{ base: 'column', '2md': 'row' }}
        >
          <SearchArea card={entrie} />
          <Box flex={'1 1 auto'} w={{ base: '100%', '2md': 'auto' }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={'20px'}
              mb={'50px'}
            >
              {caseEntries &&
                caseEntries.map((entrie) => (
                  <ShowCaseCard key={entrie.id} entrie={entrie} />
                ))}
            </Grid>
            <Pagination
              nextAction={handleNextFunc}
              prevAction={handlePrevFunc}
              page={casePage}
              totalPages={allPages}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
