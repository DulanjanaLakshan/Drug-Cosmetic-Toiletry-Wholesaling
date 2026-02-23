import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md hover:shadow-lg hover:scale-[1.02]',
      secondary: 'bg-indigo-900 text-white hover:bg-indigo-800 shadow-md',
      outline: 'border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white bg-transparent',
      ghost: 'hover:bg-gray-100 text-gray-700',
      link: 'text-teal-600 underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-14 px-6 text-base', // 56px height as requested
      lg: 'h-16 px-8 text-lg',
      icon: 'h-10 w-10',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
