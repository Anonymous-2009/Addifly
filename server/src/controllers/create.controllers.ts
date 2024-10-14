import { RequestHandler } from 'express';
import { createUser } from '../services/create.services';

export const createUserHandler: RequestHandler = async (req, res) => {
  try {
    const { name, age, gender, salary } = req.body;

    // Call the service to create a user
    const user = await createUser({ name, age, gender, salary });

    // Send a success response with the created user
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error: unknown) {
    // Narrow down the type of error to Error
    if (error instanceof Error) {
      console.error('Error creating user:', error.message);
      res
        .status(500)
        .json({ message: 'Internal Server Error', error: error.message });
    } else {
      // Handle unknown error types
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  } finally {
    // Optional cleanup or logging
    console.log('createUserHandler executed');
  }
};
