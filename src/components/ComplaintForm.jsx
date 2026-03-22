import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

export default function ComplaintForm() {
    const [complaint, setComplaint] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!complaint) return;

        try {
            setLoading(true);

            const res = await axios.post("https://bank-comaplaint-classification-backend.onrender.com/predict", {
                complaint,
            });

            setCategory(res.data.category);
        } catch (err) {
            console.error(err);
            alert("Error connecting to backend");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <textarea
                className="w-full border border-gray-300 rounded-xl p-4 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                rows="5"
                placeholder="Describe the customer complaint..."
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
            />

            <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition font-medium"
            >
                {loading ? "Analyzing..." : "Analyze Complaint"}
            </button>

            {category && <ResultCard category={category} />}
        </div>
    );
}