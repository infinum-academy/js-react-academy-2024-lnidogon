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
import { StarReview } from '../StarReview';
import { ChevronDownIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';
import useSWRMutation from 'swr/mutation';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { deleteReviewMutator } from '@/fetchers/mutators';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { EditReviewSection } from './EditReviewSection/EditReviewSection';

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

export const ReviewItem = ({ review }: IReviewItemProps) => {
  const isMyReview =
    review.user.id == -1 ||
    localStorage.getItem('tv-shows-uid') == review.user?.id + '';
  return (
    <Flex
      height="104px"
      width="870px"
      backgroundColor="purple2"
      color="white"
      borderRadius="20px"
      paddingLeft="4"
      paddingRight="4"
      paddingBottom="2"
      paddingTop="2"
      flexDirection="row"
      gap="2"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        src={review.user.image_url}
        alt="profilna"
        fallbackSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        width="40px"
        height="40px"
        maxW="10%"
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
          <Box width="30%">
            <StarReview
              noOfStars={review.rating}
              isStatic={true}
              onChange={() => {}}
              onHover={() => {}}
            />
          </Box>
        </Flex>
      </Flex>
      <Text fontSize="xs">{review.comment}</Text>
      {isMyReview ? (
        <Flex marginLeft="auto" direction="row" gap="3">
          <Menu>
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
            <MenuList width="128px">
              <MenuItem width="128px">
                <EditReviewSection review={review} />
              </MenuItem>
              <MenuItem width="128px">
                <DeleteButton review={review} />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};
