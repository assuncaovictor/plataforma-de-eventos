import { DiscordLogo, Lightning } from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";
import { ButtonLink } from "./Button/ButtonLink";
import { ButtonContent } from "./Button/ButtonContents";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
            slug: props.lessonSlug,
        },
    });

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando</p>
            </div>
        );
    }

    return (
        <div className="flex-1">
            <div className="flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video rounded">
                    <Player>
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start flex-col md:flex-row gap-16">
                    <div className="flex-1">
                        <div>
                            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                            <p className="mt-4 text-gray-300 leading-relaxed">{data.lesson.description}</p>
                        </div>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                                <img src={data.lesson.teacher.avatarURL} alt="Instrutor" className="h-16 w-16 rounded-full border-2 border-blue-500" />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 w-full justify-items-stretch md:w-auto">
                        <ButtonLink variant="primary" icon={<DiscordLogo size={24} />} text="Comunidade do Discord" />
                        <ButtonLink variant="secondary" icon={<Lightning size={24} />} text="Acesse o desafio" />
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
                    <ButtonContent title="Material complementar" description="Acesse o material complementar para acelerar o sue desenvolvimento" />
                    <ButtonContent title="Wallpapers exclusivos" description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" />
                </div>
            </div>
        </div>
    );
}
