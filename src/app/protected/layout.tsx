export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>Protected Area</h2>
      <main>{children}</main>
    </div>
  );
}
