import {
  Input,
  Button,
  Flex,
  Textarea,
  Image,
  Container,
  Text,
  FormControl,
  Spinner,
} from '@chakra-ui/react';
import { IReview } from '../reviews/ReviewItem';
import { useState } from 'react';
import { setEngine } from 'crypto';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

export interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

interface IReviewFormInputs {
  comment: string;
  rating: number;
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  let starArray = [];
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IReviewFormInputs>({ defaultValues: { comment: '', rating: 0 } });
  const [clickedNumberOfStars, setClickedNumberOfStars] = useState(0);
  const [selectedNumberOfStars, setNumberOfStars] = useState(0);
  const [locked, setLocked] = useState(false);
  const onSubmitHandler = (data: IReviewFormInputs) => {
    if (data.rating == 0) return;
    onAdd({
      email: '',
      avatarUrl: '',
      comment: data.comment,
      rating: data.rating,
    });
    setClickedNumberOfStars(0);
    setNumberOfStars(0);
    setValue('rating', 0);
  };
  for (let i = 1; i <= 5; i++) {
    //znam da nije prikladno ali sviđa mi se ovo ime
    const starFragment = (
      <Image
        src={
          '/' + (i <= selectedNumberOfStars ? 'filled' : 'empty') + '-star.png'
        }
        width="20px"
        maxWidth="15%"
        onClick={() => {
          setLocked(true), setClickedNumberOfStars(i);
          setValue('rating', i);
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
          fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
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
            width="40%"
            gap="1"
            onMouseLeave={() => {
              setLocked(false);
              setNumberOfStars(clickedNumberOfStars);
            }}
            id="star-input"
          >
            {starArray}
          </Flex>
        </FormControl>
        <Button
          isDisabled={isSubmitting}
          type="submit"
          fontSize="sm"
          height="7"
          width="100px"
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
