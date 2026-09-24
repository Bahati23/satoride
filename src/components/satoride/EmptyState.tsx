import type { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function EmptyState({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center gap-3 px-8 py-12 text-center">
        <p className="font-display text-lg font-semibold">{title}</p>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}
