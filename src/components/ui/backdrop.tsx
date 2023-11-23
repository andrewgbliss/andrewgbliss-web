interface Props {
  open: boolean;
  children: React.ReactElement;
}

export const Backdrop: React.FC<Props> = (props) => {
  const { open, children } = props;
  if (!open) {
    return <></>;
  }
  return (
    <div className="fixed left-0 top-0 z-40 h-screen w-screen">
      <div className="absolute h-screen w-screen bg-gray-100 opacity-90"></div>
      <div className="fixed z-40 h-screen w-screen overflow-y-auto">
        <div className="flex h-screen w-screen items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};
