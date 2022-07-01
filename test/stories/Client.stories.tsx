import { ComponentStory, ComponentMeta } from "@storybook/react"

import Client from "../../lib/components/Client"

export default {
  title: "Client/primary",
  component: Client,
} as ComponentMeta<typeof Client>

const Template: ComponentStory<typeof Client> = args => {
  return (
    <Client />
  )
}

export const Primary = Template.bind({})
