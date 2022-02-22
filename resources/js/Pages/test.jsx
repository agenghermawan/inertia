import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function test() {
    return (
        <div>
            <Link href="/"> Back to Route </Link>
            <Link href="/test"> Back to Test </Link>
        </div>
    );
}
