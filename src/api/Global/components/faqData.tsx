export interface FAQItem {
    question: string;
    answer: string;
  }

export const faqData: FAQItem[] = [
  {
    question: "Why do I need a VPN?",
    answer:
      "The most important reasons to use a VPN are to secure your online activity. When left unprotected, your private data, such as bank account information and credit card numbers, can fall into the wrong hands. A good VPN encrypts your data, so even if you connect to a public wi-fi network, your private data is guaranteed to be protected.",
  },
  {
    question: "How can I get the best price for a VPN?",
    answer: "To get the best price for a VPN, look for discounts, bundles, and seasonal offers from trusted VPN providers.",
  },
  {
    question: "How do I connect to a VPN?",
    answer: "You can connect to a VPN by downloading and installing a VPN application, logging in, and selecting a server location to connect.",
  },
  {
    question: "Can I set up a VPN on my smartphone?",
    answer: "Yes, most VPN providers offer apps for smartphones. Simply download the app from your app store, log in, and connect to a server.",
  },
];
