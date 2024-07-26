import { StarIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface IStarReview {
  value: number;
  onChange?: (newValue: number) => void;
}

export const StarReview = ({ value, onChange }: IStarReview) => {
  const [locked, setLocked] = useState(false);
  const [hoveredNumberOfStars, setHoveredNumberOfStars] = useState(value);

  const noOfStars = !onChange ? value : locked ? value : hoveredNumberOfStars;
  const onClick = (index: number) => {
    if (onChange) onChange(index);
    setLocked(true);
  };

  const onHover = (index: number) => {
    setHoveredNumberOfStars(index);
  };

  console.log(value);
  console.log(noOfStars);
  let tempList = [];
  for (let i = 1; i <= 5; i++) {
    let buttonColor = 'gray';
    if (i <= noOfStars) buttonColor = 'white';
    else if (!onChange) buttonColor = 'transparent';
    tempList.push(
      <StarIcon
        data-testid="star-fragment"
        _hover={{ cursor: !onChange ? '' : 'pointer' }}
        color={buttonColor}
        width="15%"
        key={i}
        onClick={
          !onChange
            ? () => {}
            : () => {
                onClick(i);
              }
        }
        onMouseOver={
          !onChange
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
      width={!onChange ? '50%' : { base: '50%', lg: '20%' }}
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
