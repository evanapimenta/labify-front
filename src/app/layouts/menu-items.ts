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
    link: '#',
    keys: [ENUM_PAGES.home],
    label: 'Início',
    subItems: [
      {
        link: '/',
        keys: [ENUM_PAGES.home],
        icon: 'icon-home',
        label: 'Bem-vindo',
      },
    ],
  },
  {
    link: '#',
    keys: [ENUM_PAGES.user],
    label: 'Meu Espaço',
    subItems: [
      {
        link: '/profile',
        keys: [ENUM_PAGES.profile],
        icon: 'icon-user',
        label: 'Perfil',
      },
      {
        link: '/exams',
        keys: [ENUM_PAGES.exams],
        icon: 'icon-user',
        label: 'Exames',
      },
    ],
  },
  {
    link: '#',
    keys: [ENUM_PAGES.management],
    label: 'Gerenciamento',
    subItems: [
        {
            link: '/laboratories',
            keys: [ENUM_PAGES.laboratories],
            icon: 'icon-user',
            label: 'Laboratórios',
        }
    ]
  },
];
