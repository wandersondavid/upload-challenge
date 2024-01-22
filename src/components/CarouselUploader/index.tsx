import { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";
import { Container, SwiperSlideStyled, UploadMessage } from "./styles";
import { ButtonAddNewImages } from "./ButtonImage";
import { DropContainerAddUpload } from "./DropContainerAddUpload";
import { ImagePreview } from "./ImagePreview";
import { Carousel } from "./Carousel";
import ErrIcon from "../../assets/icons/delete.svg?react";
import UploadOnDragIcon from "../../assets/icons/up_ico.svg?react";

const ACCEPT_TYPES = {
  "image/*": [".png", ".jpg", ".jpeg"],
};

type ImageTypes = {
  id: string;
  url_image: string;
};

type Props = {
  onUploadImages: (files: File[]) => void;
  data: ImageTypes[];
};

export const CarouselUploader = ({ data, onUploadImages }: Props) => {
  const [images, setImages] = useState<ImageTypes[]>(data ?? []);
  const [autoScroll, setAutoScroll] = useState(false);

  const handleDrop = (files: File[]) => {
    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      url_image: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
    setAutoScroll(true);
    onUploadImages(files);
  };

  const { getRootProps, isDragActive, isDragReject } = useDropzone({
    onDrop: handleDrop,
    accept: ACCEPT_TYPES,
    noClick: !!images.length,
  });

  const renderDragMessage = useCallback(() => {
    if (isDragActive) {
      return (
        <UploadMessage>
          <UploadOnDragIcon />
          <h2>Drag here to upload</h2>
          <p>PNG or JPG (max. 800x800px)</p>
        </UploadMessage>
      );
    }

    if (isDragReject) {
      return (
        <UploadMessage>
          <ErrIcon />
          <h2>Failed to upload</h2>
          <p>
            Please check if the image has the right size and extension and
            <span>try again</span>
          </p>
        </UploadMessage>
      );
    }
    return null;
  }, [isDragActive, isDragReject]);

  const handleDeleteImage = (idImage: string) => {
    const newImages = images.filter((img) => img.id !== idImage);
    setImages(newImages);
  };

  const renderImageSlides = (images: ImageTypes[]) => (
    <>
      <SwiperSlideStyled>
        <ButtonAddNewImages onDrop={handleDrop} accept={ACCEPT_TYPES} />
      </SwiperSlideStyled>

      {images.map((image) => (
        <SwiperSlideStyled key={image.id}>
          <ImagePreview data={image} onDeleteImage={handleDeleteImage} />
        </SwiperSlideStyled>
      ))}
    </>
  );

  return (
    <Container>
      {!images.length && (
        <DropContainerAddUpload
          isBorder={!images.length}
          getRootProps={getRootProps}
        >
          {renderDragMessage()}
        </DropContainerAddUpload>
      )}

      {!!images.length && (
        <Carousel
          isBorder={false}
          setAutoScroll={setAutoScroll}
          autoScroll={autoScroll}
          componentList={renderImageSlides(images)}
          getRootProps={getRootProps}
        >
          {renderDragMessage()}
        </Carousel>
      )}
    </Container>
  );
};
