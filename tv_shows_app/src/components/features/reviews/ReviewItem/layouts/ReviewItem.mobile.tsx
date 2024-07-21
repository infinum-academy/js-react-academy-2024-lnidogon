import {
  Button,
  Flex,
  IconButton,
  Text,
  Image,
  Container,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { StarReview } from '../../StarReview';
import { ChevronDownIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import useSWRMutation from 'swr/mutation';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { deleteReviewMutator } from '@/fetchers/mutators';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { EditReviewSection } from '../EditReviewSection/EditReviewSection';

export interface IReview {
  comment: string;
  rating: number;
  id: number;
  show_id: number;
  user: IUser;
}

export interface IRemoveReviewParams {
  id: number;
}

export interface IReviewItemProps {
  review: IReview;
}

export const ReviewItemMobile = ({ review }: IReviewItemProps) => {
  const isMyReview =
    review.user.id == -1 ||
    localStorage.getItem('tv-shows-uid') == review.user?.id + '';
  return (
    <Flex
      height="120px"
      width="344px"
      backgroundColor="purple2"
      color="white"
      borderRadius="20px"
      padding="24px"
      flexDirection="column"
      gap="2"
    >
      <Flex gap="24px">
        <Image
          borderRadius="full"
          src={review.user.image_url}
          alt="profilna"
          fallbackSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          width="40px"
          height="40px"
        />
        <Flex
          flexDirection="column"
          fontSize="xs"
          width="20%"
          height="fit-content"
          minWidth="fit-content"
        >
          <Text textStyle="note"> {review.user.email} </Text>
          <Flex flexDirection="row" alignItems="center" gap="1">
            <Text textStyle="note">{review.rating}/5</Text>
            <Box width="50%">
              <StarReview
                noOfStars={review.rating}
                isStatic={true}
                onChange={() => {}}
                onHover={() => {}}
              />
            </Box>
          </Flex>
        </Flex>
        {isMyReview ? (
          <Flex marginLeft="auto" direction="row" gap="3">
            <Menu size="xs">
              <MenuButton
                as={Button}
                width="24px"
                height="24px"
                bg="purple2"
                color="white"
                _hover={{ bg: 'purple2' }}
              >
                ⋮
              </MenuButton>
              <MenuList
                minW="0"
                w="128px"
                height="82px"
                p="0"
                borderRadius="8px"
                overflow="hidden"
              >
                <MenuItem w="128px" h="41px">
                  <EditReviewSection review={review} />
                </MenuItem>
                <MenuItem w="128px" h="41px">
                  <DeleteButton review={review} />
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
      <Text fontSize="xs">{review.comment}</Text>
    </Flex>
  );
};
