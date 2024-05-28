import Content from "@/components/content";
import Topbar from "@/components/topbar";


export default function HomePage() {
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-danger my-4">Exchange Rate</h1>
      <Content />
    </div>
  )
}
