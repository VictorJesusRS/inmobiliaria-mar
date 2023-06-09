
import MainNav from "@/src/navigations/main-nav/MainNav";
export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return(
        <>
            <header>
                <MainNav/>
            </header>
            <div className={'tw-d-flex tw-justify-center tw-align-center tw-w-full tw-h-screen tw-text-center'}>
            
                <section>
                    {children}
                </section>
            </div>
        </>
    )
}