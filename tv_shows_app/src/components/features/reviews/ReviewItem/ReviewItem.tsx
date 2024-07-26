import {
  Button,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { StarReview } from '../StarReview';
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
      height={{ base: '120px', lg: '104px' }}
      width={{ base: '344px', lg: '870px' }}
      backgroundColor="purple.500"
      color="white"
      borderRadius="xlRadius"
      padding={{ base: '24px', lg: '4 4 2 2' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      gap={2}
    >
      <Flex
        gap={{ base: '24px', lg: 2 }}
        flexDirection={{ base: 'row', lg: 'row' }}
        alignItems={{ base: 'none', lg: 'center' }}
        width="100%"
      >
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
          <Text fontSize="note"> {review.user.email} </Text>
          <Flex flexDirection="row" alignItems="center" gap="1">
            <Text fontSize="note">{review.rating}/5</Text>
            <StarReview value={review.rating} />
          </Flex>
        </Flex>
        <Text fontSize="xs" hideBelow="lg">
          {review.comment}
        </Text>

        {isMyReview ? (
          <Flex marginLeft="auto" direction="row" gap={3}>
            <Menu size="xs">
              <MenuButton
                as={Button}
                width="24px"
                height="24px"
                bg="purple.500"
                color="white"
                _hover={{ bg: 'purple.500' }}
              >
                ⋮
              </MenuButton>
              <MenuList
                minW={0}
                w="128px"
                height="82px"
                p={0}
                borderRadius="smRadius"
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
      <Text fontSize="xs" hideFrom="lg">
        {review.comment}
      </Text>
    </Flex>
  );
};
