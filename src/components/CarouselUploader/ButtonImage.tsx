import AddIcon from "../../assets/icons/add.svg?react";
import { useDropzone } from "react-dropzone";
import { ContainerButton } from "./styles";

type Props = {
  onDrop: (files: File[]) => void;
  accept: Record<string, string[]>; // Record<string, string[]> is a type that represents an object with string keys and string[] values.
};

export const ButtonAddNewImages = ({ onDrop, accept }: Props) => {
  const { getRootProps } = useDropzone({
    onDrop,
    accept: accept,
  });

  return (
    <ContainerButton {...getRootProps()}>
      <AddIcon />
      <span>Add new images</span>
    </ContainerButton>
  );
};
