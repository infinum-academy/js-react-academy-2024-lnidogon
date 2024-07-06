import { Container, Text } from "@chakra-ui/react";

interface IReview{
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
        <Container>
              <Text>
              </Text>
              <Text>
             </Text> 
        </Container>


    );
}


