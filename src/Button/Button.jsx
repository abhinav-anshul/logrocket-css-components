import { styled } from "@phntms/css-components"
import rootStyles from "../style.module.css"
import buttonStyles from "./button.module.css"

function useButton() {
  const Button = styled("button", {
    css: [rootStyles.root, buttonStyles.btn],
    variants: {
      primary: {
        true: buttonStyles.primary,
      },
      secondary: {
        true: buttonStyles.secondary,
      },
      destructive: {
        true: buttonStyles.destructive,
      },
      ghost: {
        true: buttonStyles.ghost,
      },
      outline: {
        true: buttonStyles.outline,
      },
    },
  })
  return Button
}

export { useButton }
