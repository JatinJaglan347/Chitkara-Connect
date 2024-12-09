import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LoginPage from './page/login/LoginPage';
import StudentHome from './page/student/StudentHome/StudentHome';
import StudentGatepass from './page/student/StudentGatepass/StudentGatepass';
import StudentQueries from './page/student/StudentQueries/StudentQueries';
import TeacherNavBar from './page/teacher/TeacherNavBar/TeacherNavBar';
import TeacherHome from './page/teacher/TeacherHome/TeacherHome';
import TeacherNoticeCreate from './page/teacher/TeacherHome/TeacherNoticeCreate';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentLayout from './StudentLayout.jsx';
import TeacherLayout from './TeacherLayout.jsx';
import Temporary from './Temporary.jsx';
import SupportPage from './page/login/SupportPage.jsx';
import ManageStudents from './page/teacher/ManageStudents/ManageStudents.jsx';
import ContactTeachers from './page/student/ContactTeachers/ContactTeachers.jsx';
import StudentsSyllabus from './page/student/StudentSyllabus/StudentSyllabus.jsx';
import AddSyllabus from './page/teacher/TeacherSyllabus/AddSyllabus.jsx';
import StudentPerformance from './page/student/StudentPerformance/StudentPerformance.jsx';
<<<<<<< HEAD
import StudentProfilePage from './page/student/StudentProfilePage/StudentProfilePage.jsx';
=======
import StudentAttendance from './page/student/StudentAttendance/StudentAttendance.jsx';
import TeacherAttendance from './page/teacher/TeacherAttendance/TeacherAttendance.jsx';
>>>>>>> 13e67dfbb5bd9b38f7ff00d570bb18aa4a9c527c

const router = createBrowserRouter([
  // Default Login Route
  {
    path: '/',
    element: <LoginPage />
  },

  // Temporary route (this can be changed according to your requirement)
  {
    path: '/support',
    element: <SupportPage />
  },

  // Student Routes (Dynamic ID and RollNo in the URL)
  {
    path: '/student/', // Correct dynamic path
    element: <StudentLayout />,
    children: [
      {
        path: 'home',
        element: <StudentHome />
      },
      {
        path: 'gatepass',
        element: <StudentGatepass />
      },
      {
        path: 'queries',
        element: <StudentQueries />
      },
      {
        path: 'help',
        element: <SupportPage />
      },
      {
        path: 'contact-teachers',
        element: <ContactTeachers />
      },
      {
        path: 'syllabus',
        element: <StudentsSyllabus />
      },
      {
        path: 'performance',
        element: <StudentPerformance/>
      },
      {
<<<<<<< HEAD
        path: 'profile',
        element:<StudentProfilePage/>
=======
        path: 'attendance',
        element: <StudentAttendance/>
>>>>>>> 13e67dfbb5bd9b38f7ff00d570bb18aa4a9c527c
      },
    ]
  },

  // Teacher Routes (Dynamic ID and TeacherId in the URL)
  {
    path: '/teacher/', // Correct dynamic path
    element: <TeacherLayout />,
    children: [
      {
        path: 'home',
        element: <TeacherHome />
      },
      {
        path: 'notice/create',
        element: <TeacherNoticeCreate />
      },
      {
        path: 'help',
        element: <SupportPage />
      },
      {
        path: 'manage',
        element: <ManageStudents />
      },
      {
        path: 'syllabus',
        element: <AddSyllabus />
      },
      {
        path: 'attendance',
        element: <TeacherAttendance />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
