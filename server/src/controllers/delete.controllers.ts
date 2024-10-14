import { RequestHandler } from 'express';
import { deleteUser } from '../services/delete.services';

export const deleteUserHandler: RequestHandler = async (req, res) => {
  try {
    const { name, age, salary, gender } = req.body;

    // Attempt to delete the user with the provided ID
    const user = await deleteUser({ name, age, salary, gender });

    // Send a 204 No Content response if successful
    res.status(201).json({ message: 'user successfully get deleted ', user });
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error deleting user:', error.message);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Handle unexpected error types
      res
        .status(500)
        .json({ message: 'An unknown error occurred while deleting user' });
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('deleteUserHandler executed');
  }
};
