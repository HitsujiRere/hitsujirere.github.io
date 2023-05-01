import { ComponentPropsWithoutRef, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

export type WrapLinkProps = Omit<ComponentPropsWithoutRef<'a'>, keyof LinkProps> &
  Omit<LinkProps, 'href'> &
  Partial<Pick<LinkProps, 'href'>>;

export const WrapLink = ({ href, ...rest }: WrapLinkProps) => {
  return href ? <Link href={href} {...rest} /> : <>{rest.children}</>;
};
