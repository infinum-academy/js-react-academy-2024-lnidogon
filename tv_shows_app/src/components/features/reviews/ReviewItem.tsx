import { Button, Flex, IconButton, Text, Image } from '@chakra-ui/react';
import { StarReview } from './StarReview';
import { DeleteIcon, SearchIcon } from '@chakra-ui/icons';

export interface IReview {
	email: string;
	avatarUrl: string;
	comment: string;
	rating: number;
}

interface IReviewItemProps {
	review: IReview;
	onRemove: (review: IReview) => void;
}

export const ReviewItem = ({ review, onRemove }: IReviewItemProps) => {
	const onClickHandler = () => {
		onRemove(review);
	};
	return (
		<Flex
			height="50px"
			backgroundColor="pink.800"
			color="white"
			borderRadius="8"
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
				src={review.avatarUrl}
				alt="profilna"
				fallbackSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
				width="30px"
				maxW="10%"
			/>
			<Flex flexDirection="column" fontSize="xs" width="20%" height="fit-content" minWidth="fit-content">
				<Text fontSize="10px"> {review.email} </Text>
				<Flex flexDirection="row" alignItems="center" gap="1">
					<Text>{review.rating} / 5</Text>
					<StarReview noOfStars={review.rating} isStatic={true} onChange={() => {}} onHover={() => {}} />
				</Flex>
			</Flex>
			<Text fontSize="xs">{review.comment}</Text>
			<IconButton marginLeft="auto" aria-label="Delete review" icon={<DeleteIcon />} onClick={onClickHandler} />
		</Flex>
	);
};
