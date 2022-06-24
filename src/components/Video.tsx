import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { ButtonLink } from "./Button/ButtonLink";
import { ButtonContent } from "./Button/ButtonContents";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <div>
                            <h1 className="text-2xl font-bold">Aula 01 - Criando o projeto e realizando o setup inicial</h1>
                            <p className="mt-4 text-gray-300 leading-relaxed">
                                Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos
                                também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela
                                plataforma no nosso front-end utilizando Apollo Client.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <img src="https://github.com/assuncaovictor.png" alt="Instrutor" className="h-16 w-16 rounded-full border-2 border-blue-500" />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Victor Assunção Melo</strong>
                                <span className="text-gray-200 text-sm block">Desenvolvedor Full Stack</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <ButtonLink variant="primary" icon={<DiscordLogo size={24} />} text="Comunidade do Discord" />
                        <ButtonLink variant="secondary" icon={<Lightning size={24} />} text="Acesse o desafio" />
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <ButtonContent title="Material complementar" description="Acesse o material complementar para acelerar o sue desenvolvimento" />
                    <ButtonContent title="Wallpapers exclusivos" description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" />
                </div>
            </div>
        </div>
    );
}
