import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        title="Click to log out"
        onClick={() => dispatch(logOut())}
      >
        <img
          className={css.icon}
          src={'assets/logoutIconRed.png'}
          alt="Log out"
        />
      </button>
    </div>
  );
};
