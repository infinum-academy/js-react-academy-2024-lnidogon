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
import { IReview } from '../../ReviewItem/ReviewItem';
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

export const ReviewFormMobile = ({ showId }: IReviewFormProps) => {
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
      gap="40px"
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
          color="lightPurple"
          placeholder="Add review..."
          id="review-input"
          width="343px"
          padding="2"
          height="52px"
          minHeight="52px"
          borderRadius="full"
          textStyle="body"
          isDisabled={isSubmitting}
        />
      </FormControl>

      <Flex flexDirection="row" alignItems="center" width="343px" gap="5">
        <Text color="white" fontSize="sm">
          Rating:
        </Text>
        <FormControl>
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
          variant="default"
          onSubmit={handleSubmit(onSubmitHandler)}
          marginLeft="auto"
          size="sm"
        >
          {isSubmitting ? <Spinner /> : 'Post'}
        </Button>
      </Flex>
    </Flex>
  );
};
