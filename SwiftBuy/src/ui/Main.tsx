type MainProps ={
    children?: React.ReactNode;
    className?: string; // Optional additional CSS classes for custom styling of the main
}
function Main({children , className} : MainProps){
    return (
        <main className={className}>
        {children}
        </main>
    )
}
export default Main