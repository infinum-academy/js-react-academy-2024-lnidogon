'use client';
import { PasswordInput } from '@/components/shared/auth/PasswordInput';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
import { EmailIcon } from '@chakra-ui/icons';
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
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

interface ILoginForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ILoginForm>();
  const { trigger } = useSWRMutation(swrKeys.login, mutator<ILoginForm>, {
    onSuccess: () => {
      router.push('/shows');
    },
  });
  const onLogin = async (data: ILoginForm) => {
    await trigger(data);
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
        backgroundColor={{ base: 'purple.500', lg: 'purple.700' }}
        height="100vh"
      >
        <Flex
          width={{ base: '288px', lg: '500px' }}
          height={{ base: '100%', lg: '500px' }}
          backgroundColor={{ base: 'transparent', lg: 'purple.500' }}
          direction="column"
          alignItems="center"
          as="form"
          gap="30px"
          py="10"
          borderRadius="lgRadius"
          onSubmit={handleSubmit(onLogin)}
          boxShadow={{ base: 'none', lg: 'sm' }}
        >
          <Heading fontSize="headline" size="md" marginBottom="8" color="white">
            TV shows APP
          </Heading>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="white" width="24px" />}
              fontSize="md"
              ml={{ base: 0, lg: '56px' }}
            />
            <FormControl
              textColor="white"
              isInvalid={errors.email?.message != ''}
            >
              <Input
                isDisabled={isSubmitting}
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
                type="email"
                color="white"
                _placeholder={{ color: 'white' }}
                size={{ base: 'sm', lg: 'md' }}
                data-testid="email"
                mx={{ base: 'auto', lg: '56px' }}
              />
              <FormErrorMessage color="error" mx={{ base: 'auto', lg: '80px' }}>
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>
          </InputGroup>
          <PasswordInput
            isDisabled={isSubmitting}
            error={errors.password?.message}
            {...register('password', { required: 'Password is required' })}
            placeholder="Password"
            testId="password"
          />
          <Button
            isLoading={isSubmitting}
            loadingText="Logging in"
            type="submit"
            width="144px"
            fontSize="button"
            fontWeight="bold"
          >
            LOG IN
          </Button>
          <Flex flexDirection="row" color="white" gap="1" fontSize="xs">
            <Text fontSize="smallCaption"> Don't have an account? </Text>
            <Text
              as={NextLink}
              href="/register"
              fontSize="smallCaptionBold"
              fontWeight="bold"
            >
              Register
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
