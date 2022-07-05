type linkObj = {
  testID: string;
  to: string;
  text: string;
};
export const navLinks: linkObj[] = [
  {
    testID: 'about-link',
    to: 'about',
    text: 'About Us',
  },
  {
    testID: 'houses-link',
    to: '/houses',
    text: 'Houses',
  },
  {
    testID: 'search-link',
    to: 'api',
    text: 'Search Bar',
  },
  {
    testID: 'form-link',
    to: 'form',
    text: 'Form',
  },
];
