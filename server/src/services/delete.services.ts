import prisma from '../utils/prisma.utlis';
import { UserType } from '../utils/type.utlis';

export const deleteUser = async (data: UserType) => {
  const { name, age, salary, gender } = data;

  // Construct the dynamic 'where' condition based on provided fields
  const whereClause: any = {};

  if (name) whereClause.name = name;
  if (age) whereClause.age = age;
  if (salary) whereClause.salary = salary;
  if (gender) whereClause.gender = gender;

  try {
    if (Object.keys(whereClause).length === 0) {
      throw new Error('No valid fields provided to delete user');
    }

    // Attempt to delete the user with the specified dynamic condition
    const result = await prisma.user.deleteMany({
      where: whereClause,
    });

    return result;
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error deleting user in Prisma:', error.message);
      throw new Error(`Failed to delete user: ${error.message}`);
    } else {
      // Handle unexpected error types
      throw new Error('An unknown error occurred while deleting user');
    }
  } finally {
    // Optional: Cleanup, logging, or resource closing
    console.log('deleteUser function executed');
  }
};
