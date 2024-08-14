
'use client';
import { useRouter } from "next/navigation";
export default function Ourname () {
    const router = useRouter();
    return (
        <div>
            <h2>This is our name page</h2>
            <br />
            <button type = "button" onClick = { () => router.push ('/name/address')}>
            Sort address
            </button>
        </div>
    );
};