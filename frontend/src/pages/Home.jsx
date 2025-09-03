import { NavLink } from "react-router-dom";
import NavBar from "../components/Navbar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="bg-white py-16 px-6 text-center shadow-md">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
            Book Your Doctor Appointment Online
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Find trusted doctors, clinics, and specialists near you. Quick.
            Easy. Reliable.
          </p>
          <NavLink
            to="/appointments"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Book Now
          </NavLink>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "General Consultation",
              "Pediatrics",
              "Dermatology",
              "Cardiology",
              "Orthopedics",
              "Mental Health",
            ].map((service) => (
              <div
                key={service}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Book expert consultations with top specialists in{" "}
                  {service.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Doctors */}
        <section className="bg-blue-50 py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Featured Doctors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow p-6 text-center"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${id * 10}.jpg`}
                  alt="Doctor"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold">Dr. John Doe {id}</h4>
                <p className="text-gray-600">Cardiologist</p>
                <p className="text-sm mt-2">10+ years experience</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">1. Search</h3>
              <p>Find doctors near you by specialty, location, or rating.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Book</h3>
              <p>
                Choose a time that works and book your appointment instantly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Visit</h3>
              <p>
                Visit the clinic or start your online consultation. Easy &
                secure.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white py-20 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Patient Testimonials
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <p className="text-gray-700 italic mb-2">
                  "Amazing experience! Booking was simple, and I got a
                  consultation the same day."
                </p>
                <p className="font-semibold text-blue-700">— Patient {i}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h4 className="font-semibold text-lg">
                Do I need an account to book?
              </h4>
              <p className="text-gray-600">
                No, but creating one helps track your appointments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                Is teleconsultation available?
              </h4>
              <p className="text-gray-600">
                Yes, many doctors offer video consultations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                How do I cancel or reschedule?
              </h4>
              <p className="text-gray-600">
                Log in to your account and visit "My Appointments" to manage
                bookings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
