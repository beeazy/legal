import { PRIVACY_POLICY } from '../utils/constants';
import { LegalDocument } from '../components/LegalDocument';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <LegalDocument document={PRIVACY_POLICY} />
    </div>
  );
} 