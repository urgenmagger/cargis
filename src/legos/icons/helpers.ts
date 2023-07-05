export type CustomIconNames = 'collapsableTop' | 'goBack' | 'collapsableBottom';

export interface CustomIconConstructorProps {
  size?: number;
  color?: string;
}
export interface CustomIconProps extends CustomIconConstructorProps {
  iconName: CustomIconNames;
}
