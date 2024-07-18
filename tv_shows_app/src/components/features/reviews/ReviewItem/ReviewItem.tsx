import {
  Button,
  Flex,
  IconButton,
  Text,
  Image,
  Container,
  Box,
} from '@chakra-ui/react';
import { StarReview } from '../StarReview';
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import useSWRMutation from 'swr/mutation';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { deleteReviewMutator } from '@/fetchers/mutators';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { EditReviewSection } from './EditReviewSection/EditReviewSection';

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
  return (
    <Flex
      height="50px"
      backgroundColor="pink.800"
      color="white"
      borderRadius="8"
      paddingLeft="4"
      paddingRight="4"
      paddingBottom="2"
      paddingTop="2"
      flexDirection="row"
      gap="2"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        src={review.user.image_url}
        alt="profilna"
        fallbackSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        width="30px"
        maxW="10%"
      />
      <Flex
        flexDirection="column"
        fontSize="xs"
        width="20%"
        height="fit-content"
        minWidth="fit-content"
      >
        <Text fontSize="10px"> {review.user.email} </Text>
        <Flex flexDirection="row" alignItems="center" gap="1">
          <Text>{review.rating} / 5</Text>
          <Box width="30%">
            <StarReview
              noOfStars={review.rating}
              isStatic={true}
              onChange={() => {}}
              onHover={() => {}}
            />
          </Box>
        </Flex>
      </Flex>
      <Text fontSize="xs">{review.comment}</Text>
      <Flex marginLeft="auto" direction="row" gap="3">
        <EditReviewSection review={review} />
        <DeleteButton review={review} />
      </Flex>
    </Flex>
  );
};
