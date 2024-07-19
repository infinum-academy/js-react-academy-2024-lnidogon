'use client';
import {
  Button,
  Flex,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { IReview } from '../ReviewItem';
import { EditIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IReviewFormInputs } from '@/components/features/reviews/ReviewForm/ReviewForm';
import { register } from 'module';
import { StarReview } from '../../StarReview';
import { swrKeys } from '@/fetchers/swrKeys';
import useSWRMutation from 'swr/mutation';
import { updateReviewMutator } from '@/fetchers/mutators';
import { ResolvedViewport } from 'next';
import { error } from 'console';
import useSWR from 'swr';
import { fetcher } from '@/fetchers/fetcher';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';

interface IEditReviewSectionProps {
  review: IReview;
}

export const EditReviewSection = ({ review }: IEditReviewSectionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<IReviewFormInputs>();
  const [locked, setLocked] = useState(true);
  const [selectedNumberOfStars, setSelectedNumberOfStars] = useState(
    review.rating
  );
  const [hoveredNumberOfStars, setHoveredNumberOfStars] = useState(
    review.rating
  );

  const {
    data: ogData,
    isLoading,
    mutate,
  } = useSWR<{ reviews: Array<IReview> }>(
    swrKeys.listReviews(review.show_id),
    async () =>
      await fetcher<{ reviews: Array<IReview> }>(
        swrKeys.listReviews(review.show_id)
      )
  );
  const { trigger } = useSWRMutation(
    swrKeys.alterReview(review.id),
    updateReviewMutator<IReviewFormInputs>,
    {
      onSuccess: (data) => {
        if (ogData == undefined) mutate();
        else
          mutate({
            reviews: ogData.reviews.map((cReview) =>
              cReview.id == review.id ? review : cReview
            ),
          });
        onClose();
      },
    }
  );

  const onClick = (index: number) => {
    setSelectedNumberOfStars(index);
    setValue('rating', index);
    setLocked(true);
  };

  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };

  const onSubmitHandler = async (data: IReviewFormInputs) => {
    if (data.rating == 0) return;
    await trigger(data);
  };

  return (
    <>
      <IconButton
        backgroundColor="orange.100"
        _hover={{ backgroundColor: 'blue.300' }}
        marginLeft="auto"
        aria-label="Edit review"
        size="sm"
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="pink.700"
          color="white"
          borderColor="primary"
          borderWidth="2px"
        >
          <ModalHeader>Edit your review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              as="form"
              id="edit-form"
              onSubmit={handleSubmit(onSubmitHandler)}
              gap="5"
              direction="column"
            >
              <FormControl isInvalid={errors?.comment?.message != ''}>
                <Textarea
                  {...register('comment', {
                    required: "Comment can't be empty!",
                  })}
                  isDisabled={isSubmitting}
                  defaultValue={review.comment}
                />
                <FormErrorMessage color="white">
                  {errors.comment?.message}
                </FormErrorMessage>
              </FormControl>
              <Flex
                flexDirection="row"
                width="50%"
                gap="1"
                onMouseEnter={() => {
                  setLocked(false);
                }}
                onMouseLeave={() => {
                  setLocked(true);
                  setHoveredNumberOfStars(0);
                }}
                id="star-input"
              >
                <Text>Rating:</Text>
                <StarReview
                  noOfStars={
                    locked ? selectedNumberOfStars : hoveredNumberOfStars
                  }
                  isStatic={false}
                  onChange={onClick}
                  onHover={onHover}
                />
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              form="edit-form"
              isDisabled={isSubmitting}
              backgroundColor="orange.100"
            >
              {isSubmitting ? <Spinner /> : 'Edit'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
