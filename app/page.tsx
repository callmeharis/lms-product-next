// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen">
//       {/* Left Side */}
//       <div className="bg-green-800 text-white w-full lg:w-1/2 h-screen flex flex-col justify-center items-center p-10">
//         <h1 className="text-3xl font-bold">Yes! we're making progress!</h1>
//         <p className="mt-2 text-lg">every minute & every second</p>
//         <img
//           src="/learning-image.png"
//           alt="Learning"
//           className="mt-6 rounded-lg"
//         />
//         <p className="mt-4 text-sm">
//           Begin your learning journey today and experience the power of personalized education.
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="bg-white w-full lg:w-1/2 h-screen flex flex-col justify-center items-center p-10">
//         <h2 className="text-2xl font-semibold">Welcome back!</h2>
//         <p className="mt-1 text-gray-600">We&apos;re glad to have you back.</p>
//         <form className="w-full max-w-sm mt-6">
//           <div>
//             <label className="block text-sm font-medium mb-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="admin@amentotech.com"
//               className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
//             />
//           </div>
//           <div className="mt-4">
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <input
//               type="password"
//               className="w-full border-gray-300 rounded-lg shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
//             />
//           </div>
//           <div className="mt-2 flex items-center justify-between">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember Me
//             </label>
//             <a href="#" className="text-sm text-green-600 hover:underline">
//               Forgot Password?
//             </a>
//           </div>
//           <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4">
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-sm">
//           <p>
//             Login as{' '}
//             <span className="font-medium">Tutor</span>,{' '}
//             <span className="font-medium">Student</span>,{' '}
//             <span className="font-medium">Admin</span>
//           </p>
//         </div>
//         <p className="mt-6 text-sm">
//           Don&apos;t have an Account?{' '}
//           <Link href="/sign-up" className="text-green-600 font-medium hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import Footer from "@/components/Footer";
import Body from "@/components/home/Body";
import Navbar from "@/components/Navbar";




export default function Page() {

  return (

    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
