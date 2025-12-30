import { Button, Center, Stack, Text, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Center className='bg-gray-800' h="80vh">
      <Stack align="center" gap="md">
        <Title order={1} c="red">
          403 – Unauthorized 🚫
        </Title>

        <Text size="lg" c="dimmed">
          You don’t have permission to access this page.
        </Text>

        <Button color="yellow" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Stack>
    </Center>
  );
};

export default UnauthorizedPage;
