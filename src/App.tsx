import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './presentation/routes/router.tsx';
import { Suspense } from 'react';

function App() {
  return (
    <HelmetProvider>
      <Suspense
        fallback={
          <div className='h-screen w-full bg-base-100 flex justify-center content-center'>
            <span className='loading loading-ring loading-lg '></span>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
