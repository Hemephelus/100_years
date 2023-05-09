import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "100 years",
  description: "100 years left",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body >
        <NavBar />
        <div> {children}</div>
      </body>
    </html>
  );
}
