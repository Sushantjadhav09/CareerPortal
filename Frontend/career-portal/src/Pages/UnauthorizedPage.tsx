import { Button, Center, Stack, Text, Title, Box } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Center h="80vh">
      <Box
        bg="dark.7"
        p="xl"
        w={520}
        style={{ textAlign: 'center' }}
      >
        <Stack gap="md" align="center">
          <IconLock size={64} color="gold" />

          <Title order={2}>
            This Page Isn’t Available For You🔒
          </Title>

          <Text size="md" c="dimmed">
            You’re logged in, but this page is meant for a different type of account.
          </Text>

          <Text size="sm" c="dimmed">
            If you believe this is a mistake, please switch accounts or go back to the home page.
          </Text>

          <Button
            color="yellow"
            fullWidth
            mt="md"
            onClick={() => navigate('/')}
          >
            Go to Home
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default UnauthorizedPage;
