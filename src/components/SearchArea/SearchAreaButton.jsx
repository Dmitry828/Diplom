import {useState} from 'react';
import {Button} from '@chakra-ui/react';
import {useDispatch} from 'react-redux';
import {
    filterAddAge,
    filterDeleteGenres,
    filterDeleteAge,
    filterSortAges,
    filtAddGenres
} from '../../features/modules/search/search.actions';

export const SearchAreaButton = ({ text, id, variant }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleGenresFunc = () => {
    if (!active) {
      setActive(true);
      dispatch(filtAddGenres(id));
    } else {
      setActive(false);
      dispatch(filterDeleteGenres(id));
    }
  };

  const handleAgeFunc = () => {
    if (!active) {
      const age = { order: id, value: text };
      setActive(true);
      dispatch(filterAddAge(age));
      dispatch(filterSortAges());
    } else {
      setActive(false);
      dispatch(filterDeleteAge(text));
    }
  };

  return (
    <Button
      variant={active ? 'searchFieldActive' : 'searchField'}
      m={'0 5px 5px 0'}
      value={text}
      onClick={variant === 'genres' ? handleGenresFunc : handleAgeFunc}
    >
      {text}
    </Button>
  );
};
