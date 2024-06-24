import {Box, Container, Grid, Heading} from '@chakra-ui/react';
import {useSelector} from 'react-redux';
import {ShowCaseCard} from '../ShowCaseCards/ShowCaseCard';

export const FavouriteCards = () => {
  const favouritesList = useSelector((state) => state.favourite.favouriteList);

  return (
    <Box>
      <Container>
        <Box py={'24px'}>
          <Heading>Favourite</Heading>
          <Box as={'h6'} fontSize={'16px'} fontWeight={'400'} opacity={'.7'}>
            {favouritesList.length + ' items'}
          </Box>
        </Box>
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={'20px'}
        >
          {favouritesList &&
            favouritesList.map((favouriteCard) => (
              <ShowCaseCard key={favouriteCard.id} entrie={favouriteCard} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
