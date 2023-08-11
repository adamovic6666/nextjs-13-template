const RenderHTML = ({ text }: { text: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default RenderHTML;
