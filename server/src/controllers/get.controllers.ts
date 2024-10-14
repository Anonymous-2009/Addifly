import { RequestHandler } from 'express';
import { getUsers } from '../services/get.services';

export const getUsersHandler: RequestHandler = async (_req, res) => {
  try {
    // Attempt to retrieve all users
    const users = await getUsers();

    // Return the users in the response
    res.status(200).json({ message: 'All users found successfully', users });
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error retrieving users:', error.message);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Handle unexpected error types
      res
        .status(500)
        .json({ message: 'An unknown error occurred while retrieving users' });
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('getUsersHandler executed');
  }
};
