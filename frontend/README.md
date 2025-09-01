doctor-appointment-frontend/
│── public/                   # Static assets (favicon, images, etc.)
│
│── src/
│   ├── api/                  # API calls (axios instance + service files)
│   │   ├── authApi.js        # Auth service APIs (login, signup, logout)
│   │   ├── doctorApi.js      # Doctor service APIs (list, details)
│   │   ├── appointmentApi.js # Appointment service APIs (book, cancel)
│   │   └── axiosInstance.js  # Axios base instance with interceptors
│   │
│   ├── assets/               # Images, logos, icons
│   │
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── Loader.jsx
│   │
│   ├── context/              # Global state management (Auth, User)
│   │   ├── AuthContext.jsx
│   │   └── AppointmentContext.jsx
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   │
│   ├── layouts/              # Layout components (shared structure)
│   │   ├── MainLayout.jsx    # With navbar/footer
│   │   └── AuthLayout.jsx    # For login/signup pages
│   │
│   ├── pages/                # All app pages
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── Doctors/
│   │   │   ├── DoctorList.jsx
│   │   │   └── DoctorDetails.jsx
│   │   │
│   │   ├── Appointments/
│   │   │   ├── AppointmentBooking.jsx
│   │   │   └── MyAppointments.jsx
│   │   │
│   │   ├── Dashboard.jsx
│   │   └── Home.jsx
│   │
│   ├── router/               # React Router setup
│   │   └── AppRouter.jsx
│   │
│   ├── styles/               # Global styles (Tailwind config / custom CSS)
│   │   └── globals.css
│   │
│   ├── utils/                # Helper functions
│   │   ├── validators.js
│   │   └── formatDate.js
│   │
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind imports
│
├── .env                      # Environment variables (API URLs)
├── package.json
├── vite.config.js
└── README.md
