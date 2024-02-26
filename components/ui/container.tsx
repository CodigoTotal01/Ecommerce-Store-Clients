interface ContainerProps {
  children: React.ReactNode;
}
// centra el contenido de la pagina
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
