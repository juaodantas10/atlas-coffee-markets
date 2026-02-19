import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { createUser, findUserByEmail } from '../models/userModel.js';

export async function registerUser({ name, email, password }) {
  const existingUser = findUserByEmail(email);
  if (existingUser) {
    throw new Error('E-mail já cadastrado.');
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = createUser({ name, email, passwordHash });
  return sanitizeUser(user);
}

export async function loginUser({ email, password }) {
  const user = findUserByEmail(email);
  if (!user) {
    throw new Error('Credenciais inválidas.');
  }

  const validPassword = await bcrypt.compare(password, user.passwordHash);
  if (!validPassword) {
    throw new Error('Credenciais inválidas.');
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email, name: user.name },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );

  return {
    token,
    user: sanitizeUser(user)
  };
}

function sanitizeUser(user) {
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}
