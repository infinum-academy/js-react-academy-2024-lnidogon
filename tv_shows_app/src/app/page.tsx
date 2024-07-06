import { StarReview } from "@/components/features/reviews/StarReview";
import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { SmallTitle } from "@/components/shared/Titles/SmallTitle";
import { background, Box, Container, Flex, Text} from "@chakra-ui/react";


export default function Home() {
  return (
  <main>
      <Box backgroundColor={"purple"}
      height={"100vh"}>
        <Flex
        flexDirection={"column"}
        alignItems={"center"}>
         <SmallTitle content="TV shows APP"/>
         <ShowDetais avgRating = {1}/>
         <StarReview noOfStars={1}/>
        </Flex>
      </Box>
    </main>
  );
}
