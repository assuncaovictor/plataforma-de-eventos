import { useState, FormEvent } from "react";
import { Logo } from "../components/Logo";
import { Navigate, useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Footer } from "../components/Footer";
import react from "../assets/img/code.png";

export function Subscribe() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [createSubscriber, { loading, data }] = useCreateSubscriberMutation();

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        createSubscriber({
            variables: {
                name,
                email,
            },
        });

        data?.createSubscriber?.id && localStorage.setItem("auth", data?.createSubscriber?.id);
        navigate("/event");
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="min-h-screen bg-blur bg-cover bg-fixed bg-no-repeat flex flex-col items-center">
                <main className="bg-react bg-middle bg-no-repeat">
                    <div className="flex items-center justify-between pt-20 mx-auto container flex-col gap-20 md:flex-row md:gap-0">
                        <div className="max-w-[640px]  text-center md:text-left px-5">
                            <div className="flex justify-center md:justify-start">
                                <Logo />
                            </div>
                            <h1 className="mt-8 text-[2.5rem] leading-tight">
                                Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{" "}
                                <strong className="text-blue-500">React</strong>
                            </h1>
                            <p className="mt-4 text-gray-200 leading-relaxed">
                                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores
                                oportunidades do mercado.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-screen sm:w-auto md:mr-5">
                            <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Seu nome completo"
                                    className="bg-gray-900 rounded px-5 h-14"
                                    onChange={(event) => setName(event.target.value)}
                                />
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Digite seu e-mail"
                                    className="bg-gray-900 rounded px-5 h-14"
                                    onChange={(event) => setEmail(event.target.value)}
                                />

                                <button
                                    type="submit"
                                    className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                                    disabled={loading}
                                >
                                    Garantir minha vaga
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src={react} alt="Código no VS code" />
                </main>
                <Footer />
            </div>
        </div>
    );
}
