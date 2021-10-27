import { create } from '@storybook/theming';
import logo from './logo.png'

export default create({
  base: 'light',
  brandTitle: 'RobinHeij.nl',
  brandImage: logo,

  appBg: '#F5F3ED',
  appContentBg: '#fff',
  barBg: '#F5F3ED',
  appBorderColor: '#F5F3ED',
  appBorderRadius: 4,

  barTextColor: '#001871',
  barSelectedColor: '#001871',

  textColor: '#000722',

  fontBase: 'Helvetica, sans-serif',
});