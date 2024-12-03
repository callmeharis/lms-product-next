export default function SidebarFilter() {
    return (
        <aside className="border-r p-4 w-64">
            <h2 className="font-bold text-lg mb-4">Narrow search</h2>
            <div>
                <h3 className="text-sm font-medium mb-2">Category</h3>
                <ul className="space-y-2">
                    {["Productivity", "3D & Animation", "Creative Software Tools"].map(
                        (item) => (
                            <li key={item}>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>{item}</span>
                                </label>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <div className="mt-6">
                <h3 className="text-sm font-medium mb-2">Ratings</h3>
                {/* Repeat a similar structure for ratings */}
            </div>
        </aside>
    );
}
