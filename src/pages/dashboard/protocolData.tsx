
 interface VPNProtocol {
  name: string;
  description: string;
  features: string[];
  useCases: string[];
  integrated: boolean;
}

const VpnProtocols: VPNProtocol[] = [
  {
    name: 'OpenVPN',
    description: 'An open-source protocol known for its high security and flexibility.',
    features: [
      'Strong encryption using OpenSSL',
      'Highly configurable',
      'Supports both TCP and UDP',
      'Widely supported across platforms',
    ],
    useCases: [
      'Secure corporate VPNs',
      'Bypassing geo-restrictions',
    ],
    integrated: true,
  },
//   {
//     name: 'IKEv2/IPsec',
//     description: 'A protocol offering a good balance between security and speed.',
//     features: [
//       'Fast reconnection capability',
//       'Strong encryption',
//       'Ideal for mobile devices',
//     ],
//     useCases: [
//       'Mobile users switching networks',
//       'General-purpose VPN use',
//     ],
//     integrated: true,
//   },
  {
    name: 'WireGuard',
    description: 'A modern, lightweight protocol that offers high performance and simplicity.',
    features: [
      'Minimal codebase for easier auditing',
      'Fast and efficient',
      'Uses state-of-the-art cryptography',
    ],
    useCases: [
      'High-speed gaming or streaming',
      'VPNs requiring minimal resource usage',
    ],
    integrated: true,
  },
  {
    name: 'L2TP/IPsec',
    description: 'A legacy protocol with encryption added through IPsec.',
    features: [
      'Better security than PPTP',
      'Widely supported on older devices',
      'Easy setup',
    ],
    useCases: [
      'Older systems needing basic VPN functionality',
    ],
    integrated: false,
  },
];

export default VpnProtocols