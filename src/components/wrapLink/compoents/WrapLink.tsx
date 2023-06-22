import { ComponentPropsWithoutRef } from 'react';
import Link, { LinkProps } from 'next/link';

export type WrapLinkProps = Omit<ComponentPropsWithoutRef<'a'>, keyof LinkProps | 'target'> &
  Omit<LinkProps, 'href' | 'target'> &
  Partial<Pick<LinkProps, 'href'>>;

export const WrapLink = ({ href, ...rest }: WrapLinkProps) => {
  return href ? (
    <Link
      href={href}
      {...rest}
      target={href.toString().startsWith('http') ? '_blank' : undefined}
    />
  ) : (
    <>{rest.children}</>
  );
};
