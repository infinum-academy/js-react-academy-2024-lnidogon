import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { background, Box, Container, Flex, Text} from "@chakra-ui/react";


export default function Home() {
  return (
  <main>
      <Box backgroundColor={"purple"}
          height={"100vh"}>
      <Flex
      flexDirection={"column"}
      alignItems={"center"}>
      <Text>
          TV shows APP
      </Text>
      <ShowDetais avgRating = {1}/>
      </Flex>
      </Box>
    </main>
  );
}
