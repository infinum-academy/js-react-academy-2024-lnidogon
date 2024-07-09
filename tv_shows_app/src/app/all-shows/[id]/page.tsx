'use client';

import { IReview, ReviewItem } from '@/components/features/reviews/ReviewItem';
import { ReviewList } from '@/components/features/reviews/ReviewList';
import { StarReview } from '@/components/features/reviews/StarReview';
import { ReviewForm } from '@/components/features/shows/ReviewForm';
import { ShowDetais } from '@/components/features/shows/ShowDetails';
import { ShowReviewSection } from '@/components/features/shows/ShowReviewSection';
import { ShowSection } from '@/components/features/shows/ShowSection';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { background, Box, Container, Flex, Text } from '@chakra-ui/react';
import { stringify } from 'querystring';
import { useState, useEffect } from 'react';

export default function SpecificShow() {
  return (
    <main>
      <Flex height="100vh">
        <Box width="15%">
          <SidebarNavigation />
        </Box>
        <Box width="85%">
          <ShowSection />
        </Box>
      </Flex>
    </main>
  );
}
