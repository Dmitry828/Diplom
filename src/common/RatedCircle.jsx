import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react';

export const RatedCircle = ({  value, size }) => {
  const formatValue = value * 10;
  const setColorFunc = (value) => {
    const newValue = value * 10;

    if (newValue >= 70) {
      return 'green.400';
    } else if (newValue < 70 && newValue >= 50) {
      return 'yellow.400';
    } else {
      return 'red.400';
    }
  };

  return (
    <CircularProgress
      bg={'black'}
      borderRadius={'50%'}
      thickness="8px"
      size={size}
      value={formatValue}
      color={setColorFunc(value)}
    >
      <CircularProgressLabel>{formatValue + '%'}</CircularProgressLabel>
    </CircularProgress>
  );
};
