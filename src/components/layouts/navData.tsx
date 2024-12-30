
export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }
  
  export const navigation: NavigationItem[] = [
    { name: 'JACADA VPN', href: '/', current: true },
    // { name: 'VPN Protocols', href: '/vpn-protocol', current: false },
    { name: 'VPNs', href: '/vpns', current: false },
    { name: 'Create VPN', href: '/', current: false },
    { name: 'Edit-VPN', href: '/vpn-peers', current: false },
    { name: 'Set Up key', href: '/control', current: false },
    { name: 'acess', href: '/access-control', current: false },
  ];
  
  export const profileMenuItems = [
    { label: 'Your Profile', href: '/profile' },
    { label: 'Settings', href: '/connection-settings' },
    { label: 'Sign out', href: '/home-page' },
  ];
  