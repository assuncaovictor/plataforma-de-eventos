import React from "react";

interface props {
    variant: "primary" | "secondary";
    text: string;
    icon?: React.ReactNode;
    href?: string;
}

export function ButtonLink({ variant, text, icon, href }: props) {
    return (
        <a href={href ?? ""} className={variant === "primary" ? "button-link-primary" : "button-link-secondary"}>
            {icon}
            {text}
        </a>
    );
}
