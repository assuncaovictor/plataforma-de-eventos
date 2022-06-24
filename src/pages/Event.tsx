import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 container content-center mx-auto">
                <Video />
                <Sidebar />
            </main>
        </div>
    );
}
