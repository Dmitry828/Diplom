import {useState} from 'react';
import {Box, Flex, Select} from '@chakra-ui/react';
import {UpDownIcon} from '@chakra-ui/icons';
import {SearchAreaTitle} from '../SearchAreaTitle';
import {openTab} from '../../../core/openTab';
import {useDispatch, useSelector} from 'react-redux';
import {setSort} from '../../../features/modules/search/search.actions';

export const SortArea = () => {
  const [tab, setTab] = useState(false);
  const dispatch = useDispatch();
  const sort = useSelector(state => state.search.sort);

  const handleTabFunc = () => {
    openTab(setTab);
  };

  const setSortValueFunc = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <Box p={'20px 15px'} bg={'#fff'} borderRadius={'10px'} mb={'20px'}>
      <Flex
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        onClick={handleTabFunc}
        cursor={'pointer'}
      >
        <Box as={'h4'}>Sort</Box>
        {<UpDownIcon />}
      </Flex>
      <Box d={tab ? 'block' : 'none'}>
        <SearchAreaTitle text={'Sort results by'} />
        <Select bg={'gray.400'} onChange={setSortValueFunc} value={sort}>
          <option value="popularity.desc">Popularity descending</option>
          <option value="popularity.asc">Popularity ascending</option>
          <option value="vote_count.desc">Rating descending</option>
          <option value="vote_count.asc">Rating ascending</option>
          <option value="release_date.desc">Release date descending</option>
          <option value="release_date.asc">Release date ascending</option>
          <option value="original_title.desc">Title A-Z</option>
          <option value="original_title.asc">Title Z-A</option>
        </Select>
      </Box>
    </Box>
  );
};
