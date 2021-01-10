import UserRole from '../user/user-role.enum';

interface ITokenClaims {
  role: UserRole;
  uid: string;
}

export default ITokenClaims;
