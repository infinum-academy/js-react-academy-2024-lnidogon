import {
  Button,
  Flex,
  Textarea,
  Text,
  FormControl,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IReviewFormInputs>({ defaultValues: { comment: '', rating: 0 } });
  const [locked, setLocked] = useState(false);
  const [selectedNumberOfStars, setSelectedNumberOfStars] = useState(0);
  const [hoveredNumberOfStars, setHoveredNumberOfStars] = useState(0);

  const onClick = (index: number) => {
    setSelectedNumberOfStars(index);
    setValue('rating', index);
    setLocked(true);
  };

  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };

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
    setSelectedNumberOfStars(0);
    setLocked(false);
    setHoveredNumberOfStars(0);
    setValue('rating', 0);
  };

  return (
    <Flex
      flexDirection="column"
      gap="2"
      width="100%"
      overflow="hidden"
      as="form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <FormControl>
        <Textarea
          {...register('comment')}
          required
          backgroundColor="orange.100"
          placeholder="Add review..."
          id="review-input"
          width="100%"
          fontSize="sm"
          padding="2"
          height="40px"
          minHeight="40px"
          borderRadius="7"
          isDisabled={isSubmitting}
        />
      </FormControl>

      <Flex
        flexDirection="row"
        alignItems="center"
        width="100%"
        gap="5"
        height="8"
      >
        <Text color="white" fontSize="sm">
          Rating:
        </Text>
        <FormControl>
          <Flex
            flexDirection="row"
            width="20%"
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
            <StarReview
              noOfStars={locked ? selectedNumberOfStars : hoveredNumberOfStars}
              isStatic={false}
              onChange={onClick}
              onHover={onHover}
            />
          </Flex>
        </FormControl>
        <Button
          isDisabled={isSubmitting}
          type="submit"
          fontSize="sm"
          width="100px"
          onSubmit={handleSubmit(onSubmitHandler)}
          height="30px"
          borderRadius="15px"
          _hover={{ backgroundColor: 'green.300' }}
          backgroundColor="orange.100"
          marginLeft="auto"
        >
          {isSubmitting ? <Spinner /> : 'Post'}
        </Button>
      </Flex>
    </Flex>
  );
};
