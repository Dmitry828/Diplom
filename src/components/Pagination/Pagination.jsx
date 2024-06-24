import {Box, Flex, IconButton} from '@chakra-ui/react';
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons';

export const Pagination = ({ nextAction, prevAction, page, totalPages }) => {
  const handleNextPageFunc = () => {
    let currPage = page;

    if (currPage < totalPages) {
      window.scrollTo(0, 0);
      currPage += 1;

      nextAction(currPage);
    }
  };

  const handlePrevPageFunc = () => {
    let currPage = page;

    if (currPage > 1) {
      window.scrollTo(0, 0);
      currPage -= 1;
      prevAction(currPage);
    }
  };

  return totalPages !== 0 ? (
    <Flex justifyContent={'center'}>
      <IconButton
        disabled={page <= 1}
        onClick={handlePrevPageFunc}
        colorScheme={'blue'}
        aria-label={'prev-page'}
        icon={<ChevronLeftIcon />}
      />
      <Flex mx={'15px'} alignItems={'center'}>
        <Box>
          {page} / {totalPages}
        </Box>
      </Flex>
      <IconButton
        disabled={page >= totalPages}
        onClick={handleNextPageFunc}
        colorScheme={'blue'}
        aria-label={'next-page'}
        icon={<ChevronRightIcon />}
      />
    </Flex>
  ) : null;
};
