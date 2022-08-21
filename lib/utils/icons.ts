import { stylesToString } from "./client"

interface IconString {
  fill?: string
  stroke?: string
  width?: number
  height?: number
}

export const TempIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
<svg
${svgStyles && `style="${stylesToString(svgStyles!)}"`}
width="46"
height="46"
fill="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
  <path d="M19.424 4.573a10.501 10.501 0 1 0-14.85 14.849 10.5 10.5 0 1 0 14.85-14.849Zm.825 7.425a8.207 8.207 0 0 1-1.678 4.98L7.018 5.426A8.207 8.207 0 0 1 12 3.747c4.55 0 8.25 3.704 8.25 8.25Zm-16.5 0a8.207 8.207 0 0 1 1.679-4.981L16.98 18.569A8.208 8.208 0 0 1 12 20.247c-4.547 0-8.25-3.7-8.25-8.25Z"></path>
</svg>
</span>`

export const SaveIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
  <svg
    ${svgStyles && `style="${stylesToString(svgStyles!)}"`}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.833 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h18a1.504 1.504 0 0 0 1.5-1.5V6.167L17.833 1.5ZM5.25 8.25v-3h9v3h-9Zm10.496 8.426a3.751 3.751 0 1 1-3.922-3.922 3.76 3.76 0 0 1 3.922 3.922Z"></path>
  </svg>
</span>`

export const PauseIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
  <svg
    ${svgStyles && `style="${stylesToString(svgStyles!)}"`}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.75 20.25H7.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75Z"></path>
    <path d="M16.5 20.25h-2.25a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75Z"></path>
  </svg>
</span>`

export const StopIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
  <svg
    ${svgStyles && `style="${stylesToString(svgStyles!)}"`}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.375 20.25H5.625a1.875 1.875 0 0 1-1.875-1.875V5.625A1.875 1.875 0 0 1 5.625 3.75h12.75a1.875 1.875 0 0 1 1.875 1.875v12.75a1.875 1.875 0 0 1-1.875 1.875Z"></path>
  </svg>
</span>`

export const PlayIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
  <svg
    ${svgStyles && `style="${stylesToString(svgStyles!)}"`}
    width="46"
    height="46"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V5.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021l11.618 6.954a1.686 1.686 0 0 1 0 2.86l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"></path>
  </svg>
</span>`

export const SearchIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}>
<svg
  ${svgStyles && `style="${stylesToString(svgStyles!)}"`}
  width="46"
  height="46"
  fill="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"></path>
</svg>
</span>`

export const DeleteIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}><svg
${svgStyles && `style="${stylesToString(svgStyles!)}"`}
width="46"
height="46"
fill="none"
stroke="currentColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
  <path d="M3 6h18"></path>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  <path d="M10 11v6"></path>
  <path d="M14 11v6"></path>
</svg></span>`

export const EditIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}><svg
${svgStyles && `style="${stylesToString(svgStyles!)}"`}
width="46"
height="46"
fill="none"
stroke="currentColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="2"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg></span>`

export const ExitIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}><svg
${svgStyles && `style="${stylesToString(svgStyles!)}"`}
width="46"
height="46"
fill="none"
stroke="currentColor"
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="1.5"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg">
  <path d="M15 8.25V6.375A1.875 1.875 0 0 0 13.125 4.5h-9A1.875 1.875 0 0 0 2.25 6.375v11.25A1.875 1.875 0 0 0 4.125 19.5h9A1.875 1.875 0 0 0 15 17.625V15.75"></path>
  <path d="M18 8.25 21.75 12 18 15.75"></path>
  <path d="M8.953 12H21.75"></path>
</svg></span>`

export const LoadingIcon = (
  svgStyles?: Partial<CSSStyleDeclaration>,
  spanStyles?: Partial<CSSStyleDeclaration>
) => `<span ${spanStyles && `style="${stylesToString(spanStyles!)}"`}><svg
${svgStyles && `style="${stylesToString(svgStyles!)}"`}
width="44"
height="44"
viewBox="0 0 44 44"
xmlns="http://www.w3.org/2000/svg"
stroke="#fff">
<g fill="none" fill-rule="evenodd" stroke-width="2">
  <circle cx="22" cy="22" r="1">
    <animate
      attributeName="r"
      begin="0s"
      dur="1.8s"
      values="1; 20"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0.165, 0.84, 0.44, 1"
      repeatCount="indefinite"
    />
    <animate
      attributeName="stroke-opacity"
      begin="0s"
      dur="1.8s"
      values="1; 0"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0.3, 0.61, 0.355, 1"
      repeatCount="indefinite"
    />
  </circle>
  <circle cx="22" cy="22" r="1">
    <animate
      attributeName="r"
      begin="-0.9s"
      dur="1.8s"
      values="1; 20"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0.165, 0.84, 0.44, 1"
      repeatCount="indefinite"
    />
    <animate
      attributeName="stroke-opacity"
      begin="-0.9s"
      dur="1.8s"
      values="1; 0"
      calcMode="spline"
      keyTimes="0; 1"
      keySplines="0.3, 0.61, 0.355, 1"
      repeatCount="indefinite"
    />
  </circle>
</g>
</svg></span>`
