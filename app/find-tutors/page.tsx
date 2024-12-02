import TutorCard from '../../components/find_tutors/TutorCard';
import SearchFilters from '../../components/find_tutors/Filters';import Navbar from '@/components/Navbar';
 export default function Page() {

    return (

        <>
            <Navbar/>


            {/* Find Tutors */}
            <main className="container mx-auto p-6">
                <section className="text-center">
                    <h1 className="text-4xl font-bold text-primary">Discover a skilled online tutor for your studies</h1>
                    <p className="text-lg text-darkGray mt-2">
                        Master your studies with personalized online tutoring from expert educators.
                    </p>
                </section>

                <section className="mt-6">
                    <SearchFilters />
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <TutorCard />
                    <TutorCard />
                    <TutorCard />
                </section>
            </main>
        </>
    );
}