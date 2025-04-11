// components/PageWrapper.tsx
export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-card mx-auto flex min-h-screen max-w-sm flex-col justify-between px-6">
      {children}
    </div>
  );
}
