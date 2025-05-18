import { TERMS_OF_SERVICE } from '../utils/constants';
import { LegalDocument } from '../components/LegalDocument';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <LegalDocument document={TERMS_OF_SERVICE} />
    </div>
  );
} 