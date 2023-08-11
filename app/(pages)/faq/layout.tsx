import "../globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <p>section for this part</p>
      {children}
    </section>
  );
};

export default RootLayout;
