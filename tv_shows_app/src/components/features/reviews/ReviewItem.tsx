import { Flex, Text } from "@chakra-ui/react";
import { StarReview } from "./StarReview";

export interface IReview{
    email: string,
    avatarUrl: string, 
    comment: string,
    rating: number
}

interface IReviewItemProps {
    review: IReview
}

export const ReviewItem = ({review}: IReviewItemProps) => {
    return (
        <Flex
            fontSize={"17"}
            backgroundColor={"pink.800"}
            color={"white"}
            borderRadius={"8"}
            padding={"5"}
            flexDirection={"column"}
            gap={"2"}
            >
              <Text>
                {review.comment}
              </Text>
                {review.rating} / 5
              <Text>
             </Text> 
             <StarReview noOfStars={review.rating}/>
        </Flex>


    );
}


