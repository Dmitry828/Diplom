import {Box, List, ListItem, Text} from '@chakra-ui/react';
import {setCrew} from '../../core/setCrew';

export const EntrieInfo = ({ crew, tagline, entrieOverview }) => {
  return (
    <>
      <Box mb={'20px'}>
        <Box
          mb={'10px'}
          fontWeight={'400'}
          fontStyle={'italic'}
          opacity={'0.7'}
        >
          {tagline}
        </Box>
        <Box fontSize={'24px'} mb={'10px'}>
          Overview
        </Box>
        <Text fontWeight={'400'} fontSize={{ base: '16px', '3md': '18px' }}>
          {entrieOverview}
        </Text>
      </Box>
      <List display={'flex'} flexWrap={'wrap'} justifyContent={'flex-start'}>
        {crew &&
          setCrew(crew).map((crew, id) => (
            <ListItem key={id} flexBasis={'33%'} mb={'14px'} pr={'20px'}>
              <Box fontSize={'16px'}>{crew.name}</Box>
              <Box fontWeight={'400'} fontSize={'14px'}>
                {crew.job.join(', ')}
              </Box>
            </ListItem>
          ))}
      </List>
    </>
  );
};
