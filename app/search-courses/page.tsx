import Navbar from "@/components/Navbar";
import Card from "../../components/courses/Card";
import SidebarFilter from "../../components/courses/SidebarFilter";

export default function Page() {

    const courses = [
        {
            imageSrc: "/path-to-image1.jpg",
            title: "Decision-Making Mastery: Make Better Choices",
            category: "Productivity",
            rating: 5.0,
            lessons: 9,
            duration: "9 mins",
            price: 456,
            discountedPrice: 278.16,
        },
        // Add more courses here
    ];
    return (

        <>
            <Navbar/>

            <div className="flex">
                {/* Sidebar */}
                <SidebarFilter />

                {/* Main Content */}
                <main className="flex-1 p-8">
                    <div className="grid grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <Card key={index} {...course} />
                        ))}
                    </div>
                </main>
            </div>


           </>
    );
}
