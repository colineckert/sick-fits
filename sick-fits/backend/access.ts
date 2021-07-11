import { ListAccessArgs } from './types';
// at it's simplest, access control returns a yes or no value
// depending on the user's session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}
