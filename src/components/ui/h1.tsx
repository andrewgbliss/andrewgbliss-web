export const H1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="hidden font-bold text-white sm:block sm:text-6xl">
      {children}
    </h1>
  );
};
