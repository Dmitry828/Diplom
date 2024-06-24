import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,} from '@chakra-ui/react';

export const EntrieModal = ({ trailer: { key }, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={'1440px'} m={'0'}>
        <ModalHeader fontWeight={'400'} bg={'#000'}>
          Play Trailer
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody p={'0'}>
          <iframe
            width={'100%'}
            height={'768'}
            src={`https://www.youtube.com/embed/${key}`}
            title={'YouTube video player'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
