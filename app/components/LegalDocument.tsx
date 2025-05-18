import { type LegalDocument } from '../utils/constants';

interface LegalDocumentProps {
  document: LegalDocument;
}

export function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <article className="max-w-3xl mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">{document.title}</h1>
      <p className="text-gray-600 mb-8">Last updated: {document.lastUpdated}</p>
      
      {document.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <div className="space-y-2">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
} 