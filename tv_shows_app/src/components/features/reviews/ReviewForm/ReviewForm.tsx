import {
  Button,
  Flex,
  Textarea,
  Text,
  FormControl,
  Spinner,
  Show,
  Hide,
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
import { ReviewFormMobile } from './layouts/ReviewForm.mobile';
import { ReviewFormDesktop } from './layouts/ReviewForm.desktop';

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
  return (
    <>
      <Show above="1024px">
        <ReviewFormDesktop showId={showId} />
      </Show>
      <Hide above="1024px">
        <ReviewFormMobile showId={showId} />
      </Hide>
    </>
  );
};
