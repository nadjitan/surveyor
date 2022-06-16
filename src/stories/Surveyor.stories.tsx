import { ComponentStory, ComponentMeta } from "@storybook/react"

import Surveyor from "../../lib/components/Surveyor"

export default {
  title: "Surveyor/Surveyor",
  component: Surveyor,
} as ComponentMeta<typeof Surveyor>

const Template: ComponentStory<typeof Surveyor> = args => (
  <Surveyor
    {...args}
    debug={true}
    apiUrl={"https://capstone-api-theta.vercel.app/api/telemetry"}
  >
    <button>Test</button>
    <button>Test</button>
    <button>Test</button>
    <button>Test</button>
    <button>Test</button>
    <button>Test</button>
  </Surveyor>
)

export const Primary = Template.bind({})
