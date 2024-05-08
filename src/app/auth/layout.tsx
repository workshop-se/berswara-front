import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
