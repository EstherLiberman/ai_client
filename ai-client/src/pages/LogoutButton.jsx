'use client';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/redux/slices/userSlice';
import { Button } from '@/components/ui/button';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/login'); // ניתוב למסך התחברות
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      התנתק
    </Button>
  );
};

export default LogoutButton;
