import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import jwt_decode from 'jwt-decode';
import ITokenClaims from '../interfaces/token-claims.interface';

export const GetClaims = createParamDecorator(
  (data, context: ExecutionContext): ITokenClaims | null => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const authorization = request.get('Authorization');
    if (!authorization) return null;

    const token = authorization.split(' ')[1];
    if (!token) return null;

    const decoded: ITokenClaims = jwt_decode(token);
    if (!decoded) return null;

    return decoded;
  },
);
