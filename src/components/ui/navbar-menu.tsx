'use client';

import React from 'react';

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center space-x-8 relative">
      {children}
    </div>
  );
};

export const MenuItem = ({
  item,
}: {
  item: string;
}) => {
  return (
    <div
      className="relative font-medium cursor-pointer text-white hover:underline underline-offset-4 transition-all text-[18px]"
    >
      {item}
    </div>
  );
};

export const HoveredLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} className="text-white hover:text-gray-300 transition">
      {children}
    </a>
  );
};
