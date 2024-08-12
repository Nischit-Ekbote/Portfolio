import Link from "next/link";

export default function NavBarItems({item}) {
    return (
        <>
            <Link href={item.path}>{item.icon}{item.name}</Link>
        </>
    );
}