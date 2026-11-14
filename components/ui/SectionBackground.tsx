'use client';

type Theme = 'gold' | 'red' | 'purple' | 'black';

export default function SectionBackground({
  theme = 'gold',
  speed = 0.4,
}: {
  theme?: Theme;
  speed?: number;
}) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Theme-specific high-performance dark radial ambient gradients */}
      {theme === 'gold' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 55% at 50% 15%, rgba(201, 168, 76, 0.09) 0%, rgba(30, 20, 0, 0.03) 60%, transparent 85%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 85% 75%, rgba(201, 168, 76, 0.05) 0%, transparent 60%)',
            }}
          />
        </>
      )}

      {theme === 'red' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 55% at 50% 15%, rgba(232, 0, 61, 0.1) 0%, rgba(45, 0, 0, 0.03) 60%, transparent 85%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 15% 75%, rgba(232, 0, 61, 0.06) 0%, transparent 60%)',
            }}
          />
        </>
      )}

      {theme === 'purple' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 55% at 50% 15%, rgba(168, 85, 247, 0.1) 0%, rgba(42, 0, 80, 0.03) 60%, transparent 85%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 85% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 60%)',
            }}
          />
        </>
      )}

      {theme === 'black' && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 10%, rgba(255, 255, 255, 0.03) 0%, rgba(15, 15, 18, 0.4) 60%, transparent 95%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 90%, rgba(30, 30, 35, 0.25) 0%, transparent 70%)',
            }}
          />
        </>
      )}
    </div>
  );
}
