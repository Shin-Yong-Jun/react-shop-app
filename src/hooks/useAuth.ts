import { useAppSelector } from "./redux";

export function useAuth() {
  const {id, email, token} = useAppSelector((state) => state.userSlice);

  return {
    isAuth: !!email, // 이메일이 상태에 있으면 true 반환시킨다.
    email,
    id,
    token
  }
}