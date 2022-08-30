import { FC } from "react"

interface IconProps {
  title?: string
  spanClass?: string
  svgClass?: string
  onClick?: () => void
}

// SVGs from https://iconer.app
export const CancelIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19.424 4.573a10.501 10.501 0 1 0-14.85 14.849 10.5 10.5 0 1 0 14.85-14.849Zm.825 7.425a8.207 8.207 0 0 1-1.678 4.98L7.018 5.426A8.207 8.207 0 0 1 12 3.747c4.55 0 8.25 3.704 8.25 8.25Zm-16.5 0a8.207 8.207 0 0 1 1.679-4.981L16.98 18.569A8.208 8.208 0 0 1 12 20.247c-4.547 0-8.25-3.7-8.25-8.25Z"></path>
    </svg>
  </span>
)
export const DatabaseIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a9 3 0 1 0 0 6 9 3 0 1 0 0-6z"></path>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  </span>
)
export const PieChartIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
    </svg>
  </span>
)
export const FilmIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18"></rect>
      <path d="M7 2v20"></path>
      <path d="M17 2v20"></path>
      <path d="M2 12h20"></path>
      <path d="M2 7h5"></path>
      <path d="M2 17h5"></path>
      <path d="M17 17h5"></path>
      <path d="M17 7h5"></path>
    </svg>
  </span>
)
export const SaveIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M17.833 1.5H3A1.5 1.5 0 0 0 1.5 3v18A1.5 1.5 0 0 0 3 22.5h18a1.504 1.504 0 0 0 1.5-1.5V6.167L17.833 1.5ZM5.25 8.25v-3h9v3h-9Zm10.496 8.426a3.751 3.751 0 1 1-3.922-3.922 3.76 3.76 0 0 1 3.922 3.922Z"></path>
    </svg>
  </span>
)
export const PauseIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75 20.25H7.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75Z"></path>
      <path d="M16.5 20.25h-2.25a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75Z"></path>
    </svg>
  </span>
)
export const StopIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M18.375 20.25H5.625a1.875 1.875 0 0 1-1.875-1.875V5.625A1.875 1.875 0 0 1 5.625 3.75h12.75a1.875 1.875 0 0 1 1.875 1.875v12.75a1.875 1.875 0 0 1-1.875 1.875Z"></path>
    </svg>
  </span>
)
export const PlayIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V5.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021l11.618 6.954a1.686 1.686 0 0 1 0 2.86l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"></path>
    </svg>
  </span>
)
export const SearchIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m21.407 19.753-4.41-4.41a8.148 8.148 0 0 0 1.633-4.903c0-4.516-3.674-8.19-8.19-8.19s-8.19 3.674-8.19 8.19 3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM4.59 10.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"></path>
    </svg>
  </span>
)
export const ReceiptIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 15.75V2.25L9 3l1.5-.75 1.497.75 1.518-.75L15 3l1.49-.75 1.497.75 1.513-.75L21 3l1.5-.75v10.5"></path>
      <path d="M22.5 12.75V18a3.75 3.75 0 0 1-3.75 3.75v0A3.75 3.75 0 0 1 15 18v-2.25H2.25a.743.743 0 0 0-.75.75c0 3 .316 5.25 3.75 5.25h13.5"></path>
      <path d="M10.5 6.75h9"></path>
      <path d="M13.5 10.5h6"></path>
    </svg>
  </span>
)
export const ReceiptFilledIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m21 2.25-1.5-.75-1.5.75-1.5-.75-1.5.75-1.5-.75-1.5.75-1.5-.75-1.5.75-2.25-.75v12.002h10.5v6.373c0 1.45 1.55 2.625 3 2.625h.563c1.45 0 2.437-1.175 2.437-2.625V1.5L21 2.25Zm-8.227 9-.023-1.5h7.477l.023 1.5h-7.477Zm-3-3.75L9.75 6h10.477l.023 1.5H9.773Z"></path>
      <path d="M15.75 19.875V15h-15v1.5c0 2.37.27 3.357.678 4.108.69 1.273 1.94 1.892 3.822 1.892h12s-1.5-.938-1.5-2.625Z"></path>
    </svg>
  </span>
)
export const CatalogueIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="34.31"
      height="28.521"
      viewBox="0 0 34.31 28.521">
      <path
        id="Icon_awesome-store"
        d="M33.535,6.607,29.92.836A1.783,1.783,0,0,0,28.41,0H5.906A1.783,1.783,0,0,0,4.4.836L.781,6.607c-1.866,2.98-.212,7.125,3.275,7.6a5.789,5.789,0,0,0,.763.05A5.5,5.5,0,0,0,8.93,12.411a5.5,5.5,0,0,0,8.222,0,5.5,5.5,0,0,0,8.222,0,5.519,5.519,0,0,0,4.111,1.844,5.727,5.727,0,0,0,.763-.05C33.747,13.737,35.407,9.592,33.535,6.607ZM29.5,16.043a7.068,7.068,0,0,1-1.643-.212v5.559H6.463V15.831a7.38,7.38,0,0,1-1.643.212,7.516,7.516,0,0,1-1-.067,7.005,7.005,0,0,1-.914-.2V26.738a1.781,1.781,0,0,0,1.783,1.783H29.641a1.781,1.781,0,0,0,1.783-1.783V15.776a5.687,5.687,0,0,1-.914.2A7.747,7.747,0,0,1,29.5,16.043Z"
        transform="translate(-0.004)"
      />
    </svg>
  </span>
)
export const DeleteIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6h18"></path>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <path d="M10 11v6"></path>
      <path d="M14 11v6"></path>
    </svg>
  </span>
)
export const EditIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  </span>
)
export const PlusIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  </span>
)
export const MinusIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
        fillRule="nonzero"
      />
    </svg>
  </span>
)
export const StoreIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="34.31"
      height="34.309"
      viewBox="0 0 34.31 34.309">
      <path
        id="Icon_awesome-cash-register"
        d="M34.248,25.383,32.459,14.662a2.145,2.145,0,0,0-2.118-1.789h-16.4V8.584h6.433a1.075,1.075,0,0,0,1.072-1.072V1.072A1.075,1.075,0,0,0,20.371,0H3.216A1.075,1.075,0,0,0,2.144,1.072V7.505A1.075,1.075,0,0,0,3.216,8.577H9.649v4.289H3.96a2.15,2.15,0,0,0-2.118,1.789L.053,25.377a4.157,4.157,0,0,0-.06.7v6.084a2.142,2.142,0,0,0,2.144,2.144h30.02A2.142,2.142,0,0,0,34.3,32.165V26.087A3.557,3.557,0,0,0,34.248,25.383ZM18.762,16.618a1.075,1.075,0,0,1,1.072-1.072h1.072a1.075,1.075,0,0,1,1.072,1.072v1.072a1.075,1.075,0,0,1-1.072,1.072H19.835a1.075,1.075,0,0,1-1.072-1.072Zm-2.144,4.289H17.69a1.075,1.075,0,0,1,1.072,1.072v1.072a1.075,1.075,0,0,1-1.072,1.072H16.618a1.075,1.075,0,0,1-1.072-1.072V21.979A1.075,1.075,0,0,1,16.618,20.907Zm-2.144-5.361a1.075,1.075,0,0,1,1.072,1.072v1.072a1.075,1.075,0,0,1-1.072,1.072H13.4a1.075,1.075,0,0,1-1.072-1.072V16.618A1.075,1.075,0,0,1,13.4,15.546ZM5.36,5.361V3.216H18.226V5.361Zm2.68,13.4H6.969A1.075,1.075,0,0,1,5.9,17.691V16.618a1.075,1.075,0,0,1,1.072-1.072H8.041a1.075,1.075,0,0,1,1.072,1.072v1.072A1.075,1.075,0,0,1,8.041,18.763Zm1.072,4.289V21.979a1.075,1.075,0,0,1,1.072-1.072h1.072a1.075,1.075,0,0,1,1.072,1.072v1.072a1.075,1.075,0,0,1-1.072,1.072H10.185A1.075,1.075,0,0,1,9.113,23.051Zm14.474,7.505a.538.538,0,0,1-.536.536H11.257a.538.538,0,0,1-.536-.536V29.484a.538.538,0,0,1,.536-.536H23.051a.538.538,0,0,1,.536.536ZM25.2,23.051a1.075,1.075,0,0,1-1.072,1.072H23.051a1.075,1.075,0,0,1-1.072-1.072V21.979a1.075,1.075,0,0,1,1.072-1.072h1.072A1.075,1.075,0,0,1,25.2,21.979Zm3.216-5.361a1.075,1.075,0,0,1-1.072,1.072H26.267A1.075,1.075,0,0,1,25.2,17.691V16.618a1.075,1.075,0,0,1,1.072-1.072H27.34a1.075,1.075,0,0,1,1.072,1.072Z"
        transform="translate(0.007)"
      />
    </svg>
  </span>
)
export const LoadingIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff">
      <g fill="none" fillRule="evenodd" strokeWidth="2">
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
    </svg>
  </span>
)
export const RightArrowIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M21 12l-18 12v-24z" />
    </svg>
  </span>
)
export const DownArrowIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M12 21l-12-18h24z" />
    </svg>
  </span>
)
export const ChevronDownIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m6 9 6 6 6-6"></path>
    </svg>
  </span>
)
export const SunIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  </span>
)
export const MoonIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  </span>
)
export const ExitIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8.25V6.375A1.875 1.875 0 0 0 13.125 4.5h-9A1.875 1.875 0 0 0 2.25 6.375v11.25A1.875 1.875 0 0 0 4.125 19.5h9A1.875 1.875 0 0 0 15 17.625V15.75"></path>
      <path d="M18 8.25 21.75 12 18 15.75"></path>
      <path d="M8.953 12H21.75"></path>
    </svg>
  </span>
)
export const MenuIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" />
    </svg>
  </span>
)
export const CaretUpIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z" />
    </svg>
  </span>
)
export const CaretLeftIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
    </svg>
  </span>
)
export const CaretRightIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z" />
    </svg>
  </span>
)
export const CaretDownIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
    </svg>
  </span>
)
export const CogIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={props.svgClass}
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  </span>
)
