import { RequestHandler } from 'express';
import { updateUserByName } from '../services/update.services';

export const updateUserHandler: RequestHandler = async (req, res) => {
  try {
    const { findName } = req.body; // The name to identify the user
    const { name, age, gender, salary } = req.body; // Fields to update

    // Check if `name` is provided
    if (!findName) {
      res
        .status(400)
        .json({ message: 'find Name is required to update the user' });
    }

    // Attempt to update the user with the provided name and new data
    const user = await updateUserByName(findName, {
      name,
      age,
      gender,
      salary,
    });

    // Return the updated user in the response
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error: unknown) {
    // Check if the error is an instance of Error
    if (error instanceof Error) {
      console.error('Error updating user:', error.message);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Handle unexpected error types
      res
        .status(500)
        .json({ message: 'An unknown error occurred while updating user' });
    }
  } finally {
    // Optional: Logging or cleanup actions
    console.log('updateUserHandler executed');
  }
};
