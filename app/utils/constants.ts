export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    content: string[];
  }[];
}

export const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  lastUpdated: 'May 19, 2025',
  sections: [
    {
      title: 'Information We Collect',
      content: [
        'T✓ collects minimal data necessary for app functionality:',
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain the app\'s functionality',
        'To improve user experience'
      ]
    },
    {
      title: 'Data Storage',
      content: [
        'All data is stored locally on your device',
        'We use AsyncStorage for data persistence',
        'No data is transmitted to external servers'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'You can delete all app data by uninstalling the app',
        'You can manage app permissions through your device settings'
      ]
    },
    {
      title: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy in the app.'
      ]
    },
    {
      title: 'Contact Us',
      content: [
        'If you have any questions about this Privacy Policy, please contact the developer at earldonuts@gmail.com'
      ]
    }
  ]
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: 'Terms of Service',
  lastUpdated: 'May 19, 2025',
  sections: [
    {
      title: 'Acceptance of Terms',
      content: [
        'By using T✓, you agree to these terms of service.'
      ]
    },
    {
      title: 'Description of Service',
      content: [
        'T✓ is a task management application that helps users organize and track their tasks.'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'Use the app in compliance with all applicable laws',
        'Maintain the security of your device',
        'Use the app for its intended purpose'
      ]
    },
    {
      title: 'Pro Features',
      content: [
        'There are currently no premium features available.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'T✓ is provided "as is" without warranties of any kind.'
      ]
    },
    {
      title: 'Changes to Terms',
      content: [
        'We reserve the right to modify these terms at any time.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'We may terminate or suspend access to the app for violations of these terms.'
      ]
    },
    {
      title: 'Contact',
      content: [
        'For questions about these terms, contact the developer at earldonuts@gmail.com'
      ]
    }
  ]
};