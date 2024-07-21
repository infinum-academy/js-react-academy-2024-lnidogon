import {
  Button,
  Flex,
  IconButton,
  Text,
  Image,
  Container,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Hide,
} from '@chakra-ui/react';
import { StarReview } from '../StarReview';
import { ChevronDownIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import useSWRMutation from 'swr/mutation';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { deleteReviewMutator } from '@/fetchers/mutators';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { EditReviewSection } from './EditReviewSection/EditReviewSection';
import { ShowDetailsDesktop } from '../../shows/ShowDetails/layouts/ShowDetails.desktop';
import { ShowDetailsMobile } from '../../shows/ShowDetails/layouts/ShowDetails.mobile';
import { ReviewItemDesktop } from './layouts/ReviewItem.desktop';
import { ReviewItemMobile } from './layouts/ReviewItem.mobile';

export interface IReview {
  comment: string;
  rating: number;
  id: number;
  show_id: number;
  user: IUser;
}

export interface IRemoveReviewParams {
  id: number;
}

export interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  const isMyReview =
    review.user.id == -1 ||
    localStorage.getItem('tv-shows-uid') == review.user?.id + '';
  return (
    <>
      <Show above="1024px">
        <ReviewItemDesktop review={review} />
      </Show>
      <Hide above="1024px">
        <ReviewItemMobile review={review} />
      </Hide>
    </>
  );
};
