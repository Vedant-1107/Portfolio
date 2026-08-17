import type {Metadata, Viewport} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedant Salunkhe — Software & AI Builder",

  description:
    "Portfolio of Vedant Salunkhe — Computer Engineering student building AI, computer vision and full-stack systems.",

  keywords: [
    "Vedant Salunkhe",
    "Computer Engineering",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "React",
    "Python",
    "FastAPI",
    "Full Stack Developer",
  ],

  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  );
}