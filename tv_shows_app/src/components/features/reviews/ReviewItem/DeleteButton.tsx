import { IconButton } from '@chakra-ui/react';
import { IRemoveReviewParams, IReview } from '../ReviewItem';
import { DeleteIcon } from '@chakra-ui/icons';

interface IDeleteButtonProps {
  review: IReview;
  removeReview: (params: IRemoveReviewParams) => {};
}

export const DeleteButton = ({ review, removeReview }: IDeleteButtonProps) => {
  const onClickHandler = () => {
    removeReview({
      id: review.id,
    });
  };
  return (
    <>
      {localStorage.getItem('tv-shows-uid') == review.user?.id + '' ? (
        <IconButton
          backgroundColor="orange.100"
          _hover={{ backgroundColor: 'red.300' }}
          marginLeft="auto"
          aria-label="Delete review"
          size="sm"
          icon={<DeleteIcon />}
          onClick={onClickHandler}
        />
      ) : (
        <></>
      )}
    </>
  );
};
