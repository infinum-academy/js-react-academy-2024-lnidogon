'use client';
import { mutator } from '@/fetchers/mutators';
import { EmailIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { swrKeys } from '@/fetchers/swrKeys';
import { useRouter } from 'next/navigation';

interface IRegisterForm {
  email: string;
  password: string;
  password_confirmation: string;
}

export const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm<IRegisterForm>();
  const [errorMesssage, setErrorMessage] = useState('');
  const { trigger } = useSWRMutation(swrKeys.register, mutator<IRegisterForm>, {
    onSuccess: () => {
      router.push('/shows');
    },
  });
  const onRegister = async (data: IRegisterForm) => {
    if (
      errors.email != undefined ||
      errors.password != undefined ||
      errors.password_confirmation != undefined
    )
      return;
    await trigger(data);
  };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      backgroundColor={{ base: 'purple.500', lg: 'purple.700' }}
      height="100vh"
    >
      <Flex
        borderRadius={{ base: 0, lg: 'lgRadius' }}
        backgroundColor={{ base: 'transparent', lg: 'purple.500' }}
        width={{ base: '288px', lg: '494px' }}
        height={{ base: '100%', lg: '564px' }}
        direction="column"
        alignItems="center"
        id="register-form"
        as="form"
        gap="30px"
        py={10}
        onSubmit={handleSubmit(onRegister)}
      >
        <Heading
          color="white"
          size="md"
          marginBottom={8}
          fontSize="heading"
          fontWeight="bold"
        >
          TV shows APP
        </Heading>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="white" />}
            ml={{ base: 0, lg: '56px' }}
            fontSize="md"
          />
          <FormControl
            textColor="white"
            isInvalid={errors.email?.message != ''}
          >
            <Input
              isDisabled={isSubmitting}
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder="Email"
              type="email"
              _placeholder={{ color: 'white' }}
              size={{ base: 'sm', lg: 'md' }}
              data-testid="email"
              mx={{ base: '0', lg: '56px' }}
            />
            <FormErrorMessage color="error" mx={{ base: '0', lg: '80px' }}>
              {errors.email?.message}
            </FormErrorMessage>
          </FormControl>
        </InputGroup>
        <PasswordInput
          isDisabled={isSubmitting}
          error={errors.password?.message}
          {...register('password', {
            required: 'Password is required',
            validate: (value) => {
              return (
                value.length > 8 ||
                'Password must be at least 8 characters long'
              );
            },
          })}
          placeholder="Password"
          testId="password"
        />
        <PasswordInput
          isDisabled={isSubmitting}
          error={errors.password_confirmation?.message}
          {...register('password_confirmation', {
            required: 'Please confirm your password',
            validate: (value) => {
              return value == getValues('password') || 'Passwords do not match';
            },
          })}
          placeholder="Confirm password"
          testId="password-confirmation"
        />
        {errorMesssage && (
          <Text color="error" fontSize="smallCaption">
            {errorMesssage}
          </Text>
        )}
        <Button
          type="submit"
          isLoading={isSubmitting}
          loadingText="Registering"
          width="144px"
        >
          SIGN UP
        </Button>
        <Flex flexDirection="row" color="white" gap={1} fontSize="xs">
          <Text fontSize="smallCaption"> Already have an account? </Text>
          <Text
            as={NextLink}
            href="/login"
            fontSize="smallCaption"
            fontWeight="bold"
          >
            Log in
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
  //
};
