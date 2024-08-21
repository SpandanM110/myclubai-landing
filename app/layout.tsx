import "@/styles/globals.css";
export const metadata = {
  title: "myclubai",
  description: "myclubai is a platform that helps you to have your own personalized ai bundles.",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
