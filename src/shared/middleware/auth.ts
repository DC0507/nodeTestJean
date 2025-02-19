import { validateJWTToken } from '../utils/validate-jwt-token';

export const authMiddleware = async (context, req) => {
  const token = req.headers.get('authorization');

  if (!token) {
    throw new Error('Access token is missing');
  }

  const identities = await validateJWTToken(token);
  context.extraInputs.set('user', identities[0]);
};
