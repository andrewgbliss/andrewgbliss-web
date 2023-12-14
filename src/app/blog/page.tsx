import Layout from "~/components/blog/Marketing";
import Cover from "~/components/blog/Marketing/components/Cover";
import Introduction from "~/components/blog/Marketing/components/Introduction";
import Parallax from "~/components/blog/Marketing/components/Parallax";
import Pricing from "~/components/blog/Marketing/components/Pricing";
import Newsletter from "~/components/blog/Marketing/components/Newsletter";

export default function Index() {
  return (
    <Layout>
      <Cover />
      <Introduction />
      <Parallax />
      <Pricing />
      <Newsletter />
    </Layout>
  );
}
