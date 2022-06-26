import { LogoFooter } from "./LogoFooter";

export function Footer() {
    return (
        <footer className="bg-gray-900 w-full px-5 sm:px-0">
            <div className="flex justify-between mx-auto items-center container border-t-2 border-gray-500 py-5 flex-col md:flex-row">
                <div className="flex gap-5 items-center flex-col md:flex-row">
                    <LogoFooter />
                    Rocketseat - Todos os direitos reservados
                </div>

                <a href="#" className="mt-5 md:mt-0">
                    Políticas de privacidade
                </a>
            </div>
        </footer>
    );
}
