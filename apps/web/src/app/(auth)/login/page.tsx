import { Card } from '@/components/ui/card';
import { LoginForm } from '@/components/forms/login-form';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#ccfbf1,transparent_35%),radial-gradient(circle_at_80%_0%,#bae6fd,transparent_32%),#f8fafc] px-4 py-10">
      <Card className="w-full max-w-md p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">NeuroFamilia AI</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Ingreso seguro</h1>
        <p className="mb-6 mt-1 text-sm text-slate-600">
          Plataforma digital para acompanamiento familiar y desarrollo integral.
        </p>
        <LoginForm />
      </Card>
    </main>
  );
}