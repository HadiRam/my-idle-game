import type { Meta, StoryObj } from '@storybook/react'
import { Map } from './Map'

const meta = {
  title: 'Maps/Map',
  component: Map,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Map>

export default meta
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    squares: 49  }
}
