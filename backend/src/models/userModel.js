import crypto from 'node:crypto';

const users = [];

export function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

export function createUser({ name, email, passwordHash }) {
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    passwordHash,
    createdAt: new Date().toISOString()
  };

  users.push(user);
  return user;
}
