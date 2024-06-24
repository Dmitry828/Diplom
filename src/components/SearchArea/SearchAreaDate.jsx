import {useEffect, useState} from 'react';
import {Box, Flex, Input} from '@chakra-ui/react';
import {useDispatch} from 'react-redux';
import {releaseFilter} from '../../features/modules/search/search.actions';
import {currDate} from '../../core/currDate';

export const SearchAreaDate = () => {
  const initialDate = {
    from: '',
    to: currDate(1)
  };
  const [date, setDate] = useState(initialDate);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.stringify(date) !== JSON.stringify(initialDate)) {
      dispatch(releaseFilter([date.from, date.to]));
    }
  }, [date]);
  
  const handleDateFromFunc = (e) => {
    setDate({ ...date, from: e.target.value });
  };
  
  const handleDateToFunc = (e) => {
    setDate({ ...date, to: e.target.value });
  };

  return (
    <>
      <Flex alignItems={'center'}>
        <Box flexBasis={'60px'} fontSize={'12px'} fontWeight={'400'}>
          from
        </Box>
        <Input
          w={'100%'}
          type={'date'}
          value={date.from}
          onChange={handleDateFromFunc}
        />
      </Flex>

      <Flex alignItems={'center'}>
        <Box flexBasis={'60px'} fontSize={'12px'} fontWeight={'400'}>
          to
        </Box>
        <Input
          w={'100%'}
          type={'date'}
          value={date.to}
          onChange={handleDateToFunc}
        />
      </Flex>
    </>
  );
};
