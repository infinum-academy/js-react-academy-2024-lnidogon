import { Flex, Heading } from "@chakra-ui/react";
import { IReview } from "../reviews/ReviewItem";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "../reviews/ReviewList";
import next from "next";

interface IShowReviewSectionProps {
  reviews: Array<IReview>;
  onAdd: (review: IReview) => void;
  onRemove: (review: IReview) => void;
}

export const ShowReviewSection = ({
  reviews,
  onAdd,
  onRemove,
}: IShowReviewSectionProps) => {
  return (
    <Flex flexDirection="column" gap="7" width="50%" maxWidth="500px">
      <Heading
        color="white"
        fontWeight="700"
        fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        fontSize="30"
      >
        Reviews
      </Heading>
      <ReviewForm onAdd={onAdd} />
      <ReviewList reviews={reviews} onRemove={onRemove} />
    </Flex>
  );
};
