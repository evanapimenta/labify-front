import { ENUM_PAGES } from '../core/helpers/enums';
import { IconUserComponent } from '../icons/icon-user';
import { IconMailComponent } from '../icons/icon-mail';
import { IconLockDotsComponent } from '../icons/icon-lock-dots';
import { IconCaretsDownComponent } from '../icons/icon-carets-down';
import { IconHomeComponent } from '../icons/icon-home';

export interface MenuItem {
    link: string;
    keys: string[];
    subItems?: MenuItem[];
    icon?: string;
    label: string;
}

export const ICON_REGISTRY: { [key: string]: any } = {
    'icon-user': IconUserComponent,
    'icon-mail': IconMailComponent,
    'icon-lock-dots': IconLockDotsComponent,
    'icon-carets-down': IconCaretsDownComponent,
    'icon-home': IconHomeComponent,
};

export const MENU_ITEMS: MenuItem[] = [
    {
        link: '/home',
        keys: [ENUM_PAGES.home],
        icon: 'icon-home',
        label: 'Início',
        subItems: [
            {
                link: '/teste',
                keys: [ENUM_PAGES.teste],
                icon: 'icon-mail',
                label: 'Teste',
            },
            {
                link: '/teste2',
                keys: [ENUM_PAGES.teste2],
                icon: 'icon-lock-dots',
                label: 'Teste 2',
            },
        ],
    },
];
