import { nip19 } from 'nostr-tools';
import { useParams } from 'react-router-dom';
import { KIND_SERVICE } from '@/lib/satoride';
import { VehiclePayPage } from './VehiclePayPage';
import NotFound from './NotFound';

export function NIP19Page() {
  const { nip19: identifier } = useParams<{ nip19: string }>();

  if (!identifier) {
    return <NotFound />;
  }

  let decoded;
  try {
    decoded = nip19.decode(identifier);
  } catch {
    return <NotFound />;
  }

  const { type, data } = decoded;

  switch (type) {
    case 'naddr': {
      // SatoRide service listings open the passenger payment page
      // (this is what the vehicle QR codes point to).
      if (data.kind === KIND_SERVICE) {
        return <VehiclePayPage pubkey={data.pubkey} d={data.identifier} />;
      }
      return <NotFound />;
    }

    default:
      return <NotFound />;
  }
}
