export default function SectionHeader({ number, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-accent text-sm">{number}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary-600 to-accent" />
    </div>
  );
}
