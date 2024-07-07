import { Flex } from '@chakra-ui/react';
import { IReview, ReviewItem } from './ReviewItem';


interface IReviewsList {
    reviews: Array<IReview>   
}

export const ReviewList = ({reviews}: IReviewsList) => {
    return (
    <Flex
        flexDirection={"column"}
        gap={"8"}
        width={"50%"}
        maxWidth={"500px"}>
        {reviews.map((review, index)=> {
            return <ReviewItem key={"index"} review={review}/>;
        })}
    </Flex>
    );
}