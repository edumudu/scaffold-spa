import { Link } from '@tanstack/react-router';

export function TheHeader() {
  return (
    <header className="flex justify-between items-center h-16 px-4 py-2 shadow-md">
      <Link to="/">
        Header, visit source "TheHeader/index.tsx"
      </Link>
    </header>
  );
}

