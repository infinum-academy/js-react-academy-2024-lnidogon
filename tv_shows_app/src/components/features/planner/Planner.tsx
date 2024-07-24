'use client';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { PlannerStepper } from './components/PlannerStepper';
import { PlannerButtons } from './components/PlannerButtons';
import { useContext } from 'react';

export const Planner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} position="fixed" bottom="20px" right="40px">
        Planner
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="purple.300">
          <ModalHeader color="white">Planner</ModalHeader>
          <ModalBody>
            <PlannerStepper />
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
              <PlannerButtons />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
