'use client';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { fetcher } from '@/fetchers/fetcher';
import { swrKeys } from '@/fetchers/swrKeys';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { IReview } from '../../reviews/ReviewItem/ReviewItem';
import { ChangeEvent, SetStateAction, useEffect, useState } from 'react';
import { BlockList } from 'net';

export const MyProfileContainer = () => {
  const { data } = useSWR<{ user: IUser }>(
    swrKeys.me,
    async () => await fetcher<{ user: IUser }>(swrKeys.me)
  );

  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >();

  useEffect(() => {
    setSelectedImage(undefined);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(undefined);
    }
  };
  if (!data) return <LoadingScreen />;
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      backgroundColor="darkPurple"
      gap="39px"
    >
      <Flex flexDirection="column" alignItems="center">
        <Text textStyle="smallCaption" color="white">
          EMAIL
        </Text>
        <Text textStyle="subtitle" color="white">
          {data.user.email}
        </Text>
      </Flex>
      {!selectedImage ? (
        <InputGroup
          width="600px"
          height="400px"
          backgroundColor="purple2"
          borderRadius="20px"
          padding="0"
          margin="0"
          border="dashed"
          borderColor="lightPurple"
          transform="unset"
        >
          <Input
            type="file"
            width="600px"
            height="400px"
            opacity="0"
            onChange={handleChange}
          />
        </InputGroup>
      ) : (
        <>
          <Box w="260px" h="260px" borderRadius="full" overflow="hidden">
            <Image
              src={selectedImage as string}
              alt="profile picture"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Button w="202px" variant="default">
            UPLOAD IMAGE
          </Button>
        </>
      )}
    </Flex>
  );
};
