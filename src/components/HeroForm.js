import React from 'react';

export default function HeroForm({children, header, className}) {
  return (
    <div className={className}>
        <h1>{header}</h1>
        <div>{children}</div>
    </div>
  )
}
