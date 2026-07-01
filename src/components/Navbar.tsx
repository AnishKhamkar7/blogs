import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const navItems = ["Leetcode", "Blogs", "Books", "Notes"];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-10 flex items-center justify-between gap-4 border-b px-5 py-4 ${
        isDark
          ? "border-slate-800 bg-slate-950 text-slate-100"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <a className="font-medium tracking-tight" href="/">
        My Docs
      </a>

      <nav className="flex flex-wrap justify-center gap-3" aria-label="Primary">
        {navItems.map((item) => (
          <a
            key={item}
            className={`text-sm transition-colors ${
              isDark
                ? "text-slate-400 hover:text-slate-100"
                : "text-slate-600 hover:text-slate-900"
            }`}
            href={`/${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`rounded-full  px-3 py-1.5 text-sm transition-colors ${
          isDark
            ? "border-slate-800 text-slate-100 hover:bg-slate-900"
            : "border-slate-200 text-slate-900 hover:bg-slate-100"
        }`}
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
