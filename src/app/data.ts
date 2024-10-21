export type Feature = {
    'Money Back Guarantee'?: number;
    'Servers/Countries'?: {
        servers: number;
        countries: number;
    };
    'Kill switch'?: boolean;
    'Devices/license'?: number;
    'Mobile'?: string[];
};
export type VpnData = {
    vpn: string;
    logoName: string;
    logo: string;
    description?: string;
    top?: boolean;
    topdesc?: string;
    feature?: Feature
    href: string;
}

export const vpnData: VpnData[] = [
    {
        vpn: 'ExpressVPN',
        logoName: 'expressvpn-logo.png',
        logo: 'expressvpn.png',
        description: 'ExpressVPN, which is currently offering a 30-day free trial, is the ultimate choice for high-speed browsing. With it\'s military-grade encryption, you can rest assured that your internet activity will always remain private',
        top: true,
        topdesc: 'over 7000 people checked out expressvpn in the last month',
        feature: {
            'Money Back Guarantee': 30,
            'Servers/Countries': {
                servers: 3000,
                countries: 105
            },
            'Kill switch': true,
            'Devices/license': 8,
            'Mobile': ['iOS', 'Android']
        },
        href: 'expressvpn.com'
    },
    {
        vpn: 'CyberGhost',
        logoName: 'cyberghost-logo.png',
        logo: 'cyberghost.png',
        description: 'Thanks to a brilliant interface and lots of handy features, this VPN will make even the pickiest users happy, For desktop or mobile, Windows, Mac, or Linux, if you want to securely enjoy private browsing, CyberGhost is consistently impressive',
        top: false,
        feature: {
            'Money Back Guarantee': 45,
            'Servers/Countries': {
                servers: 11690,
                countries: 100
            },
            'Kill switch': true,
            'Devices/license': 7,
            'Mobile': ['iOS', 'Android']
        },
        href: 'cyberghostvpn.com'
    },
    {
        vpn: 'NordVPN',
        logoName: 'nordvpn-logo.png',
        logo: 'nordvpn.png',
        description: 'NordVPN offers decent value for money. Get a fast, secure, and affordable VPN with good global coverage',
        top: false,
        feature: {
            'Money Back Guarantee': 45,
            'Servers/Countries': {
                servers: 6293,
                countries: 111
            },
            'Kill switch': true,
            'Devices/license': 10,
            'Mobile': ['iOS', 'Android']
        },
        href: 'nordvpn.com'
    }
]
