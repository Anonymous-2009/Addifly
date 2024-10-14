import prisma from '../utils/prisma.utlis';
import { UserType } from '../utils/type.utlis';

export const getUser = async (data: UserType) => {
  try {
    const { name, age, salary, gender } = data;

    // Construct the dynamic 'where' condition based on provided fields
    const whereClause: any = {};

    if (name) whereClause.name = name;
    if (age) whereClause.age = age;
    if (salary) whereClause.salary = salary;
    if (gender) whereClause.gender = gender;

    if (Object.keys(whereClause).length === 0) {
      throw new Error('No valid fields provided to find user');
    }

    const result = await prisma.user.findMany({
      where: whereClause,
    });

    if (!result) {
      throw new Error(`User with ID ${whereClause} not found`);
    }

    return result;
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error retrieving user from Prisma:', error.message);
      throw new Error(`Failed to retrieve user: ${error.message}`);
    } else {
      // Handle unexpected error types
      throw new Error('An unknown error occurred while retrieving user');
    }
  } finally {
    // Optional: Logging or resource cleanup
    console.log('getUserById function executed');
  }
};
