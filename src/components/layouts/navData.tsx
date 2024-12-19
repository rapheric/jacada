
export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }
  
  export const navigation: NavigationItem[] = [
    { name: 'JACADA VPN', href: '/', current: true },
    { name: 'VPN Protocols', href: '/vpn-protocol', current: false },
    { name: 'VPNs', href: '/vpns', current: false },
    { name: 'Create VPN', href: '/vpns/create', current: false },
    { name: 'Edit-VPN', href: '/vpns/edit/:id', current: false },
    // { name: 'Get Started', href: '/sign-up', current: false },
  ];
  
  export const profileMenuItems = [
    { label: 'Your Profile', href: '/profile' },
    { label: 'Settings', href: '/connection-settings' },
    { label: 'Sign out', href: '/home-page' },
  ];
  