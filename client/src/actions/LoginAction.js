// action types
export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = ( userInfo ) => {
  return {
    type: LOGIN_ACTION,
    isLogin: true,
    payload: {
      id: userInfo[0].id,
      userId: userInfo[0].userId,
      userNickName: userInfo[0].userNickName,
      userImage: userInfo[0].userImage
    }
  };
};
