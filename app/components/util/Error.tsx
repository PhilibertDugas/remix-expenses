import { ReactElement } from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface Props {
  title: string;
  children: ReactElement;
}

function Error({ title, children }: Props) {
  return (
    <div className="error">
      <div className="icon">
        <FaExclamationCircle />
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Error;
