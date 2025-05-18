import Layout from '../components/Layout';
import { PRIVACY_POLICY } from '../utils/constants';

export default function PrivacyPolicy() {
  // Split the policy text into paragraphs
  const paragraphs = PRIVACY_POLICY.split('\n\n').filter(p => p.trim() !== '');
  
  return (
    <Layout title="T✓ App - Privacy Policy">
      <div className="max-w-3xl mx-auto my-8">
        <article className="prose lg:prose-xl mx-auto">
          {paragraphs.map((paragraph, index) => {
            // Check if this is a heading
            if (paragraph.trim() === 'Privacy Policy') {
              return <h1 key={index} className="text-3xl font-bold mb-6">{paragraph}</h1>;
            }
            
            // Check if this is a section heading (numbered items)
            if (/^\d+\.\s/.test(paragraph)) {
              return <h2 key={index} className="text-xl font-semibold mt-6 mb-4">{paragraph}</h2>;
            }
            
            // Check if this contains list items
            if (paragraph.includes('- ')) {
              const [listTitle, ...listItems] = paragraph.split('- ');
              return (
                <div key={index} className="mb-4">
                  {listTitle && <p>{listTitle}</p>}
                  <ul className="list-disc pl-6 mt-2">
                    {listItems.map((item, i) => (
                      <li key={i} className="mb-1">{item.trim()}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            
            // Regular paragraph
            return <p key={index} className="mb-4">{paragraph}</p>;
          })}
        </article>
      </div>
    </Layout>
  );
}