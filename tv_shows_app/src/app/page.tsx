'use client';

import { IReview, ReviewItem } from "@/components/features/reviews/ReviewItem";
import { ReviewList } from "@/components/features/reviews/ReviewList";
import { StarReview } from "@/components/features/reviews/StarReview";
import { ReviewForm } from "@/components/features/shows/ReviewForm";
import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection";
import { SmallTitle } from "@/components/shared/Titles/SmallTitle";
import { background, Box, Container, Flex, Text} from "@chakra-ui/react";
import { stringify } from "querystring";
import { useState, useEffect } from 'react';

export default function Home() {
  let tempList = [
    {email:"", avatarUrl:"", rating:3, comment:"Dobar film :D"},
    {email:"", avatarUrl:"", rating:4, comment:"Loš film >:("}

  ]
  const [reviews, setReviews] = useState(tempList);
  useEffect(()=>{
    const loadedList = loadFromLocalStorage();
    setReviews(loadedList);
  }, []);
  
  const loadFromLocalStorage = () => {
    const lsValue = localStorage.getItem('infinum-reviews');
    if(!lsValue)
      return tempList;
    return JSON.parse(lsValue);
  };
  const saveToLocalStorage = (newList: IReview[]) => {
    localStorage.setItem('infinum-reviews', JSON.stringify(newList));
  };
  function OnAdd(review: IReview) {
    const newList = [...reviews, review];
    console.log(newList);
    setReviews(newList);
    saveToLocalStorage(newList);
    const reviewInput = document.getElementById("review-input") as HTMLInputElement;
    reviewInput.value = "";
  }
  const OnRemove = (review: IReview) => {
    let newList = reviews.filter(t => t !== review);
    setReviews(newList);
    saveToLocalStorage(newList);
  }
  return (
  <main>
      <Box backgroundColor={"pink.900"}
      height={"auto"}>
        <Flex
        flexDirection={"column"}
        alignItems={"center"}
        gap={"8"}>
         <SmallTitle content="TV shows APP"/>
         <ShowDetais avgRating = {1}/>  
        <ShowReviewSection reviews={reviews} onAdd={OnAdd} onRemove={OnRemove}/>         
        </Flex>
      </Box>
    </main>
  );
}
