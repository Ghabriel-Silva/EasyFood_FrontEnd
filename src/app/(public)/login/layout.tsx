export const metadata = {
  title: 'Login',
  description: 'Login para acessar sistema EasyFood',
}
//apenas login recebe as edições feitas aqui
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div suppressHydrationWarning >
     {children}
    </div>
  )
}
