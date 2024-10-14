import { RequestHandler } from 'express';
import { getUser } from '../services/find.services';

export const getUserHandler: RequestHandler = async (req, res) => {
  try {
    const { name, age, salary, gender } = req.body;

    // Attempt to retrieve the user by ID
    const user = await getUser({ name, age, salary, gender });

    // If user is found, return it in the response
    if (user) {
      res
        .status(200)
        .json({ message: 'user has been found successfully', user });
    } else {
      // Return a 404 status if the user is not found
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error retrieving user:', error.message);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Handle unexpected error types
      res
        .status(500)
        .json({ message: 'An unknown error occurred while retrieving user' });
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('getUserByIdHandler executed');
  }
};
