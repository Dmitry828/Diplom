import {Box, VStack} from '@chakra-ui/react';

export const EntrieDetails = ({
  original_title,
  original_language,
  budget,
  revenue,
  status,
}) => {
  const budgetEntrie = budget ? '$' + budget : '-';
  const revenueEntrie = revenue ? '$' + revenue : '-';

  return (
    <Box p={'30px 0'}>
      <Box fontSize={'24px'} mb={'30px'}>
        More Details
      </Box>
      <VStack alignItems={'flex-start'} spacing={'30px'}>
        <Box>
          <Box>Original title</Box>
          <Box fontWeight={'400'} fontSize={'16px'}>
            {original_title}
          </Box>
        </Box>
        <Box>
          <Box>Original language</Box>
          <Box textTransform={'uppercase'} fontWeight={'400'} fontSize={'16px'}>
            {original_language}
          </Box>
        </Box>
        <Box>
          <Box>Status</Box>
          <Box fontWeight={'400'} fontSize={'16px'}>
            {status}
          </Box>
        </Box>
        <Box>
          <Box>Budget</Box>
          <Box fontWeight={'400'} fontSize={'16px'}>
            {budgetEntrie}
          </Box>
        </Box>
        <Box>
          <Box>Revenue</Box>
          <Box fontWeight={'400'} fontSize={'16px'}>
            {revenueEntrie}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
