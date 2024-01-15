import type { Meta, StoryObj } from '@storybook/react'

import { Item } from './Item'

const meta = {
  title: 'Items/Buy SWEEngineer',
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


export const Primary: Story = {
  args: {
    title: 'Code Software'
  }
}

