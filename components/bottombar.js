import Link from "next/link"

export const Bottombar = () => {
    return (
        <footer className=" bg-white p-3">
            <div className="justify-between">
                <Link href="/">
                <a className=" font-burtons text-xl">alexanderturco</a> 
                </Link>
            </div>
        </footer>     
    );
}