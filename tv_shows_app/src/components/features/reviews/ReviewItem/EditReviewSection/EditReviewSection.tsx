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

interface IEditReviewSectionProps {
  review: IReview;
  onEdit: (review: IReview) => void;
}

export const EditReviewSection = ({
  review,
  onEdit,
}: IEditReviewSectionProps) => {
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

  const onClick = (index: number) => {
    setSelectedNumberOfStars(index);
    setValue('rating', index);
    setLocked(true);
  };

  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };

  const onSubmitHandler = (data: IReviewFormInputs) => {
    console.log(data.rating);
    if (data.rating == 0) return;
    console.log(data);
    editReview(data);
  };

  const { trigger } = useSWRMutation(
    swrKeys.updateReview(review.id),
    updateReviewMutator<IReviewFormInputs>,
    {
      onSuccess: (data) => {
        console.log(data);
        onEdit(data.review);
        onClose();
      },
    }
  );
  const editReview = async (data: IReviewFormInputs) => {
    const response = await trigger(data);
    console.log(response.review);
  };

  return (
    <>
      {localStorage.getItem('tv-shows-uid') == review.user?.id + '' ? (
        <IconButton
          backgroundColor="orange.100"
          _hover={{ backgroundColor: 'blue.300' }}
          marginLeft="auto"
          aria-label="Edit review"
          size="sm"
          icon={<EditIcon />}
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
