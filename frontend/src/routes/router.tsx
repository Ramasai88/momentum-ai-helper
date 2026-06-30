import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import DashboardPage from '@/pages/DashboardPage'
import GoalsPage from '@/pages/GoalsPage'
import PlannerPage from '@/pages/PlannerPage'
import AnalyticsPage from '@/pages/AnalyticsPage'
import CalendarPage from '@/pages/CalendarPage'
import SettingsPage from '@/pages/SettingsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'goals', element: <GoalsPage /> },
      { path: 'planner', element: <PlannerPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
])

export default router
