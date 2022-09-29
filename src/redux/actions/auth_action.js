// reducer의 타입과 payload 서술
import { authService } from '@/firebase';

import { CLEAR_USER, SET_USER } from './types';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

export function setLogoutRequest() {
  return authService.signOut();
}
