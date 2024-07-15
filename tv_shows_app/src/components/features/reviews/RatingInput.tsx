'use client';
import { Flex, Image } from '@chakra-ui/react';
import { useState } from 'react';

interface IRatingInputProps {
  setNumberOfStarsSelected: (x: number) => void;
}

export const RatingInput = ({
  setNumberOfStarsSelected,
}: IRatingInputProps) => {
  let starArray = [];
  const [clickedNumberOfStars, setClickedNumberOfStars] = useState(0);
  const [selectedNumberOfStars, setNumberOfStars] = useState(0);
  const [locked, setLocked] = useState(false);

  for (let i = 1; i <= 5; i++) {
    //znam da nije prikladno ali sviđa mi se ovo ime
    const starFragment = (
      <Image
        src={
          '/' + (i <= selectedNumberOfStars ? 'filled' : 'empty') + '-star.png'
        }
        width="20px"
        maxWidth="15%"
        onClick={() => {
          setLocked(true), setClickedNumberOfStars(i);
        }}
        _hover={{ cursor: locked ? '' : 'pointer' }}
        onMouseOver={() => {
          if (!locked) {
            setNumberOfStars(i);
            setNumberOfStarsSelected(i);
          }
        }}
        key={i}
      />
    );
    starArray.push(starFragment);
  }
  return (
    <Flex
      flexDirection="row"
      width="40%"
      gap="1"
      onMouseLeave={() => {
        setLocked(false), setNumberOfStars(clickedNumberOfStars);
        setNumberOfStarsSelected(clickedNumberOfStars);
      }}
      id="star-input"
    >
      {starArray}
    </Flex>
  );
};
