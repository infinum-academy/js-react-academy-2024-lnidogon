import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { IRemoveReviewParams, IReview } from '../ReviewItem';
import { DeleteIcon } from '@chakra-ui/icons';

interface IDeleteButtonProps {
  review: IReview;
  removeReview: (params: IRemoveReviewParams) => {};
}

export const DeleteButton = ({ review, removeReview }: IDeleteButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onClickHandler = () => {
    onClose();
    removeReview({
      id: review.id,
    });
  };
  return (
    <>
      {review.user.id == -1 ||
      localStorage.getItem('tv-shows-uid') == review.user?.id + '' ? (
        <IconButton
          data-testid="delete-button"
          backgroundColor="orange.100"
          _hover={{ backgroundColor: 'red.300' }}
          marginLeft="auto"
          aria-label="Delete review"
          size="sm"
          icon={<DeleteIcon />}
          onClick={onOpen}
        />
      ) : (
        <></>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="pink.700"
          color="white"
          borderColor="pink.900"
          borderWidth="2px"
        >
          <ModalHeader>Delete your review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this review?</ModalBody>
          <ModalFooter>
            <Button backgroundColor="orange.100" onClick={onClickHandler}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
