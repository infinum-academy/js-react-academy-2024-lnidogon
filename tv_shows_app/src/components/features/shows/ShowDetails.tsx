import { Flex, Image, Text} from "@chakra-ui/react"

interface IShowDetailsProps {
    avgRating: number
}

export const ShowDetais = ({avgRating}: IShowDetailsProps) => {
    return <Flex
            width={"50%"}
            maxWidth={"500px"}
            flexDirection={"column"}  
            borderRadius={"7"}
            overflow={"hidden"}   
            fontFamily={"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}       
            >
        <Image
            src={"https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg"} 
            alt={"slika nije učitana"}
            fallbackSrc={"https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("}
            width={"100%"}/>
        <Flex
            flexDirection={"column"}
            gap={"3"}
            color={"black"}
            backgroundColor={"wheat"}
            padding={"5"}
            >
            <Text
                fontSize={"30"}
                fontWeight={"700"}>
                Friends
            </Text>
            <Text
                fontSize={"15"}>
                Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.   
            </Text>
            <Text
                fontSize={"20"}
                as={"u"}>
                    
               {avgRating==undefined?`no ratings`:avgRating + `/5`}
            </Text>
        </Flex>
    </Flex>

}