import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <div className=" flex flex-col gap-3">
     <div>
       <Button variant={"elevated"}>
          i am button
      </Button>
     </div>
      <div>
        <Input placeholder="i am text"></Input>
      </div>
    <Progress value={40}></Progress>
    <div>
      <Textarea placeholder="i am text"></Textarea>
    </div>
    </div>
     
    </div>
  );
}
