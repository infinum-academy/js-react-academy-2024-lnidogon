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

export interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  let starArray = [];
  const [clickedNumberOfStars, setClickedNumberOfStars] = useState(0);
  const [selectedNumberOfStars, setNumberOfStars] = useState(0);
  const [locked, setLocked] = useState(false);
  const OnClickHandler = () => {
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
  };
  for (let i = 1; i <= 5; i++) {
    //znam da nije prikladno ali sviđa mi se ovo ime
    const starFragment = (
      <Image
        src={(i <= selectedNumberOfStars ? 'filled' : 'empty') + '-star.png'}
        width="10%"
        onClick={() => {
          setLocked(true), setClickedNumberOfStars(i);
        }}
        _hover={{ cursor: locked ? '' : 'pointer' }}
        onMouseOver={() => {
          if (!locked) setNumberOfStars(i);
        }}
        key={i}
      />
    );
    starArray.push(starFragment);
  }
  return (
    <Flex flexDirection="column" gap="5" width="100%" overflow="hidden">
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
        <Flex
          flexDirection="row"
          width="40%"
          gap="1"
          onMouseLeave={() => {
            setLocked(false), setNumberOfStars(clickedNumberOfStars);
          }}
        >
          {starArray}
        </Flex>
        <Button
          fontSize="sm"
          onClick={OnClickHandler}
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
