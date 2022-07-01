import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useEffect } from "react"

import Surveyor from "../../lib/components/Surveyor"
import initSurveyor from "../../lib/core/initSurveyor"

export default {
  title: "Surveyor/primary",
  component: Surveyor,
} as ComponentMeta<typeof Surveyor>

const Template: ComponentStory<typeof Surveyor> = args => {
  // useEffect(() => {
  //   initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  // }, [])
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%",
      }}>
      <Surveyor
        {...args}
        apiUrl="https://capstone-api-theta.vercel.app/api/telemetry"
        debug={true}>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
        <button>Test</button>
      </Surveyor>
    </div>
  )
}

export const Primary = Template.bind({})
