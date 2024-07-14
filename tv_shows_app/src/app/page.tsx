"use client";

import { IReview, ReviewItem } from "@/components/features/reviews/ReviewItem";
import { ReviewList } from "@/components/features/reviews/ReviewList";
import { StarReview } from "@/components/features/reviews/StarReview";
import { ReviewForm } from "@/components/features/shows/ReviewForm";
import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection";
import {
  background,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { stringify } from "querystring";
import { useState, useEffect } from "react";

export default function Home() {
  let tempList = [
    { email: "", avatarUrl: "", rating: 3, comment: "Dobar film :D" },
    { email: "", avatarUrl: "", rating: 4, comment: "Loš film >:(" },
  ];
  const [reviews, setReviews] = useState(tempList);
  useEffect(() => {
    const loadedList = loadFromLocalStorage();
    setReviews(loadedList);
  }, []);

  const loadFromLocalStorage = () => {
    const lsValue = localStorage.getItem("infinum-reviews");
    if (!lsValue) return tempList;
    return JSON.parse(lsValue);
  };
  const saveToLocalStorage = (newList: IReview[]) => {
    localStorage.setItem("infinum-reviews", JSON.stringify(newList));
  };
  function onAdd(review: IReview) {
    const newList = [...reviews, review];
    setReviews(newList);
    saveToLocalStorage(newList);
    const reviewInput = document.getElementById(
      "review-input"
    ) as HTMLInputElement;
    reviewInput.value = "";
  }
  const onRemove = (review: IReview) => {
    let newList = reviews.filter((t) => t !== review);
    setReviews(newList);
    saveToLocalStorage(newList);
  };

  const avgRating = () => {
    if (reviews.length == 0) return 0;
    let sum = reviews
      .map((currReview) => currReview.rating)
      .reduce((acc, val) => acc + val);
    return Math.round((sum * 100) / reviews.length) / 100;
  };

  return (
    <main>
      <Box backgroundColor={"pink.900"} height={"auto"}>
        <Flex flexDirection={"column"} alignItems={"center"} gap={"8"}>
          <Heading
            color="white"
            fontWeight="700"
            fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
            fontSize="30"
          >
            TV shows APP
          </Heading>
          <ShowDetais
            show={{
              average_rating: avgRating(),
              title: "Friends",
              description:
                "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
              image_url:
                "https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg",
            }}
          />
          <ShowReviewSection
            reviews={reviews}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </Flex>
      </Box>
    </main>
  );
}
