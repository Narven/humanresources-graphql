import UserRole from '../user/user-role.enum';

interface ITokenClaims {
  iat: number;
  name: string;
  role: UserRole;
  sub: string;
  uid: string;
}

export default ITokenClaims;
