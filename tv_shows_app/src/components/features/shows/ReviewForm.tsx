import {
  Input,
  Button,
  Flex,
  Textarea,
  Image,
  Container,
  Text,
} from "@chakra-ui/react";
import { IReview } from "../reviews/ReviewItem";
import { useState } from "react";
import { StarReview } from "../reviews/StarReview";

export interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

export const ReviewForm = ({ onAdd }: IReviewFormProps) => {
  let starArray = [];
  const [locked, setLocked] = useState(false);
  const [selectedNumberOfStars, setSelectedNumberOfStars] = useState(0);
  const [hoveredNumberOfStars, setHoveredNumberOfStars] = useState(0);

  const onClickHandler = () => {
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
    setSelectedNumberOfStars(0);
  };
  const onClick = (index: number) => {
    setSelectedNumberOfStars(index);
  };
  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };
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
        width="100%"
        onMouseLeave={() => setLocked(true)}
        onMouseEnter={() => setLocked(false)}
      >
        <StarReview
          noOfStars={locked ? selectedNumberOfStars : hoveredNumberOfStars}
          isStatic={false}
          onChange={onClick}
          onHover={onHover}
        />
      </Flex>
      <Button
        onClick={onClickHandler}
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
