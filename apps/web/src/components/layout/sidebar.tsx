'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Brain,
  FileText,
  HeartPulse,
  Home,
  Settings,
  Users,
  UserSquare2,
  UsersRound,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const items = [
  { href: '/dashboard', label: 'Inicio', icon: Home },
  { href: '/dashboard/personas', label: 'Personas', icon: UserSquare2 },
  { href: '/dashboard/familias', label: 'Familias', icon: UsersRound },
  { href: '/dashboard/expedientes', label: 'Expedientes', icon: FileText },
  { href: '/dashboard/mentores', label: 'Mentores', icon: Brain },
  { href: '/dashboard/growth', label: 'Growth', icon: HeartPulse },
  { href: '/dashboard/configuracion', label: 'Configuracion', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur lg:h-screen lg:w-72 lg:border-b-0 lg:border-r lg:px-5 lg:py-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 text-white">
          <Users className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">NeuroFamilia AI</p>
          <p className="text-sm text-slate-600">Plataforma clinica familiar</p>
        </div>
      </div>

      <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                active
                  ? 'bg-teal-600 text-white shadow-[0_8px_20px_rgba(13,148,136,0.35)]'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}