import type { Meta, StoryObj } from '@storybook/react'
import { Inventory } from './Inventory'
import sweImage from '../../assets/imgs/pixil-frame-0.png'

const meta = {
  title: 'Inventory/Main Inventory',
  component: Inventory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Inventory>

export default meta
type Story = StoryObj<typeof meta>;

const items = [
  { imageUrl: sweImage, quantity: 23, id: 'sweEng' },
  { imageUrl: 'path_to_image2.jpg', quantity: 0 },
  { imageUrl: 'path_to_image2.jpg', quantity: 0 },
  { imageUrl: 'path_to_image2.jpg', quantity: 0 },
  { imageUrl: 'path_to_image2.jpg', quantity: 0 },
]

export const Primary: Story = {
  args: {
    items
  }
}
