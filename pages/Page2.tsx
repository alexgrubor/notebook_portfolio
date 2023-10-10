import Container from "@/components/shared/Container"
import Expertise from "@/components/Expertise"
import { ArrowBigDown } from "lucide-react";
const Page2 = () => {
  return (
    <Container className="mx-auto max-w-screen-lg">
    <div className="flex absolute bottom-1 text-slate-600 text-sm right-2">
      page 2
    </div>
    <Expertise />
    <p className="text-center flex gap-2 justify-center">
      Thank you for taking a step further into my creative world. There is
      more to explore, so let&apos;s continue this digital journey
      together. <ArrowBigDown />
    </p>
  </Container>
  )
}
export default Page2