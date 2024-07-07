'use client';

import { IReview, ReviewItem } from "@/components/features/reviews/ReviewItem";
import { ReviewList } from "@/components/features/reviews/ReviewList";
import { StarReview } from "@/components/features/reviews/StarReview";
import { ReviewForm } from "@/components/features/shows/ReviewForm";
import { ShowDetais } from "@/components/features/shows/ShowDetails";
import { ShowReviewSection } from "@/components/features/shows/ShowReviewSection";
import { SmallTitle } from "@/components/shared/Titles/SmallTitle";
import { background, Box, Container, Flex, Text} from "@chakra-ui/react";
import { Contrail_One } from "next/font/google";


export default function Home() {
  let tempList = [
    {email:"", avatarUrl:"", rating:3, comment:"Dobar film :D"},
    {email:"", avatarUrl:"", rating:4, comment:"Loš film >:("}

  ]
  const OnAdd = (review: IReview) => {
    console.log(review.comment);
  }
  const OnRemove = (review: IReview) => {
    console.log(review.comment);
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
        <ShowReviewSection reviews={tempList} onAdd={OnAdd} onRemove={OnRemove}/>         
        </Flex>
      </Box>
    </main>
  );
}
