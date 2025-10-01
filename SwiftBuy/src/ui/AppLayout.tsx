import Header from './Header';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>


      <Footer />
    </div>
  );
}

export default AppLayout;
