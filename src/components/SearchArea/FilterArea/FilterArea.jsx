import {useState} from 'react';
import {Box, Flex, Stack} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';
import {SearchAreaTitle} from '../SearchAreaTitle';
import {openTab} from '../../../core/openTab';
import {SearchAreaDate} from '../SearchAreaDate';
import {FilterAreaAge} from './FilterAreaAge';
import {FilterAreaGenre} from './FilterAreaGenre';

export const FilterArea = ({ card }) => {
  const [tab, setTab] = useState(false);

  const handleTabFunc = () => {
    openTab(setTab);
  };

  return (
    <Box p={'20px 15px'} bg={'#fff'} borderRadius={'10px'} mb={'50px'}>
      <Flex
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={handleTabFunc}
        cursor={'pointer'}
      >
        <Box as={'h4'}>Filter</Box>
        {<UpDownIcon />}
      </Flex>
      <Box d={tab ? 'block' : 'none'}>
        <Box mb={'10px'}>
          <SearchAreaTitle text={'Release dates'} />
          <Stack dir={'column'}>
            <SearchAreaDate />
          </Stack>
        </Box>
        <Box>
          <SearchAreaTitle text={'Genres'} />
          <FilterAreaGenre card={card} />
        </Box>
        <Box mb={'10px'}>
          <SearchAreaTitle text={'Certification'} />
          <FilterAreaAge card={card} />
        </Box>
      </Box>
    </Box>
  );
};
