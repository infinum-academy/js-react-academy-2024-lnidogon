import { ReviewItem } from "@/components/features/reviews/ReviewItem";
import { ReviewList } from "@/components/features/reviews/ReviewList";
import { StarReview } from "@/components/features/reviews/StarReview";
import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { SmallTitle } from "@/components/shared/Titles/SmallTitle";
import { background, Box, Container, Flex, Text} from "@chakra-ui/react";


export default function Home() {
  let tempList = [
    {email:"", avatarUrl:"", rating:3, comment:"Dobar film :D"},
    {email:"", avatarUrl:"", rating:4, comment:"Loš film >:("}

  ]
  
  return (
  <main>
      <Box backgroundColor={"pink.900"}
      height={"auto"}>
        <Flex
        flexDirection={"column"}
        alignItems={"center"}>
         <SmallTitle content="TV shows APP"/>
         <ShowDetais avgRating = {1}/>
         <ReviewList reviews={tempList}/>
        </Flex>
      </Box>
    </main>
  );
}
