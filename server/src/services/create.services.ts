import prisma from '../utils/prisma.utlis';
import { UserType } from '../utils/type.utlis';

export const createUser = async (data: UserType) => {
  try {
    // Attempt to create a user in the database
    const result = await prisma.user.create({ data });
    return result;
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error creating user in Prisma:', error.message);
      throw new Error(`Failed to create user: ${error.message}`);
    } else {
      // Handle unexpected error types
      throw new Error('An unknown error occurred while creating user');
    }
  } finally {
    // Optional: Cleanup, logging, or resource closing
    console.log('createUser function executed');
  }
};
