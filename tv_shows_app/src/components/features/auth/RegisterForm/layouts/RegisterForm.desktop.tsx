'use client';
import { mutator } from '@/fetchers/mutators';
import { EmailIcon, LockIcon, RepeatIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { SuccessWindow } from '@/components/shared/auth/SuccessWindow';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { swrKeys } from '@/fetchers/swrKeys';
import { useRouter } from 'next/navigation';

interface IRegisterForm {
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterFormDesktop = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IRegisterForm>();
  const [errorMesssage, setErrorMessage] = useState('');
  const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegisterForm>, {
    onSuccess: () => {
      router.push('/shows');
    },
  });
  const onRegister = async (data: IRegisterForm) => {
    if (data.password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
      return;
    }
    if (data.password != data.password_confirmation) {
      setErrorMessage('Password mismatch');
      return;
    }
    await trigger(data);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="4"
      backgroundColor="darkPurple"
      height="100vh"
    >
      <Flex
        backgroundColor="purple2"
        width="494px"
        height="564px"
        direction="column"
        alignItems="center"
        as="form"
        gap="30px"
        py="10"
        borderRadius="10"
        onSubmit={handleSubmit(onRegister)}
      >
        <Heading color="white" size="md" marginBottom="8" textStyle="heading">
          TV shows APP
        </Heading>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="white" />}
            ml="56px"
            fontSize="md"
          />
          <FormControl textColor="white">
            <Input
              isDisabled={isSubmitting}
              {...register('email')}
              placeholder="Email"
              type="email"
              _placeholder={{ color: 'white' }}
              size="md"
              data-testid="email"
            />
          </FormControl>
        </InputGroup>
        <PasswordInput
          disable={isSubmitting}
          thatPart={register('password')}
          placeholder="Password"
          testId="password"
        />
        <PasswordInput
          disable={isSubmitting}
          thatPart={register('password_confirmation')}
          placeholder="Confirm password"
          testId="password-confirmation"
        />
        {errorMesssage && (
          <Text color="error" fontSize="small">
            {errorMesssage}
          </Text>
        )}
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Registering"
          variant="default"
        >
          SIGN UP
        </Button>
        <Flex flexDirection="row" color="white" gap="1" fontSize="xs">
          <Text textStyle="smallCaption"> Already have an account? </Text>
          <Text as={NextLink} href="/login" textStyle="smallCaptionBold">
            Log in
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
  //
};
