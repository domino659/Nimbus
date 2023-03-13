import { useAppSelector } from '../../hooks/reduxHooks';

export default function HideIfLogged({ children }) {
  const token = useAppSelector((state) => state.userConnected.token);

  if (token) {
    return <></>;
  }
  return children;
}
