import {
  Bus,
  Car,
  CircleHelp,
  Motorbike,
  SquareParking,
  Wifi,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceType } from '@/lib/satoride';
import { cn } from '@/lib/utils';

const ICONS: Record<ServiceType, LucideIcon> = {
  matatu: Bus,
  boda: Motorbike,
  taxi: Car,
  parking: SquareParking,
  charging: Zap,
  wifi: Wifi,
  other: CircleHelp,
};

const COLORS: Record<ServiceType, string> = {
  matatu: 'bg-orange-500/12 text-orange-600 dark:text-orange-400',
  boda: 'bg-emerald-500/12 text-emerald-600 dark:text-emerald-400',
  taxi: 'bg-sky-500/12 text-sky-600 dark:text-sky-400',
  parking: 'bg-violet-500/12 text-violet-600 dark:text-violet-400',
  charging: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  wifi: 'bg-cyan-500/12 text-cyan-600 dark:text-cyan-400',
  other: 'bg-muted text-muted-foreground',
};

export function ServiceIcon({
  type,
  className,
  iconClassName,
}: {
  type: ServiceType;
  className?: string;
  iconClassName?: string;
}) {
  const Icon = ICONS[type];
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center rounded-xl',
        COLORS[type],
        className ?? 'size-11',
      )}
    >
      <Icon className={iconClassName ?? 'size-5'} aria-hidden />
    </span>
  );
}
