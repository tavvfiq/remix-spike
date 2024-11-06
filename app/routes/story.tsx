import { ClientOnly } from "remix-utils/client-only";
import MyStory from "~/components/story.client";


export default function Page() {
  return <div>
    <ClientOnly>{() => <MyStory />}</ClientOnly>
  </div>
}
