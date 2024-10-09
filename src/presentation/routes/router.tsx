import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import {
  AboutUsPage,
  DownloadAppPage,
  ErrorPage,
  LandingPage,
  NotFoundPage,
  ProductDetailPage,
  ReviewsPage,
  StorePage,
} from '../pages';
import { AuthLayout, LoginPage, RegisterPage } from '../auth';
import { SupportPage } from '../pages/Support/SupportPage';

export const router = createBrowserRouter([
  /// Auth Routes
  {
    errorElement: <ErrorPage />,
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/about',
        element: <AboutUsPage />,
      },
      {
        path: '/store',
        element: <StorePage />,
      },
      {
        path: '/store/product/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: '/reviews',
        element: <ReviewsPage />,
      },
      {
        path: '/download',
        element: <DownloadAppPage />,
      },
      {
        path: '/support',
        element: <SupportPage />,
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to='' />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
