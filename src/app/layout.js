import "./globals.css";
import Sidebar from "./Sidebar";

export const metadata = {
  title: "BCS CMS",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row">
          <Sidebar />
          <main className="flex-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
