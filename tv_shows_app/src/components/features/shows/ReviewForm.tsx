import {
  Input,
  Button,
  Flex,
  Textarea,
  Image,
  Container,
} from "@chakra-ui/react";
import { IReview } from "../reviews/ReviewItem";
import { useState } from "react";

export interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  let starArray = [];
  let locked = false;
  const [selectedNumberOfStars, setNumberOfStars] = useState(0);

  const OnClickHandler = () => {
    const reviewInput = document.getElementById(
      "review-input"
    ) as HTMLInputElement;
    if (reviewInput.value == "" || selectedNumberOfStars == 0) return;
    onAdd({
      email: "",
      avatarUrl: "",
      comment: reviewInput.value,
      rating: selectedNumberOfStars,
    });
  };
  for (let i = 1; i <= 5; i++) {
    //znam da nije prikladno ali sviđa mi se ovo ime
    const starFragment = (
      <Image
        src={(i <= selectedNumberOfStars ? "filled" : "empty") + "-star.png"}
        width="15%"
        onClick={() => {
          locked = true;
        }}
        onMouseOver={() => {
          if (!locked) setNumberOfStars(i);
        }}
        key={i}
      />
    );
    starArray.push(starFragment);
  }

  return (
    <Flex flexDirection="column" gap="5" width="100%">
      <Textarea
        backgroundColor="orange.100"
        placeholder="Add review..."
        id="review-input"
        width="100%"
        fontSize="14"
        padding="5"
        height="70px"
        minHeight="70px"
        resize="vertical"
        borderRadius="7"
        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
      />
      <Flex
        flexDirection="row"
        width="40%"
        gap="1"
        onMouseLeave={() => {
          locked = false;
        }}
      >
        {starArray}
      </Flex>
      <Button
        onClick={OnClickHandler}
        width="16%"
        borderRadius="15px"
        _hover={{ backgroundColor: "green.300" }}
        backgroundColor="orange.100"
      >
        Post
      </Button>
    </Flex>
  );
};
