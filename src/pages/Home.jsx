import ComplaintForm from "../components/ComplaintForm";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200">

            {/* 🔷 FULL WIDTH HEADER */}
            <header className="w-full bg-white border-b shadow-sm">
                <div className="w-full px-12 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        FinGuard AI
                    </h1>

                    <span className="text-sm text-gray-500">
                        Complaint Intelligence System
                    </span>
                </div>
            </header>

            {/* 🔶 MAIN CONTENT */}
            <main className="flex-grow flex items-center justify-center px-4">
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        Analyze Customer Complaint
                    </h2>

                    <p className="text-center text-gray-500 mb-6 text-sm">
                        Enter complaint text to classify issue category using AI
                    </p>

                    <ComplaintForm />

                </div>
            </main>

            {/* 🔻 FOOTER */}
            <footer className="w-full bg-white border-t py-4 text-center text-sm text-gray-500">
                © 2026 FinGuard AI · Secure Banking Intelligence · All Rights Reserved
            </footer>

        </div>
    );
}