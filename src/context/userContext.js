import { createContext } from 'react';

const UserContext = createContext({ user: undefined, jwt: undefined });

export default UserContext;
