import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  tone = 'default',
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  tone?: 'default' | 'flame' | 'leaf' | 'gold';
}) {
  const tones = {
    default: 'bg-secondary text-foreground',
    flame: 'bg-orange-500/12 text-orange-600 dark:text-orange-400',
    leaf: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
    gold: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  } as const;

  return (
    <Card>
      <CardContent className="flex items-start gap-3 p-4">
        <span className={cn('grid size-10 shrink-0 place-items-center rounded-xl', tones[tone])}>
          <Icon className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
            {label}
          </p>
          <p className="font-display mt-0.5 truncate text-2xl font-bold tabular-nums leading-tight">
            {value}
          </p>
          {hint && <p className="text-muted-foreground mt-0.5 text-xs">{hint}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
