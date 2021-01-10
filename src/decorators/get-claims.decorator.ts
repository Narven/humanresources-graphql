import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import jwt_decode from 'jwt-decode';
import ITokenClaims from '../interfaces/token-claims.interface';
import UserRole from '../user/user-role.enum';

/**
 * This decorator users a raw away of extracting JWT, better approach
 * would be to use @nestjs-jwt package
 */

const defaultClaims: ITokenClaims = {
  uid: '',
  role: UserRole.User,
};

export const GetClaims = createParamDecorator(
  (data, context: ExecutionContext): ITokenClaims => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    const authorization = request.get('Authorization');
    if (!authorization) return defaultClaims;

    const token = authorization.split(' ')[1];
    if (!token) return defaultClaims;

    const decoded: ITokenClaims = jwt_decode(token);
    if (!decoded) return defaultClaims;

    return decoded;
  },
);
