import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { lesson } = useParams<{ lesson: string }>();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 container content-center mx-auto mt-10">
                {lesson ? <Video lessonSlug={lesson} /> : <div className="flex-1" />}

                <Sidebar />
            </main>
        </div>
    );
}
