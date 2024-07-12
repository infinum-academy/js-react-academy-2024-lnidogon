import { Button, Flex, Text } from "@chakra-ui/react";
import { StarReview } from "./StarReview";

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
  const onClickHandler = () => {
    onRemove(review);
  };
  return (
    <Flex
      fontSize="17"
      backgroundColor="pink.800"
      color="white"
      borderRadius="8"
      padding="5"
      flexDirection="column"
      gap="2"
    >
      <Text>{review.comment}</Text>
      <Text>{review.rating} / 5</Text>
      <StarReview
        noOfStars={review.rating}
        isStatic={true}
        onChange={() => {}}
        onHover={() => {}}
      />
      <Button
        width="18%"
        minWidth="fit-content"
        height="fit-content"
        padding="1"
        backgroundColor="orange.100"
        _hover={{ backgroundColor: "red.300" }}
        onClick={onClickHandler}
      >
        Remove
      </Button>
    </Flex>
  );
};
