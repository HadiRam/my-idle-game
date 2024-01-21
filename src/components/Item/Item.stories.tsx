import type { Meta, StoryObj } from '@storybook/react'
import engineerImage from '../../assets/imgs/pixil-frame-0.png'
import { Item } from './Item'

const meta = {
  title: 'Items/PurchaseItems',
  component: Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>;


export const sweEngineer: Story = {
  args: {
    title: 'Buy Software Engineer',
    image: engineerImage
  }
}
