import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

function handleShowMenu() {
    const xIconMenu = document.querySelector("[data-x]");
    const listIconMenu = document.querySelector("[data-list]");
    const asside = document.querySelector("[data-aside]");
    const body = document.querySelector("body");

    if (listIconMenu?.classList.contains("hidden")) {
        listIconMenu?.classList.remove("hidden");
        xIconMenu?.classList.add("hidden");

        asside?.classList.add("hidden");
        asside?.classList.remove("aside-mobile");
        body?.classList.remove("overflow-y-hidden");
        return;
    }

    asside?.classList.remove("hidden");
    asside?.classList.add("aside-mobile");

    listIconMenu?.classList.add("hidden");
    xIconMenu?.classList.remove("hidden");

    body?.classList.add("overflow-y-hidden");
}

export function Header() {
    return (
        <header className="w-full bg-gray-700 border-b border-gray-600 px-5 sm:px-0">
            <div className="container py-5 flex items-center justify-between lg:justify-center mx-auto">
                <Logo />
                <button type="button" className="flex gap-5 items-center lg:hidden" onClick={handleShowMenu}>
                    Aulas
                    <List size={32} className="text-blue-400" data-list />
                    <X size={32} className="text-blue-400 hidden" data-x />
                </button>
            </div>
        </header>
    );
}
