export default function FormCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className='bg-white p-[40px] rounded-[18px] outline outline-black outline-1'>
        {children}
      </div>
  );
}
