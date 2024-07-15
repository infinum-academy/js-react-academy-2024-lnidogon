import { StarIcon } from '@chakra-ui/icons';
import { Container, Flex, Icon, Image } from '@chakra-ui/react';

interface IStarReview {
	noOfStars: number;
	isStatic: boolean;
	onChange: (index: number) => void;
	onHover: (index: number) => void;
}

export const StarReview = (starReview: IStarReview) => {
	let tempList = [];
	for (let i = 1; i <= 5; i++) {
		tempList.push(
			<StarIcon
				color={i <= starReview.noOfStars ? 'yellow' : 'gray'}
				width="15%"
				key={i}
				onClick={
					starReview.isStatic
						? () => {}
						: () => {
								starReview.onChange(i);
							}
				}
				onMouseOver={
					starReview.isStatic
						? () => {}
						: () => {
								starReview.onHover(i);
							}
				}
			/>
		);
	}
	return (
		<Flex flexDirection="row" gap="0" width="30%" marginTop="1" marginBottom="3">
			{tempList}
		</Flex>
	);
};
