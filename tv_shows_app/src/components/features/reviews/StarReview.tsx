import { StarIcon } from '@chakra-ui/icons';
import { Container, Flex, Icon, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { cursorTo } from 'readline';

interface IStarReview {
  isStatic: boolean;
  startNoOfStars: number;
  onChange: (newValue: number) => void;
}

export const StarReview = (starReview: IStarReview) => {
  const [locked, setLocked] = useState(false);
  const [selectedNumberOfStars, setSelectedNumberOfStars] = useState(
    starReview.startNoOfStars
  );
  const [hoveredNumberOfStars, setHoveredNumberOfStars] = useState(
    starReview.startNoOfStars
  );

  const noOfStars = starReview.isStatic
    ? starReview.startNoOfStars
    : locked
      ? selectedNumberOfStars
      : hoveredNumberOfStars;
  const onClick = (index: number) => {
    setSelectedNumberOfStars(index);
    starReview.onChange(index);
    setLocked(true);
  };

  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };

  let tempList = [];
  for (let i = 1; i <= 5; i++) {
    tempList.push(
      <StarIcon
        data-testid="star-fragment"
        _hover={{ cursor: starReview.isStatic ? '' : 'pointer' }}
        color={
          i <= noOfStars
            ? 'white'
            : starReview.isStatic
              ? 'transparent'
              : 'gray'
        }
        width="15%"
        key={i}
        onClick={
          starReview.isStatic
            ? () => {}
            : () => {
                onClick(i);
              }
        }
        onMouseOver={
          starReview.isStatic
            ? () => {}
            : () => {
                onHover(i);
              }
        }
      />
    );
  }
  return (
    <Flex
      flexDirection="row"
      width={starReview.isStatic ? '50%' : { base: '50%', lg: '20%' }}
      gap={1}
      onMouseEnter={() => {
        setLocked(false);
      }}
      onMouseLeave={() => {
        setLocked(true);
        setHoveredNumberOfStars(0);
      }}
      id="star-input"
    >
      <Flex
        flexDirection="row"
        gap="0"
        width="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {tempList}
      </Flex>
    </Flex>
  );
};
