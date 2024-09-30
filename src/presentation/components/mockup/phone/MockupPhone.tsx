import React from "react";
import { MockupPhoneProps } from "..";

const MockupPhone: React.FC<MockupPhoneProps> = ({ id, urlImage }) => {
  return <img key={id} src={urlImage} alt="Mockup QR" />;
};

export default MockupPhone;
