import { Zap } from 'lucide-react';
import { Logo } from './Logo';

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="space-y-2">
          <Logo />
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            Move. Earn. Save. Thrive. Accessible micropayments and financial
            resilience for African mobility.
          </p>
        </div>

        <div className="text-muted-foreground flex flex-col items-center gap-2 text-sm md:items-end">
          <p className="inline-flex items-center gap-1.5">
            <Zap className="size-3.5 text-amber-500" aria-hidden />
            Hackathon prototype — Lightning settlement simulated, records anchored
            on Nostr.
          </p>
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
          >
            Vibed with Shakespeare
          </a>
        </div>
      </div>
    </footer>
  );
}
