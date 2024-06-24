export const addToFavouritePopup = (title, status, toast) => {
  toast({
    position: 'top-right',
    title: 'Success.',
    description: `${title} ${
      !status ? 'was added to' : 'was removed from'
    } your favourite list`,
    status: !status ? 'success' : 'error',
    duration: 3000,
    isClosable: true,
  });
};
