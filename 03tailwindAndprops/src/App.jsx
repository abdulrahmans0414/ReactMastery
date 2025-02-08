import { Card } from "./components/Card";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Team Members
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          username="Abdul Rahman"
          imgSrc="https://avatars.githubusercontent.com/u/143753150?s=96&v=4"
        />
        <Card
          username="rendom"
          imgSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
      </div>
    </div>
  );
}

export default App;
