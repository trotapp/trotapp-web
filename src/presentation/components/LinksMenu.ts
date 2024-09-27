export interface LinkItem {
    key: string;
    label: string;
    to: string;
    submenus?: LinkItem[];
}

export const linksMenu: LinkItem[] = [
    {
        key: 'home',
        label: 'Inicio',
        to: '/',
    },
    {
        key: 'download-app',
        label: 'Descargar App',
        to: '/download-app',
    },
    {
        key: 'about-us',
        label: 'Sobre nosotros',
        to: '/about-us',
    },
    {
        key: 'articles',
        label: 'Artículos',
        to: '/articles',
    },
    {
        key: 'opinions',
        label: 'Opiniones',
        to: '/opinions',
    },
];