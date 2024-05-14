import Image from 'next/image';
export default function Background({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-[#FFFCF7] min-h-[1000px]">
      <div className='overflow-hidden'>
        <Image
          src="/images/background.svg"
          layout="fill"
          alt="Background"
          className="z-0 object-cover"
          width={0}
          height={0}
        />
      </div>

      <div className="relative inset-0 z-1">
        {children}
      </div>
    </div>
  );
}
