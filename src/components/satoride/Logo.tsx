import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={cn('group inline-flex items-center gap-2.5', className)}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 shadow-md shadow-orange-900/20 transition-transform duration-300 group-hover:-rotate-6">
        <Zap className="size-5 fill-amber-100 text-amber-100" aria-hidden />
      </span>
      {!compact && (
        <span className="font-display text-xl font-bold tracking-tight">
          Sato<span className="text-primary">Ride</span>
        </span>
      )}
    </Link>
  );
}
