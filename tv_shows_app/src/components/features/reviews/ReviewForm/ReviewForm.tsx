import {
  Button,
  Flex,
  Textarea,
  Text,
  FormControl,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import { StarReview } from '@/components/features/reviews/StarReview';
import { swrKeys } from '@/fetchers/swrKeys';
import { createReviewMutator } from '@/fetchers/mutators';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { fetcher } from '@/fetchers/fetcher';
import { IReview } from '../ReviewItem/ReviewItem';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';

export interface IReviewFormProps {
  showId: number;
}

export interface IReviewFormInputs {
  comment: string;
  rating: number;
}

interface ICreateReviewParams {
  comment: string;
  rating: number;
  show_id: number;
}

interface ICreateResponseParams {
  review: IReview;
}

export const ReviewForm = ({ showId }: IReviewFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IReviewFormInputs>({ defaultValues: { comment: '', rating: 0 } });

  const {
    data: ogData,
    mutate,
    isLoading,
  } = useSWR<{ reviews: Array<IReview> }>(
    swrKeys.listReviews(showId),
    async () =>
      await fetcher<{ reviews: Array<IReview> }>(swrKeys.listReviews(showId))
  );

  const { trigger } = useSWRMutation(
    swrKeys.createReview,
    createReviewMutator<ICreateReviewParams>,
    {
      onSuccess: (data) => {
        if (ogData == undefined) mutate();
        else mutate({ reviews: [data.review, ...ogData.reviews] }, false);
      },
    }
  );

  async function onAdd(comment: string, rating: number, showId: number) {
    await trigger({
      comment: comment,
      rating: rating,
      show_id: showId,
    });
  }

  const onSubmitHandler = (data: IReviewFormInputs) => {
    if (data.rating == 0) return;
    onAdd(data.comment, data.rating, showId);
  };

  return (
    <Flex
      flexDirection="column"
      gap={{ base: '40px', lg: '38px' }}
      width="100%"
      height="156px"
      as="form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <FormControl>
        <Textarea
          {...register('comment')}
          required
          backgroundColor="white"
          color="purple.300"
          placeholder="Add review..."
          id="review-input"
          width={{ base: '344px', lg: '100%' }}
          padding={2}
          height={{ base: '52px', lg: '80px' }}
          minHeight={{ base: '52px', lg: '80px' }}
          borderRadius={{ base: 'full', lg: 'mdRadius' }}
          fontSize="body"
          isDisabled={isSubmitting}
        />
      </FormControl>

      <Flex
        flexDirection="row"
        alignItems="center"
        width={{ base: '344px', lg: '870px' }}
        gap={5}
      >
        <Text color="white" fontSize="sm">
          Rating:
        </Text>
        <Controller
          name="rating"
          control={control}
          render={({ field: { onChange } }) => (
            <StarReview
              isStatic={false}
              onChange={onChange}
              startNoOfStars={0}
            />
          )}
        ></Controller>
        <Button
          isDisabled={isSubmitting}
          type="submit"
          onSubmit={handleSubmit(onSubmitHandler)}
          marginLeft="auto"
          size={{ base: 'sm', lg: 'md' }}
          width={{ base: '98px', lg: '144px' }}
        >
          {isSubmitting ? <Spinner /> : 'Post'}
        </Button>
      </Flex>
    </Flex>
  );
};
