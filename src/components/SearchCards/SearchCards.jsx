import {useEffect} from 'react';
import {Box, Container, Flex, Grid, Heading, Input, VStack,} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux';
import {
  nextPage,
  prevPage,
  allSearchQuery,
  oneSearchRequest,
} from '../../features/modules/oneSearch/oneSearch.actions';
import {ShowCaseCard} from '../ShowCaseCards/ShowCaseCard';
import {SearchDetails} from './SearchDetails';
import {Pagination} from '../Pagination/Pagination';
import {PageLoad} from '../PageLoad/PageLoad';

export const SearchCards = ({ card }) => {
  const dispatch = useDispatch();
  const searchCardsQuery = useSelector((state) => state.oneSearch.searchQuery);
  const searchEntries = useSelector((state) =>
    card === 'movie'
      ? state.oneSearch.searchMovies
      : state.oneSearch.searchSerials
  );
  const searchPage = searchEntries && searchEntries.page;
  const searchTotalPages = searchEntries && searchEntries.total_pages;
  const searchIsLoading = useSelector((state) => state.oneSearch.loading);

  const handleSearchFunc = (e) => {
    dispatch(allSearchQuery(e.target.value));
  };

  const handleNextPageFunc = (currentPage) => {
    dispatch(nextPage());
    dispatch(oneSearchRequest(searchCardsQuery, currentPage));
  };

  const handlePrevPageFunc = (currentPage) => {
    dispatch(prevPage());
    dispatch(oneSearchRequest(searchCardsQuery, currentPage));
  };

  useEffect(() => {
    if (searchCardsQuery.trim()) {
      dispatch(oneSearchRequest(searchCardsQuery, 1));
    }
  }, [searchCardsQuery]);

  return (
    <Container>
      <Box py={'24px'}>
        <VStack alignItems={'flex-start'} spacing={'20px'}>
          <Heading>Search</Heading>
          <Input
            value={searchCardsQuery}
            onChange={handleSearchFunc}
            fontSize={'20px'}
            p={'30px 40px'}
            w={'100%'}
            placeholder={'Search for a movie or tv show'}
          />
        </VStack>
      </Box>
      <Flex
        w={'100%'}
        alignItems={{ base: 'center', '2md': 'flex-start' }}
        flexDir={{ base: 'column', '2md': 'row' }}
      >
        {searchCardsQuery.trim().length > 0 &&  <SearchDetails card={card} />}
        {searchIsLoading ? <PageLoad/> : searchCardsQuery.trim().length > 0 && (
          <Box flex={'1 1 auto'} w={{ base: '100%', '2md': 'auto' }}>
            <Grid
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              gap={'20px'}
              mb={'50px'}
            >
              {searchEntries.results &&
                  searchEntries.results.map((card) => (
                  <ShowCaseCard key={card.id} entrie={card} />
                ))}
            </Grid>
            {searchEntries.results && <Pagination
              prevAction={handlePrevPageFunc}
              nextAction={handleNextPageFunc}
              totalPages={searchTotalPages}
              page={searchPage}
            />}
          </Box>
        )}
      </Flex>
    </Container>
  );
};
