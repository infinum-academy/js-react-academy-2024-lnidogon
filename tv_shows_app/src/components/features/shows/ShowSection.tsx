import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { ShowDetais } from './ShowDetails';
import { IReview } from '../reviews/ReviewItem';
import { useEffect, useState } from 'react';
import { ShowReviewSection } from './ShowReviewSection';
import { IShow } from '@/typings/show';

interface IShowSection {
  show: IShow;
}

export const ShowSection = ({ show }: IShowSection) => {
  let tempList = [
    { email: '', avatarUrl: '', rating: 3, comment: 'Dobar film :D' },
    { email: '', avatarUrl: '', rating: 4, comment: 'Loš film >:(' },
  ];
  const [reviews, setReviews] = useState(tempList);
  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviews(loadedList);
  }, []);

  const loadFromLocalStorage = () => {
    console.log(show.id);
    const lsValue = localStorage.getItem('infinum-reviews-' + show.id);
    if (!lsValue) return tempList;
    return JSON.parse(lsValue);
  };
  const saveToLocalStorage = (newList: IReview[]) => {
    localStorage.setItem('infinum-reviews-' + show.id, JSON.stringify(newList));
  };
  function onAdd(review: IReview) {
    const newList = [...reviews, review];
    setReviews(newList);
    saveToLocalStorage(newList);
  }
  const onRemove = (review: IReview) => {
    let newList = reviews.filter((t) => t !== review);
    setReviews(newList);
    saveToLocalStorage(newList);
  };

  const calcAvgRating = () => {
    if (reviews.length == 0) return 0;
    let sum = reviews
      .map((currReview) => currReview.rating)
      .reduce((acc, val) => acc + val);
    return Math.round((sum * 100) / reviews.length) / 100;
  };
  const avgRating = calcAvgRating();
  return (
    <Box backgroundColor="pink.900" height="100%" padding="4">
      <Flex flexDirection="column" alignItems="center" gap="5">
        <ShowDetais show={show} />
        <ShowReviewSection
          reviews={reviews}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </Flex>
    </Box>
  );
};
