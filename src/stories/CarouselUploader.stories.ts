import type { Meta, StoryObj } from '@storybook/react';
import { CarouselUploader } from '../components/CarouselUploader';
import 'swiper/css';
import 'swiper/css/navigation';

const meta = {
  title: 'Example/CarouselUploader',
  component: CarouselUploader,
  tags: ['autodocs'],
  argTypes: {
    data:[{
      url_image: '',
      id: '',
    }]
  },

} satisfies Meta<typeof CarouselUploader>;

export default meta;
type Story = StoryObj<typeof meta>;
export const CarouselUploaderView: Story = {
  args: {
    data: [
      {
        id: "1",
        url_image: "https://picsum.photos/200/300",
      },
      {
        id: "3",
        url_image: "https://picsum.photos/200/400",
      }
    ],
  },
};