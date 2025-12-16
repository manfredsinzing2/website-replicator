import { TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold text-foreground tracking-tight">
          wep<span className="text-primary">7</span>nel
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors">
          <span className="text-sm text-muted-foreground">文A</span>
        </button>
        <button className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors">
          <svg
            className="h-4 w-4 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
