import { Content, DropContainer } from "./styles";
import { Button } from "../Button";
import UploadIcon from "../../assets/icons/upload.svg?react";
import { DropzoneRootProps } from "react-dropzone";

type Props = {
  isBorder: boolean;
  getRootProps: <T extends DropzoneRootProps>(
    props?: T | undefined
  ) => T | undefined;
  children?: React.ReactNode;
};

export const DropContainerAddUpload = ({
  isBorder,
  getRootProps,
  children,
}: Props) => {
  return (
    <Content isBorder={isBorder} {...getRootProps()}>
      <DropContainer>
        <Button
          text="Click to upload"
          onClick={() => {}}
          variant="outlined"
          color="secondary"
          size="large"
          startIcon={<UploadIcon />}
        />
        <span>or</span>
        <span>Drag and drop a file here</span>
      </DropContainer>
      {children && children}
    </Content>
  );
};
