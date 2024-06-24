import {CircularProgress, Flex} from '@chakra-ui/react';

export const PageLoad = () => {
  return (
    <Flex
      bg={'black'}
      pl={'54px'}
      minH={'99vh'}
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress thickness={'6px'} isIndeterminate />
    </Flex>
  );
};
