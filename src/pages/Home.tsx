import useLocalStorageHook from "../customhooks/useLocalStorageHook";

function Home() {
  const [theme] = useLocalStorageHook<string>('theme', '');
  console.log(theme);
  return (
    <div className={`bg-${theme}-background`}>
      <h1 className={`text-dark-text`}>Home</h1>
    </div>
  )
}

export default Home