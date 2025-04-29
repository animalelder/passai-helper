// components/PageWrapper.tsx
export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-sm flex-col justify-between bg-card px-6 py-2">
      {children}
    </div>
  );
}
