export default function Background({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FFFCF7]">
      {children}
    </div>
  );
}
