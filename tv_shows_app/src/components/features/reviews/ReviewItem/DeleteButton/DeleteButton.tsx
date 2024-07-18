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
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';

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
  if (!ogData || isLoading) return <></>;
  const { trigger } = useSWRMutation(
    swrKeys.deleteReview(review.id),
    deleteReviewMutator<IRemoveReviewParams>,
    {
      onSuccess: () => {
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
            <Button
              backgroundColor="orange.100"
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
