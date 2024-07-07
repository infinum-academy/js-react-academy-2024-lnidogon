import { Input, Button, Flex, Textarea } from "@chakra-ui/react"
import { IReview } from "../reviews/ReviewItem";

export interface IReviewFormProps {
    onAdd: (review: IReview) => void
}



export const ReviewForm = ({onAdd}: IReviewFormProps) => {
    const OnClickHandler = () => {
        const reviewInput = document.getElementById("review-input") as HTMLInputElement;
        onAdd({email: "", avatarUrl: "", comment: reviewInput.value, rating: 1});
    };
    return (
        <Flex
        flexDirection={"column"}
        gap={"5"}
        width={"100%"}
        >
        <Textarea
        backgroundColor={"orange.100"}
        placeholder="Add review..."
        id = "review-input"
        width={"100%"}
        fontSize={"14"}
        padding={"5"}
        height={"70px"}
        minHeight={"70px"}
        resize={"vertical"}
        borderRadius={"7"}/>
        <Button
        onClick={OnClickHandler}
        width={"16%"}
        borderRadius={"20px"}
        > Post
        </Button>
        </Flex>
    );    
}