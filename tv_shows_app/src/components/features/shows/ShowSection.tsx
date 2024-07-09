import { Flex, Image, Text, Box } from '@chakra-ui/react';
import { ShowDetais } from './ShowDetails';
import { IReview } from '../reviews/ReviewItem';
import { useEffect, useState } from 'react';
import { ShowReviewSection } from './ShowReviewSection';

export const ShowSection = () => {
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
    const lsValue = localStorage.getItem('infinum-reviews');
    if (!lsValue) return tempList;
    return JSON.parse(lsValue);
  };
  const saveToLocalStorage = (newList: IReview[]) => {
    localStorage.setItem('infinum-reviews', JSON.stringify(newList));
  };
  function onAdd(review: IReview) {
    console.log('bruh');
    const newList = [...reviews, review];
    setReviews(newList);
    saveToLocalStorage(newList);
    const reviewInput = document.getElementById(
      'review-input'
    ) as HTMLInputElement;
    reviewInput.value = '';
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
    <Box backgroundColor="pink.900" height="auto" padding="4">
      <Flex flexDirection="column" alignItems="center" gap="3">
        <ShowDetais
          show={{
            averageRating: avgRating,
            title: 'Friends',
            description:
              'Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.',
            imageUrl:
              'https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg',
          }}
        />
        <ShowReviewSection
          reviews={reviews}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </Flex>
    </Box>
  );
};
