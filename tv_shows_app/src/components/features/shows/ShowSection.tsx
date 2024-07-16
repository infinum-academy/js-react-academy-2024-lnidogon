import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { ShowDetais } from './ShowDetails';
import { IReview } from '../reviews/ReviewItem';
import { useEffect, useState } from 'react';
import { ShowReviewSection } from './ShowReviewSection';
import { IShow } from '@/typings/show';
import { swrKeys } from '@/fetchers/swrKeys';
import {
  createReviewMutator,
  deleteReviewMutator,
  getMutator,
} from '@/fetchers/mutators';
import useSWRMutation from 'swr/mutation';
import useSWR, { mutate } from 'swr';
import { create } from 'domain';

interface IShowSection {
  show: IShow;
}

interface ICreateReviewParams {
  comment: string;
  rating: number;
  show_id: number;
}

interface IListReviewsParams {
  show_id: number;
}

export const ShowSection = ({ show }: IShowSection) => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  useEffect(() => {
    listReviews({ show_id: show.id });
  }, []);

  const { trigger: triggerList } = useSWRMutation(
    swrKeys.listReviews(show.id),
    getMutator<IListReviewsParams>,
    {
      onSuccess: (data) => {
        console.log(data);
        setReviews(data.reviews);
      },
    }
  );
  async function listReviews(params: IListReviewsParams) {
    const data = await triggerList(params);
    mutate(`/api/shows/${params.show_id}`);
    return data;
  }

  const { trigger: triggerCreate } = useSWRMutation(
    swrKeys.createReview,
    createReviewMutator<ICreateReviewParams>,
    {
      onSuccess: (data) => {
        const newList = [...reviews, data.review];
        setReviews(newList);
      },
    }
  );
  async function createReview(params: ICreateReviewParams) {
    const data = await triggerCreate(params);
    console.log(data);
    mutate(`/api/shows/${params.show_id}`);
  }

  function onAdd(review: IReview, showId: number) {
    createReview({
      comment: review.comment,
      rating: review.rating,
      show_id: showId,
    });
  }

  async function onRemove(reviewId: number) {
    let newList = reviews.filter((t) => t.id !== reviewId);
    setReviews(newList);
  }

  return (
    <Box backgroundColor="pink.900" height="100%" padding="4">
      <Flex flexDirection="column" alignItems="center" gap="5">
        <ShowDetais show={show} />
        <ShowReviewSection
          reviews={reviews}
          onAdd={onAdd}
          onRemove={onRemove}
          showId={show.id}
        />
      </Flex>
    </Box>
  );
};
