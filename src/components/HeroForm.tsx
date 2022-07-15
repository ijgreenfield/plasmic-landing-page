import React, { ReactNode } from 'react';

export interface HeroFormProps {
    children?: ReactNode,
    header: string,
    className?: string;
}

export default function HeroForm({children, header, className}: HeroFormProps) {
  return (
    <div className={className}>
        <h1>{header}</h1>
        <div>{children}</div>
    </div>
  )
}
