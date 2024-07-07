import { Flex } from "@chakra-ui/react";
import { IReview } from "../reviews/ReviewItem";
import { SmallTitle } from "@/components/shared/Titles/SmallTitle";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "../reviews/ReviewList";
import next from "next";


interface IShowReviewSectionProps {
    reviews: Array<IReview>,
    onAdd: (review: IReview) => void,
    onRemove: (review: IReview) => void
}

export const ShowReviewSection = ({reviews, onAdd, onRemove}: IShowReviewSectionProps) => {
    return(
        <Flex
        flexDirection={"column"}
        gap={"7"}
        width={"50%"}
        maxWidth={"500px"}>
            <SmallTitle content="Reviews"/>
            <ReviewForm onAdd={onAdd}/>
            <ReviewList reviews={reviews} onRemove={onRemove}/>
        </Flex>
    );

}