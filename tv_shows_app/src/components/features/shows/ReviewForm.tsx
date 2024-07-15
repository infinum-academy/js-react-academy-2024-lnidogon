import {
  Input,
  Button,
  Flex,
  Textarea,
  Image,
  Container,
  Text,
} from '@chakra-ui/react';
import { IReview } from '../reviews/ReviewItem';
import { useState } from 'react';
import { setEngine } from 'crypto';
import { RatingInput } from '../reviews/RatingInput';

export interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  const [selectedNumberOfStars, setSelectedNumberOfStars] = useState(0);

  const onClickHandler = () => {
    const reviewInput = document.getElementById(
      'review-input'
    ) as HTMLInputElement;
    if (reviewInput.value == '' || selectedNumberOfStars == 0) return;
    onAdd({
      email: '',
      avatarUrl: '',
      comment: reviewInput.value,
      rating: selectedNumberOfStars,
    });
    reviewInput.value = '';
  };
  return (
    <Flex flexDirection="column" gap="2" width="100%" overflow="hidden">
      <Textarea
        backgroundColor="orange.100"
        placeholder="Add review..."
        id="review-input"
        width="100%"
        fontSize="sm"
        padding="2"
        height="40px"
        minHeight="40px"
        borderRadius="7"
        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
      />
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
        <RatingInput setNumberOfStarsSelected={setSelectedNumberOfStars} />
        <Button
          fontSize="sm"
          onClick={onClickHandler}
          height="7"
          width="100px"
          borderRadius="15px"
          _hover={{ backgroundColor: 'green.300' }}
          backgroundColor="orange.100"
          marginLeft="auto"
        >
          Post
        </Button>
      </Flex>
    </Flex>
  );
};
