export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ padding: '2rem', border: '1px solid #ccc' }}>
      <h2>Korumalı Alan</h2>
      {children}
    </section>
  );
}
