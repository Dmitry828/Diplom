import {Box, IconButton, Menu, MenuButton, MenuItem, MenuList, useToast,} from '@chakra-ui/react';
import {SettingsIcon, StarIcon} from '@chakra-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourite, removeFromFavourite,} from '../features/modules/favourite/favourite.actions';
import {addToFavouritePopup} from "../core/addToFavouritePopup";


export const CardDetails = ({ card }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const cardFavouriteList = useSelector((state) => state.favourite.favouriteList);
  const favourite =
    cardFavouriteList &&
    cardFavouriteList.findIndex((movie) => movie.id === card.id) !== -1;
  const cardTitle = card.name ? card.name : card.title;
  const colorOption = favourite ? 'red.500' : 'black';

  const handleFavouriteFunc = () => {
    if (!favourite) {
      dispatch(addToFavourite(card));
    } else {
      dispatch(removeFromFavourite(card.id));
    }

    addToFavouritePopup(cardTitle, favourite, toast);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        pos={'absolute'}
        zIndex={'25'}
        top={'5px'}
        right={'5px'}
        _hover={{ background: 'blue.400' }}
        size="sm"
        borderRadius={'50%'}
        bg={{ base: 'blue.400', sm: 'rgba(255, 255, 255, 0.3)' }}
        icon={<SettingsIcon />}
      />
      <MenuList
        fontSize={'16px'}
        minW={'150px'}
        color={'black'}
        pos={'absolute'}
        top={'0'}
        right={'-32px'}
      >
        <MenuItem justifyContent={'center'} onClick={handleFavouriteFunc}>
          <StarIcon mr={'5px'} fontSize={'10px'} color={colorOption} />
          <Box as={'span'}>Favourite</Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
