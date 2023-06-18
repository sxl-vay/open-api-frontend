/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    currentUser: loginUser,
    canAdmin: loginUser?.userRole === 'admin' ,
  };
}
