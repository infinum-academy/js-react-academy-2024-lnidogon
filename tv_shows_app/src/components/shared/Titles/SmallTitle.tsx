import { Text } from "@chakra-ui/react";

interface SmallTitleProps {
    content: string,
}


export const SmallTitle = ({content}: SmallTitleProps) => {
    return (
        <Text
            color={"white"}
            fontWeight={"700"}
            fontFamily={"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}
            fontSize={"30"}>
            {content}
        </Text>

    );

}