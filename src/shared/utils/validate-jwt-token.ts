import * as jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import * as util from 'util';
import dotenv from 'dotenv';
import { configService } from '../config/config.service';
dotenv.config();

export interface JWTTokenData {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  emails: string[];
  tfp: string;
  nonce: string;
  scp: string;
  azp: string;
  ver: string;
  iat: number;
  aud: string;
  exp: number;
  iss: string;
  nbf: number;
}

export const validateJWTToken = async (authToken): Promise<JWTTokenData[]> => {
  if (!authToken) throw new Error('Token missing');

  try {
    const token = authToken.replace('Bearer ', '');
    const decoded = jwt.decode(token, { complete: true });
    if (decoded === null) {
      throw new Error('Invalid token, could not be decoded');
    }
    //const payload = decoded.payload;
    const header = decoded.header;
    const kid = header.kid;
    // validate this token against azure key provider for B2C
    const jwksUri = `https://${configService.getValue('AZURE_B2C_DOMAIN')}/${configService.getValue('AZURE_TENANT_NAME')}.onmicrosoft.com/${configService.getValue('AZURE_POLICY_NAME')}/discovery/v2.0/keys`;
    const jwkClient = jwksClient({ jwksUri });
    const asyncGetSigningKeyFunction = util.promisify(jwkClient.getSigningKey);
    const key = await asyncGetSigningKeyFunction(kid);
    const cert = key.getPublicKey();
    const asyncVerify = util.promisify((token, cert, cb) =>
      jwt.verify(token, cert, (err, ...results) => cb(err, results)),
    );
    const results = (await asyncVerify(token, cert)) as JWTTokenData[];
    return results;
  } catch (e) {
    console.log(e);
    throw new Error('Could not validate token: ' + e);
  }
};
