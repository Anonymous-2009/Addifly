import prisma from '../utils/prisma.utlis';

export const getUsers = async () => {
  try {
    // Attempt to retrieve all users
    const result = await prisma.user.findMany();
    return result;
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error retrieving users from Prisma:', error.message);
      throw new Error(`Failed to retrieve users: ${error.message}`);
    } else {
      // Handle unexpected error types
      throw new Error('An unknown error occurred while retrieving users');
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('getUsers function executed');
  }
};
