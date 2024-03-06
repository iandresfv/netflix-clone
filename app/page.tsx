import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-20">
      <h1>This is a Netflix clone ap</h1>
      <Button className="m-2">A button from shadcn/ui</Button>
    </div>
  );
}
