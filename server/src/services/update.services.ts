import prisma from '../utils/prisma.utlis';
import { UserType } from '../utils/type.utlis';

export const updateUserByName = async (
  name: string,
  data: Partial<UserType>,
) => {
  try {
    // Attempt to update the user where the name matches
    const result = await prisma.user.updateMany({
      where: { name }, // Update by name
      data, // New data to update
    });
    return result;
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error updating user in Prisma:', error.message);
      throw new Error(`Failed to update user: ${error.message}`);
    } else {
      // Handle unexpected error types
      throw new Error('An unknown error occurred while updating user');
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('updateUserByName function executed');
  }
};
