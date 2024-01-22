import { ContentSwiper } from "./styles";
import DeleteIcon from "../../assets/icons/delete.svg?react";

type ImageProps ={
  id: string;
  url_image: string;
}

type Props = {
  data: ImageProps;
  onDeleteImage: (image: string) => void;
};
export const ImagePreview = ({ data, onDeleteImage }: Props) => {
  return (
    <ContentSwiper>
      <img src={data.url_image} alt="preview" />
      <div onClick={() => onDeleteImage(data.id)}>
        <DeleteIcon />
      </div>
    </ContentSwiper>
  );
};
