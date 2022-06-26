import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: "live" | "class";
}

export function Lesson(props: LessonProps) {
    const { lesson } = useParams<{ lesson: string }>();

    const isLessonAvailable = isPast(props.availableAt);
    const availabelDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

    const isActiveLesson = lesson === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">{availabelDateFormatted}</span>

            <div
                className={classNames("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ", {
                    "bg-green-500": isActiveLesson,
                })}
            >
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span
                            className={classNames("text-sm  font-medium flex items-center gap-2", {
                                "text-blue-500": !isActiveLesson,
                                "text-white": isActiveLesson,
                            })}
                        >
                            <CheckCircle size={20} /> Conteúdo Liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} /> Em breve
                        </span>
                    )}

                    {props.type === "live" ? (
                        <span
                            className={classNames("text-xs rounded px-2 py-[0.125rem] border  uppercase ", {
                                "text-green-300 border-green-300": !isActiveLesson,
                                "text-white border-white": isActiveLesson,
                            })}
                        >
                            Ao vivo
                        </span>
                    ) : (
                        <span
                            className={classNames("text-xs rounded px-2 py-[0.125rem] border uppercase text-white", {
                                "border-green-300": !isActiveLesson,
                                "border-white": isActiveLesson,
                            })}
                        >
                            Aula prática
                        </span>
                    )}
                </header>
                <strong
                    className={classNames(" mt-5 block", {
                        "text-gray-200": !isActiveLesson,
                        "text-white": isActiveLesson,
                    })}
                >
                    {props.title}
                </strong>
            </div>
        </Link>
    );
}
