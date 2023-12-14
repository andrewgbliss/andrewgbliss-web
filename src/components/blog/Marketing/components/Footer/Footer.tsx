import { Card } from "~/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="h-8 sm:h-16" />
      <div className="lud-container">
        <div className="px-2 md:px-6 xl:p-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            <Card title="Help">
              <a className="link block" href={"/about"}>
                About
              </a>
              <a className="link block" href={"/contact"}>
                Contact
              </a>
              <a className="link block" href={"/mentor"}>
                Mentoring
              </a>
              <a className="link block" href={"/support"}>
                Support
              </a>
            </Card>
            <Card title="Browse">
              <a className="link block" href={"/articles"}>
                Articles
              </a>
              <a className="link block" href={"/courses"}>
                Courses
              </a>
              <a className="link block" href={"/app-jams"}>
                App Jams
              </a>
            </Card>
            <Card title="Terms">
              <a className="link block" href={"/terms-of-use"}>
                Terms of Use
              </a>
              <a className="link block" href={"/privacy-policy"}>
                Privacy Policy
              </a>
            </Card>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="py-4 text-center">
            <div>Website Name</div>
            <div>Copyright &copy; {new Date().getFullYear()}</div>
          </div>
        </div>
      </div>
      <div className="h-8 sm:h-16" />
    </footer>
  );
}
