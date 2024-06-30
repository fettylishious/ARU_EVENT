const Layout = ({ children}: {children: React.ReactNode}) => {
    return (
        <div className="flex-center min-h-screen w-full bg-neutral-200 bg-dotted-pattern bg-center bg-fixed bg-cover">
            {children}
        </div>
    )
}
export default Layout