import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

const PaginationButton = ({ className, isActive, size = 'icon', ...props }) => (
  <Button
    aria-current={isActive ? 'page' : undefined}
    className={cn(isActive ? 'bg-secondary' : '', className)}
    variant={isActive ? 'outline' : 'ghost'}
    size={size}
    {...props}
  />
);
PaginationButton.displayName = 'PaginationButton';

const PaginationPrevious = ({ className, ...props }) => (
  <PaginationButton
    role="button"
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="w-4 h-4" />
    <span>Previous</span>
  </PaginationButton>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({ className, ...props }) => (
  <PaginationButton
    aria-label="Go to next page"
    role="button"
    size="default"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="w-4 h-4" />
  </PaginationButton>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="w-4 h-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
};
