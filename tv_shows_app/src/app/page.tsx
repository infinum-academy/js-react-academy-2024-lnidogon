import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { Container, Flex, Text} from "@chakra-ui/react";
import { devNull } from "os";


export default function Home() {
  return (
    <main>

      <Flex
      flexDirection={"column"}
      alignItems={"center"}>
      <Text>
          TV shows APP
      </Text>
      <ShowDetais avgRating = {1}/>
      </Flex>
    </main>
  );
}
