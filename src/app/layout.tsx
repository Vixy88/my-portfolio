import "./globals.css";

export const metadata = {
  title: "MJ Portfolio",
  description:
    "This is my portfolio to give some insight into my person and what my professional capabilities and accomplishments as a software engineer is, enjoy the tour 🥳",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
