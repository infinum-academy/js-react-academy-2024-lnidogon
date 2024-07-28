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
import { Controller, useForm } from 'react-hook-form';
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
    control,
    formState: { isSubmitting, errors },
  } = useForm<IReviewFormInputs>({
    defaultValues: {
      comment: review.comment,
      rating: review.rating,
    },
  });

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

  const onSubmitHandler = async (data: IReviewFormInputs) => {
    if (data.rating == 0) return;
    await trigger(data);
  };

  return (
    <>
      <Button
        backgroundColor="transparent"
        _hover={{ backgroundColor: 'transparent' }}
        marginLeft="auto"
        fontSize="button"
        fontWeight="bold"
        color="purple.500"
        onClick={onOpen}
        width="144px"
      >
        EDIT
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          backgroundColor="purple.500"
          color="white"
          borderColor="purple.700"
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
                />
                <FormErrorMessage color="error">
                  {errors.comment?.message}
                </FormErrorMessage>
              </FormControl>
              <Controller
                name="rating"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StarReview onChange={onChange} value={value} />
                )}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              form="edit-form"
              isDisabled={isSubmitting}
              width="144px"
            >
              {isSubmitting ? <Spinner /> : 'Edit'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
