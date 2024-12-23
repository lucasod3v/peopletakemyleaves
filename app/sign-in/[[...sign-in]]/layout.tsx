export default function SignInLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>  
            <section className="flex justify-center translate-y-1/2">
                {children}
            </section>
        </>
    )
  }