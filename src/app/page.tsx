import ProfileHeader from "./Components/ProfileHeader";
import DataTable from "./components/DataTable";
import ChatSection from "./components/ChatSection";

export default function Home() {
  return (
    <main className="container mx-auto " style={{ width: "1100px" }}>
      <ProfileHeader />
      <DataTable />
      <ChatSection />
    </main>
  );
}
