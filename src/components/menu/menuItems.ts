interface SetIsOpen {
  (value: boolean) : void,
}

export interface SubMenu {
  menuItems: MenuItem[],
}

export interface MenuItem {
  to: string,
  caption: string,
  order: number,
  subMenu?: SubMenu,
}

// export const getMenuItems = (windowDimensions: WindowDimensions): MenuItem[] => {
export const getMenuItems = (): MenuItem[] => {
  const menuItems: MenuItem[] = [
    {    // home
      order: 1,
      to: '/',
      caption: 'Home',
    }, { // contact
      order: 3,
      to: '/contact',
      caption: 'Contact',
    // }, { // meet our dogs
    //   order: 2,
    //   to: '/meet-our-dogs',
    //   caption: windowDimensions.width < 575 ? 'Dogs' : 'Meet Our Dogs',
    //   subMenu: {
    //     menuItems: [
    //       {    // moms
    //         order: 1,
    //         to: '/moms',
    //         caption: 'Moms',
    //       }, { // dads
    //         order: 2,
    //         to: '/dads',
    //         caption: 'Dads',
    //       }, {
    //         order: 3,
    //         to: '/available-puppies',
    //         caption: 'Available Puppies',
    //       }, {
    //         order: 4,
    //         to: '/about-bernedoodles',
    //         caption: 'About Bernedoodles',
    //       }
    //     ],
    //   }
    }, {
      order: 2,
      to: '/available-puppies',
      caption: 'Puppies',
    }, {
      order: 5,
      to: '/gallery/dog',
      caption: 'Gallery',
    },
  ];

  return menuItems;
};

export const sorter = (a:MenuItem, b:MenuItem) => a.order < b.order ? -1 : b.order < a.order ? 1 : 0;

export const openSubMenu = (menuItem:MenuItem, setIsOpen:SetIsOpen) => () => {
  if(menuItem.subMenu) {
    setIsOpen(true);
  }
};

export const closeSubMenu = (menuItem:MenuItem, setIsOpen:SetIsOpen) => () => {
  if(menuItem.subMenu) {
    setIsOpen(false);
  }
};