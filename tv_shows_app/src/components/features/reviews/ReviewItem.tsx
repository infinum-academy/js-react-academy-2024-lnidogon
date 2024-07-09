import { Button, Flex, IconButton, Text } from '@chakra-ui/react';
import { StarReview } from './StarReview';
import { SearchIcon } from '@chakra-ui/icons';

export interface IReview {
  email: string;
  avatarUrl: string;
  comment: string;
  rating: number;
}

interface IReviewItemProps {
  review: IReview;
  onRemove: (review: IReview) => void;
}

export const ReviewItem = ({ review, onRemove }: IReviewItemProps) => {
  const OnClickHandler = () => {
    onRemove(review);
  };
  return (
    <Flex
      fontSize="17"
      backgroundColor="pink.800"
      color="white"
      borderRadius="8"
      padding="5"
      flexDirection="row"
      gap="2"
    >
      <Flex
        flexDirection="column"
        fontSize="sm"
        width="20%"
        minWidth="fit-content"
      >
        <Text> email </Text>
        <Flex flexDirection="row" alignItems="center" gap="4">
          <Text fontSize="xs">{review.rating} / 5</Text>
          <StarReview noOfStars={review.rating} />
        </Flex>
      </Flex>
      <Text fontSize="sm">{review.comment}</Text>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        minWidth="fit-content"
        height="fit-content"
        padding="1"
        backgroundColor="orange.100"
        _hover={{ backgroundColor: 'red.300' }}
        onClick={OnClickHandler}
      />
    </Flex>
  );
};
