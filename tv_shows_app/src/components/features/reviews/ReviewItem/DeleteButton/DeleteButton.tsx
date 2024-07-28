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
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { deleteReviewMutator } from '@/fetchers/mutators';
import useSWR, { mutate } from 'swr';
import { fetcher } from '@/fetchers/fetcher';

interface IDeleteButtonProps {
  review: IReview;
}

export const DeleteButton = ({ review }: IDeleteButtonProps) => {
  const {
    data: ogData,
    mutate,
    isLoading,
  } = useSWR<{ reviews: Array<IReview> }>(
    swrKeys.listReviews(review.show_id),
    async () =>
      await fetcher<{ reviews: Array<IReview> }>(
        swrKeys.listReviews(review.show_id)
      )
  );
  const { trigger } = useSWRMutation(
    swrKeys.alterReview(review.id),
    deleteReviewMutator<IRemoveReviewParams>,
    {
      onSuccess: () => {
        if (ogData == undefined) mutate();
        else
          mutate({
            reviews: ogData.reviews.filter((temp) => temp.id !== review.id),
          });
        onClose();
      },
    }
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        data-testid="delete-button"
        backgroundColor="transparent"
        _hover={{ backgroundColor: 'transparent' }}
        marginLeft="auto"
        onClick={onOpen}
        width="144px"
      >
        DELETE
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="purple.500"
          color="white"
          borderColor="purple.700"
          borderWidth="2px"
        >
          <ModalHeader>Delete your review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this review?</ModalBody>
          <ModalFooter>
            <Button
              width="144px"
              onClick={async () => await trigger({ id: review.id })}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
