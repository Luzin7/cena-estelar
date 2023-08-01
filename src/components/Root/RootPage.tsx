import Content from './Content';
import Header from './Header';

function RootPage() {
  return (
    <div className="max-w-xs m-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
      <Header />
      <Content />
    </div>
  );
}

export default RootPage;
