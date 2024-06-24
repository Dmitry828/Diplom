export const Button = {
  variants: {
    searchField: {
      fontWeight: '400',
      borderRadius: '20px',
      height: '30px',
      padding: '0 10px',
      fontSize: '14px',
      border: '1px solid rgba(29, 29, 29, 0.5)',
      _hover: {
        background: 'blue.500',
        border: '1px solid #3182CE',
        color: 'white',
      },
    },
    searchFieldActive: {
      fontWeight: '400',
      borderRadius: '20px',
      height: '30px',
      padding: '0 10px',
      fontSize: '14px',
      border: '1px solid #3182CE',
      background: 'blue.500',
      color: 'white',
    },
    circle: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: '1px solid #fff',
      background: 'transparent',
      _hover: {
        background: '#4A5568',
        border: '1px solid #4A5568',
      },
    },
    circleActive: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: '1px solid #3182CE',
      background: '#4A5568',
      _hover: {
        background: '#718096',
      },
    },
  },
};
