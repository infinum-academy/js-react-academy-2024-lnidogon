import { Flex } from '@chakra-ui/react';
import { IReview, ReviewItem } from './ReviewItem';


interface IReviewsList {
    reviews: Array<IReview>,
    onRemove: (review: IReview) => void; 
}

export const ReviewList = ({reviews, onRemove}: IReviewsList) => {
    return (
    <Flex
        flexDirection={"column"}
        gap={"8"}
        width={"100%"}
        marginBottom={"3"}
        >        
        {reviews.map((review, index)=> {
            return <ReviewItem key={index} review={review} onRemove={onRemove}/>;
        })}
    </Flex>
    );
}