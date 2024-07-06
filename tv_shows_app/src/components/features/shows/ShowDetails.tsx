import { Flex, Image, Text} from "@chakra-ui/react"

interface ShowDetailsProps {
    avgRating: number
}

export const ShowDetais = ({avgRating}: ShowDetailsProps) => {
    return <Flex
            width={"50%"}
            maxWidth={"500px"}
            flexDirection={"column"}
            >
        <Image
        src={"https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg"} alt={"slika nije učitana"}
        width={"100%"}/>
        <Flex>
            <Text>
                Friends
            </Text>
            <Text>
                Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.   
            </Text>
            <Text>
               {avgRating==undefined?`no ratings`:avgRating + `/5`}
            </Text>
        </Flex>
    </Flex>

}