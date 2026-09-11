export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-text-muted text-sm font-sans">
          &copy; 2026 Oliver Iacob
        </span>
        <span className="text-text-muted text-sm font-sans">
          Built with Next.js
        </span>
      </div>
    </footer>
  );
}
