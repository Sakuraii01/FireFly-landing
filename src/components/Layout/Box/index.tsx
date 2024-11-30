export const MarginGradientBox = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-custom-gradient2 py-3">
      <div className="bg-white">{children}</div>
    </div>
  );
};
