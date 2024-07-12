import { Flex, Image, Text } from "@chakra-ui/react";

interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetais = ({ show }: IShowDetailsProps) => {
  return (
    <Flex
      width="50%"
      maxWidth="500px"
      flexDirection="column"
      borderRadius="7"
      overflow="hidden"
      fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    >
      <Image
        src={show.image_url}
        alt="naslovnica showa"
        fallbackSrc="https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:("
        width="100%"
      />
      <Flex
        flexDirection="column"
        gap="3"
        color="black"
        backgroundColor="orange.100"
        padding="5"
      >
        <Text fontSize="30" fontWeight="700">
          {show.title}
        </Text>
        <Text fontSize="15">{show.description}</Text>
        <Text fontSize="20" textDecoration="underline">
          {!show.average_rating ? `no ratings` : show.average_rating + `/5`}
        </Text>
      </Flex>
    </Flex>
  );
};
