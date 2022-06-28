import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useEffect } from "react"

import Surveyor from "../../lib/components/Surveyor"
import initSurveyor from "../../lib/core/initSurveyor"

export default {
  title: "Surveyor/Surveyor",
  component: Surveyor,
} as ComponentMeta<typeof Surveyor>

const Template: ComponentStory<typeof Surveyor> = args => {
  useEffect(() => {
    initSurveyor("https://capstone-api-theta.vercel.app/api/telemetry")
  }, [])
  return (
    <>
      <button>Test</button>
      <button>Test</button>
      <button>Test</button>
      <button>Test</button>
      <button>Test</button>
      <button>Test</button>
    </>
  )
}

export const Primary = Template.bind({})
