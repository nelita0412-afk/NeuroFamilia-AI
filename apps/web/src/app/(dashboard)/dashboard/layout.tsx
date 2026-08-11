'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAccessToken } from '@/lib/storage';

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (!getAccessToken()) {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F7FBFD] text-slate-900">{children}</div>
  );
}