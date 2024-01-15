import type { Meta, StoryObj } from '@storybook/react'

import { CodeButton } from './CodeButton'

const meta = {
  title: 'Buttons/Code Button',
  component: CodeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof CodeButton>

export default meta
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
  }
}

