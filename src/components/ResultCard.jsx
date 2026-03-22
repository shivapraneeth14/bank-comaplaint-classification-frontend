export default function ResultCard({ category }) {
    return (
        <div className="mt-6 p-5 bg-gray-50 border rounded-xl shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Predicted Category</p>

            <h3 className="text-xl font-semibold text-gray-800">
                {category}
            </h3>
        </div>
    );
}