import { Copy } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { QRCodeCanvas } from '@/components/ui/qrcode';
import { useToast } from '@/hooks/useToast';
import { serviceNaddr, type VehicleService } from '@/lib/satoride';

/** QR code passengers scan to open this service's payment page. */
export function VehicleQrDialog({
  service,
  open,
  onOpenChange,
}: {
  service: VehicleService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { toast } = useToast();
  if (!service) return null;

  const naddr = serviceNaddr(service);
  const url = `${window.location.origin}/${naddr}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: 'Payment link copied' });
    } catch {
      toast({ variant: 'destructive', title: 'Could not copy link' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display">Passenger payment QR</DialogTitle>
          <DialogDescription>
            Print this in the vehicle. Passengers scan → confirm → pay.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-2">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <QRCodeCanvas value={url} size={220} level="M" />
          </div>
          <div className="text-center">
            <p className="font-semibold">{service.name}</p>
            <p className="text-muted-foreground text-sm">
              {[service.plate, service.route].filter(Boolean).join(' · ')}
            </p>
          </div>
          <Button variant="secondary" className="w-full gap-1.5" onClick={copy}>
            <Copy className="size-4" aria-hidden />
            Copy payment link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
