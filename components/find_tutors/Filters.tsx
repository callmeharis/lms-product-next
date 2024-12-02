export default function Filters() {
    return (
        <div className="flex flex-wrap gap-4 bg-white p-4 rounded-md shadow-md">
            <select className="flex-1 border-gray-300 rounded-md p-2">
                <option>Subject Group</option>
                <option>Science</option>
                <option>Mathematics</option>
            </select>
            <select className="flex-1 border-gray-300 rounded-md p-2">
                <option>Choose Subject</option>
                <option>Physics</option>
                <option>Chemistry</option>
            </select>
            <select className="flex-1 border-gray-300 rounded-md p-2">
                <option>Fee per session</option>
                <option>$0-$20</option>
                <option>$20-$50</option>
            </select>
            <select className="flex-1 border-gray-300 rounded-md p-2">
                <option>Location</option>
                <option>USA</option>
                <option>UK</option>
            </select>
        </div>
    );
}
