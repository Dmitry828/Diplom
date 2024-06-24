import {Box, HStack, Image} from '@chakra-ui/react';
import noImage from '../../assets/no-image.png';

export const EntrieCasts = ({ casts, entrie }) => {
  return (
    <Box py={'30px'}>
      <Box fontSize={'24px'} mb={'30px'}>
        Top Billed Cast
      </Box>
      <HStack
        overflowX={'scroll'}
        w={'100%'}
        h={'330px'}
        pb={'15px'}
        pos={'relative'}
        alignItems={'flex-start'}
      >
        {casts.map((cast) => (
          <Box
            borderRadius={'8px'}
            overflow={'hidden'}
            key={cast.id}
            h={'100%'}
            minW={'140px'}
            w={'140px'}
            bg={'#fff'}
            color={'black'}
          >
            <Image
              mb={'10px'}
              w={'100%'}
              h={'175px'}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w138_and_h175_face${cast.profile_path}`
                  : noImage
              }
            />
            <Box px={'5px'}>
              <Box mb={'5px'} lineHeight={'1'} fontSize={'18px'}>
                {cast.name}
              </Box>
              <Box fontSize={'14px'} fontWeight={'400'}>
                {entrie === 'movie' ? (
                  cast.character
                ) : (
                  <>
                    <Box>{cast.roles[0].character}</Box>
                    <Box opacity={'0.5'}>
                      {cast.roles[0].episode_count + ' episodes'}
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
