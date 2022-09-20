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
export const ListIcon: FC<IconProps> = props => (
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
      <path d="M7.5 6.75H21"></path>
      <path d="M7.5 12H21"></path>
      <path d="M7.5 17.25H21"></path>
      <path d="M3.75 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
      <path d="M3.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
      <path d="M3.75 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
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
export const ExIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      width="46"
      height="46"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M5.152 5.152a1.2 1.2 0 0 1 1.696 0L12 10.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L13.697 12l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L12 13.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 0-1.696Z"
        clipRule="evenodd"></path>
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
export const HelpIcon: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="32.825"
      height="32.825"
      viewBox="0 0 32.825 32.825">
      <g
        id="Icon_ionic-ios-help-circle-outline"
        data-name="Icon ionic-ios-help-circle-outline"
        transform="translate(-3.375 -3.375)">
        <path
          id="Path_163"
          data-name="Path 163"
          d="M19.787,5.584A14.2,14.2,0,1,1,9.743,9.743,14.109,14.109,0,0,1,19.787,5.584m0-2.209A16.412,16.412,0,1,0,36.2,19.787,16.41,16.41,0,0,0,19.787,3.375Z"
          fill="#6c6978"
        />
        <path
          id="Path_164"
          data-name="Path 164"
          d="M18.605,11.25c2.959,0,4.995,1.641,4.995,4a3.859,3.859,0,0,1-2.217,3.5c-1.373.8-1.839,1.381-1.839,2.391v.623H16.806l-.024-.679a3.285,3.285,0,0,1,1.862-3.472c1.334-.8,1.894-1.3,1.894-2.28a1.915,1.915,0,0,0-2.123-1.7A2,2,0,0,0,16.3,15.582H13.5C13.555,13.041,15.433,11.25,18.605,11.25ZM16.53,24.774A1.694,1.694,0,1,1,18.219,26.4,1.653,1.653,0,0,1,16.53,24.774Z"
          transform="translate(1.237 0.962)"
          fill="#6c6978"
        />
      </g>
    </svg>
  </span>
)
export const XCircleIcon: FC<IconProps> = props => (
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
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
      <path d="m15 9-6 6"></path>
      <path d="m9 9 6 6"></path>
    </svg>
  </span>
)

export const VEmpty: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="280.303"
      height="351.275"
      viewBox="0 0 280.303 351.275">
      <g
        id="Group_56"
        data-name="Group 56"
        transform="translate(-614.848 -393.725)">
        <g
          id="Group_55"
          data-name="Group 55"
          transform="translate(614.848 393.725)">
          <ellipse
            id="Ellipse_29"
            data-name="Ellipse 29"
            cx="108.431"
            cy="19.156"
            rx="108.431"
            ry="19.156"
            transform="translate(0 254.997)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_30"
            data-name="Ellipse 30"
            cx="105.97"
            cy="105.97"
            r="105.97"
            transform="translate(68.362)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_31"
            data-name="Ellipse 31"
            cx="87.482"
            cy="87.482"
            r="87.482"
            transform="translate(86.851 18.488)"
            opacity="0.05"
          />
          <circle
            id="Ellipse_32"
            data-name="Ellipse 32"
            cx="71.699"
            cy="71.699"
            r="71.699"
            transform="translate(102.634 34.271)"
            opacity="0.05"
          />
          <circle
            id="Ellipse_33"
            data-name="Ellipse 33"
            cx="51.407"
            cy="51.407"
            r="51.407"
            transform="translate(122.926 54.563)"
            opacity="0.05"
          />
          <path
            id="Path_152"
            data-name="Path 152"
            d="M388.129,361.232s-8.331,23.451-4.629,31.783a103.455,103.455,0,0,0,9.566,16.354S390.907,362.775,388.129,361.232Z"
            transform="translate(-318.828 -245.778)"
            fill="#d0cde1"
          />
          <path
            id="Path_153"
            data-name="Path 153"
            d="M388.129,361.232s-8.331,23.451-4.629,31.783a103.455,103.455,0,0,0,9.566,16.354S390.907,362.775,388.129,361.232Z"
            transform="translate(-318.828 -245.778)"
            opacity="0.1"
          />
          <path
            id="Path_154"
            data-name="Path 154"
            d="M394.543,514.608s-.617,5.863-.926,6.171.309.926,0,1.851-.617,2.16,0,2.469-3.394,27.463-3.394,27.463-9.874,12.96-5.863,33.326l1.234,20.674s9.566.617,9.566-2.777a56.528,56.528,0,0,1-.617-5.863c0-1.851,1.543-1.851.617-2.777s-.926-1.543-.926-1.543,1.543-1.234,1.234-1.543,2.777-22.217,2.777-22.217,3.394-3.394,3.394-5.246v-1.851s1.543-4.011,1.543-4.32,8.331-19.131,8.331-19.131l3.394,13.577,3.7,19.44s1.851,17.589,5.554,24.377c0,0,6.48,22.217,6.48,21.6s10.8-2.16,10.491-4.937-6.48-41.657-6.48-41.657l1.543-57.7Z"
            transform="translate(-319.38 -344.846)"
            fill="#2f2e41"
          />
          <path
            id="Path_155"
            data-name="Path 155"
            d="M382.75,766.146s-8.331,16.354-2.777,16.971,7.714.617,10.183-1.851a41.08,41.08,0,0,1,6.283-4.525,8.125,8.125,0,0,0,3.855-7.726c-.163-1.51-.727-2.754-2.115-2.869-3.7-.309-8.023-3.7-8.023-3.7Z"
            transform="translate(-315.918 -505.972)"
            fill="#2f2e41"
          />
          <path
            id="Path_156"
            data-name="Path 156"
            d="M513.561,800.385s-8.331,16.354-2.777,16.971,7.714.617,10.183-1.851a41.08,41.08,0,0,1,6.283-4.525,8.125,8.125,0,0,0,3.855-7.726c-.163-1.51-.727-2.754-2.115-2.869-3.7-.309-8.023-3.7-8.023-3.7Z"
            transform="translate(-400.751 -528.177)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_34"
            data-name="Ellipse 34"
            cx="12.971"
            cy="12.971"
            r="12.971"
            transform="translate(91.033 62.749)"
            fill="#ffb8b8"
          />
          <path
            id="Path_157"
            data-name="Path 157"
            d="M454.925,260.308s-9.265,17.048-10.006,17.048,16.677,5.559,16.677,5.559,4.818-16.307,5.559-17.789Z"
            transform="translate(-359.26 -180.326)"
            fill="#ffb8b8"
          />
          <path
            id="Path_158"
            data-name="Path 158"
            d="M437,295.153s-18.514-10.183-20.366-9.874-21.6,17.589-21.291,24.686,2.777,18.823,2.777,18.823.926,32.708,2.777,33.017-.309,5.863.309,5.863,43.2,0,43.508-.926S437,295.153,437,295.153Z"
            transform="translate(-327.12 -196.516)"
            fill="#d0cde1"
          />
          <path
            id="Path_159"
            data-name="Path 159"
            d="M531.891,521.892s5.863,17.9.926,17.28-7.1-15.429-7.1-15.429Z"
            transform="translate(-411.676 -349.97)"
            fill="#ffb8b8"
          />
          <path
            id="Path_160"
            data-name="Path 160"
            d="M480.479,310.255s-11.417,2.469-9.566,17.9,5.246,30.857,5.246,30.857L487.576,384l1.234,4.629,8.331-2.16-6.172-35.794s-2.16-38.263-4.937-39.5A11.95,11.95,0,0,0,480.479,310.255Z"
            transform="translate(-376.001 -212.698)"
            fill="#d0cde1"
          />
          <path
            id="Path_161"
            data-name="Path 161"
            d="M277.5,412.45l14.194,25.3L279.735,411.09Z"
            transform="translate(-179.965 -266.601)"
            opacity="0.1"
          />
          <path
            id="Path_162"
            data-name="Path 162"
            d="M480.964,215.538l.043-.991,1.972.491a2.2,2.2,0,0,0-.884-1.622l2.1-.117a22.662,22.662,0,0,0-15.157-9.367c-4.543-.658-9.6.294-12.717,3.666a15.326,15.326,0,0,0-3.136,5.837c-1.244,3.908-1.5,8.566,1.1,11.743,2.636,3.228,7.241,3.861,11.39,4.26a8.994,8.994,0,0,0,4.342-.295,10.447,10.447,0,0,0-.581-4.582,3.053,3.053,0,0,1-.309-1.459c.184-1.234,1.831-1.545,3.068-1.378s2.724.422,3.537-.525a4.2,4.2,0,0,0,.6-2.459C476.53,216.406,480.943,216.027,480.964,215.538Z"
            transform="translate(-364.046 -143.638)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_35"
            data-name="Ellipse 35"
            cx="15.114"
            cy="15.114"
            r="15.114"
            transform="translate(181.362 246.561)"
            fill="#6c6978"
          />
          <circle
            id="Ellipse_36"
            data-name="Ellipse 36"
            cx="15.114"
            cy="15.114"
            r="15.114"
            transform="translate(3.866 241.289)"
            fill="#6c6978"
          />
          <circle
            id="Ellipse_37"
            data-name="Ellipse 37"
            cx="10.896"
            cy="10.896"
            r="10.896"
            transform="translate(8.084 225.473)"
            fill="#6c6978"
          />
          <circle
            id="Ellipse_38"
            data-name="Ellipse 38"
            cx="7.733"
            cy="7.733"
            r="7.733"
            transform="translate(11.247 211.765)"
            fill="#6c6978"
          />
        </g>
        <text
          id="Empty_Record_a_new_path_to_get_started_"
          data-name="Empty?
Record a new path to get started!"
          transform="translate(755 723)"
          fill="#6c6978"
          font-size="16"
          font-family="Inter Regular, sans-serif">
          <tspan x="-28.034" y="0">
            Empty?
          </tspan>
          <tspan x="-127.386" y="18">
            Record a new path to get started!
          </tspan>
        </text>
      </g>
    </svg>
  </span>
)
export const VWhyRecord: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="293.938"
      height="207.613"
      viewBox="0 0 293.938 207.613">
      <g
        id="Group_53"
        data-name="Group 53"
        transform="translate(-1031.09 -367.414)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="252.771"
          height="172.586"
          transform="translate(1072.257 367.414)"
          fill="#5c38ff"
        />
        <g
          id="Group_34"
          data-name="Group 34"
          transform="translate(1031.09 383.397)">
          <path
            id="Path_64"
            data-name="Path 64"
            d="M251.792,598.781a51.124,51.124,0,0,1-38.241-50.263,20.542,20.542,0,0,1,1.543-8.355,9.455,9.455,0,0,1,6.214-5.442c3.041-.669,6.25.7,8.517,2.835a26,26,0,0,1,5.12,7.751c8.235,16.852,14.492,34.933,16.834,53.543Z"
            transform="translate(-213.545 -408.247)"
            fill="#f2f2f2"
          />
          <path
            id="Path_65"
            data-name="Path 65"
            d="M231.2,535.764l5.772,13.114,5.772,13.113c1.828,4.153,3.652,8.308,5.542,12.434,1.873,4.089,3.81,8.151,5.876,12.146s4.256,7.915,6.637,11.725q.445.712.9,1.418c.209.326.732.024.521-.3-2.426-3.782-4.661-7.682-6.758-11.656s-4.061-8.026-5.95-12.106c-1.9-4.1-3.726-8.238-5.547-12.376L238.207,550.2l-5.772-13.113-.718-1.632c-.156-.355-.677-.048-.521.3Z"
            transform="translate(-224.813 -408.728)"
            fill="#fff"
          />
          <path
            id="Path_66"
            data-name="Path 66"
            d="M251.077,666.609a29.917,29.917,0,0,1-33.423-15.772,12.021,12.021,0,0,1-1.454-4.754,5.533,5.533,0,0,1,1.757-4.5,5.726,5.726,0,0,1,5.187-.828,15.214,15.214,0,0,1,4.75,2.642,100.618,100.618,0,0,1,23.195,23.254Z"
            transform="translate(-215.238 -475.984)"
            fill="#f2f2f2"
          />
          <path
            id="Path_67"
            data-name="Path 67"
            d="M219.394,644.766l6.537,5.25,6.537,5.25c2.07,1.663,4.139,3.327,6.234,4.959,2.076,1.618,4.178,3.2,6.33,4.72s4.346,2.96,6.611,4.3q.423.25.849.494c.2.113.386-.185.188-.3-2.28-1.308-4.494-2.73-6.655-4.227s-4.275-3.071-6.357-4.679-4.158-3.271-6.221-4.928l-6.513-5.231-6.536-5.25-.813-.653c-.177-.142-.364.158-.188.3Z"
            transform="translate(-217.24 -478.506)"
            fill="#fff"
          />
          <path
            id="Path_68"
            data-name="Path 68"
            d="M663.584,184.28H487.979a2.527,2.527,0,0,0-2.524,2.524V305.8a2.527,2.527,0,0,0,2.524,2.524H663.584a2.527,2.527,0,0,0,2.524-2.524V186.8A2.527,2.527,0,0,0,663.584,184.28Zm1.8,121.517a1.8,1.8,0,0,1-1.8,1.8H487.979a1.8,1.8,0,0,1-1.8-1.8V186.8a1.8,1.8,0,0,1,1.8-1.8H663.584a1.8,1.8,0,0,1,1.8,1.8Z"
            transform="translate(-387.408 -184.28)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_8"
            data-name="Rectangle 8"
            width="179.932"
            height="0.721"
            transform="translate(98.407 10.111)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_23"
            data-name="Ellipse 23"
            cx="2.164"
            cy="2.164"
            r="2.164"
            transform="translate(102.373 3.246)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_24"
            data-name="Ellipse 24"
            cx="2.164"
            cy="2.164"
            r="2.164"
            transform="translate(108.593 3.246)"
            fill="#3f3d56"
          />
          <circle
            id="Ellipse_25"
            data-name="Ellipse 25"
            cx="2.164"
            cy="2.164"
            r="2.164"
            transform="translate(114.814 3.246)"
            fill="#3f3d56"
          />
          <path
            id="Path_69"
            data-name="Path 69"
            d="M550.136,249.828H519.847a2.524,2.524,0,1,1,0-5.048h30.289a2.524,2.524,0,0,1,0,5.048Z"
            transform="translate(-407.785 -222.964)"
            fill="#ccc"
          />
          <path
            id="Path_70"
            data-name="Path 70"
            d="M591.6,283.828H519.847a2.524,2.524,0,0,1,0-5.048H591.6a2.524,2.524,0,0,1,0,5.048Z"
            transform="translate(-407.785 -244.704)"
            fill="#ccc"
          />
          <path
            id="Path_71"
            data-name="Path 71"
            d="M777.34,306.3a32.815,32.815,0,0,0,27.06,51.375V329.033Z"
            transform="translate(-570.365 -262.303)"
            fill="#6c63ff"
          />
          <path
            id="Path_72"
            data-name="Path 72"
            d="M814.6,266.78a32.776,32.776,0,0,0-27.06,14.251l27.06,22.73Z"
            transform="translate(-580.568 -237.031)"
            fill="#ccc"
          />
          <path
            id="Path_73"
            data-name="Path 73"
            d="M861.948,332.128h-.361V265.78h.361a33.174,33.174,0,0,1,0,66.348Zm.361-65.625v64.9a32.452,32.452,0,1,0,0-64.9Z"
            transform="translate(-627.913 -236.392)"
            fill="#3f3d56"
          />
          <path
            id="Path_74"
            data-name="Path 74"
            d="M568.576,450.194h-6.13a1.624,1.624,0,0,1-1.623-1.623V430.9a1.624,1.624,0,0,1,1.623-1.623h6.13A1.624,1.624,0,0,1,570.2,430.9v17.669A1.625,1.625,0,0,1,568.576,450.194Z"
            transform="translate(-435.6 -340.936)"
            fill="#ccc"
          />
          <path
            id="Path_75"
            data-name="Path 75"
            d="M618.576,435.487h-6.13a1.624,1.624,0,0,1-1.623-1.623V407.9a1.624,1.624,0,0,1,1.623-1.623h6.13A1.624,1.624,0,0,1,620.2,407.9v25.962A1.624,1.624,0,0,1,618.576,435.487Z"
            transform="translate(-467.571 -326.23)"
            fill="#ff6584"
          />
          <path
            id="Path_76"
            data-name="Path 76"
            d="M668.576,422.7h-6.13a1.624,1.624,0,0,1-1.623-1.623V387.9a1.624,1.624,0,0,1,1.623-1.623h6.13A1.624,1.624,0,0,1,670.2,387.9v33.174A1.624,1.624,0,0,1,668.576,422.7Z"
            transform="translate(-499.541 -313.441)"
            fill="#6c63ff"
          />
          <path
            id="Path_77"
            data-name="Path 77"
            d="M568.256,411.05h-6.13a1.8,1.8,0,0,1-1.8-1.8V369.583a1.8,1.8,0,0,1,1.8-1.8h6.13a1.8,1.8,0,0,1,1.8,1.8v39.664a1.8,1.8,0,0,1-1.8,1.8Zm-6.13-42.549a1.083,1.083,0,0,0-1.082,1.082v39.664a1.083,1.083,0,0,0,1.082,1.082h6.13a1.083,1.083,0,0,0,1.082-1.082V369.583a1.083,1.083,0,0,0-1.082-1.082Z"
            transform="translate(-435.28 -301.612)"
            fill="#3f3d56"
          />
          <path
            id="Path_78"
            data-name="Path 78"
            d="M618.256,411.05h-6.13a1.8,1.8,0,0,1-1.8-1.8V369.583a1.805,1.805,0,0,1,1.8-1.8h6.13a1.8,1.8,0,0,1,1.8,1.8v39.664a1.8,1.8,0,0,1-1.8,1.8Zm-6.13-42.549a1.083,1.083,0,0,0-1.082,1.082v39.664a1.083,1.083,0,0,0,1.082,1.082h6.13a1.083,1.083,0,0,0,1.082-1.082V369.583a1.083,1.083,0,0,0-1.082-1.082Z"
            transform="translate(-467.251 -301.612)"
            fill="#3f3d56"
          />
          <path
            id="Path_79"
            data-name="Path 79"
            d="M668.256,411.05h-6.13a1.8,1.8,0,0,1-1.8-1.8V369.583a1.8,1.8,0,0,1,1.8-1.8h6.13a1.8,1.8,0,0,1,1.8,1.8v39.664a1.8,1.8,0,0,1-1.8,1.8Zm-6.13-42.549a1.083,1.083,0,0,0-1.082,1.082v39.664a1.083,1.083,0,0,0,1.082,1.082h6.13a1.083,1.083,0,0,0,1.082-1.082V369.583a1.083,1.083,0,0,0-1.082-1.082Z"
            transform="translate(-499.221 -301.612)"
            fill="#3f3d56"
          />
          <path
            id="Path_80"
            data-name="Path 80"
            d="M306.813,513a3.626,3.626,0,0,0-3.168-4.569l-3.1-12.507-4.539,4.923,3.641,11.122A3.646,3.646,0,0,0,306.813,513Z"
            transform="translate(-266.272 -383.55)"
            fill="#ffb8b8"
          />
          <path
            id="Path_81"
            data-name="Path 81"
            d="M290.47,452.078a1.625,1.625,0,0,1-.908-.963l-5.177-15.93a16.722,16.722,0,0,1,.275-11.768l4.99-12.388a5.227,5.227,0,0,1,10.312,1.719l-6.885,20.033,2.41,16.312a1.628,1.628,0,0,1-.916,1.624l-2.78,1.326a1.624,1.624,0,0,1-1.323.034Z"
            transform="translate(-258.243 -326.473)"
            fill="#2f2e41"
          />
          <path
            id="Path_82"
            data-name="Path 82"
            d="M160.342,488.206h4.421l2.1-17.051h-6.524Z"
            transform="translate(-102.525 -301.262)"
            fill="#ffb8b8"
          />
          <path
            id="Path_83"
            data-name="Path 83"
            d="M0,0H13.894V5.368H5.368A5.368,5.368,0,0,1,0,0H0Z"
            transform="translate(70.763 191.048) rotate(179.997)"
            fill="#2f2e41"
          />
          <path
            id="Path_84"
            data-name="Path 84"
            d="M99.342,488.206h4.421l2.1-17.051H99.341Z"
            transform="translate(-63.52 -301.262)"
            fill="#ffb8b8"
          />
          <path
            id="Path_85"
            data-name="Path 85"
            d="M0,0H13.894V5.368H5.368A5.368,5.368,0,0,1,0,0H0Z"
            transform="translate(48.767 191.048) rotate(179.997)"
            fill="#2f2e41"
          />
          <path
            id="Path_86"
            data-name="Path 86"
            d="M334.486,509.991l3.886,30.789q.8,6.349,1.121,12.745l1.047,20.939a1.442,1.442,0,0,1-1.441,1.514h-5.9a1.442,1.442,0,0,1-1.426-1.226l-5.3-34.946a.721.721,0,0,0-1.422-.024l-6.39,34.226a1.442,1.442,0,0,1-1.308,1.148l-5.428.344a1.442,1.442,0,0,1-1.547-1.484l1.753-56.093Z"
            transform="translate(-275.46 -392.544)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_26"
            data-name="Ellipse 26"
            cx="8.856"
            cy="8.856"
            r="8.856"
            transform="translate(32.952 55.88)"
            fill="#ffb8b8"
          />
          <path
            id="Path_87"
            data-name="Path 87"
            d="M301.538,446.011c2.164,5.048,11.539,8.654,13.7,1.442,1.673-5.575,8.3-7.918,11.225-8.694a1.448,1.448,0,0,0,1.031-1.752l-8.175-32.11a11.279,11.279,0,0,0-22.043.851,49.453,49.453,0,0,0-.573,5.683C296.028,425.6,300.114,442.686,301.538,446.011Z"
            transform="translate(-266.672 -319.91)"
            fill="#6c63ff"
          />
          <path
            id="Path_88"
            data-name="Path 88"
            d="M366,509.7a3.626,3.626,0,0,0-4.6-3.125l-7.389-10.556-2.465,6.226,7.4,9.07A3.646,3.646,0,0,0,366,509.7Z"
            transform="translate(-301.785 -383.612)"
            fill="#ffb8b8"
          />
          <path
            id="Path_89"
            data-name="Path 89"
            d="M338.395,453.761a1.624,1.624,0,0,1-1.193-.572l-10.557-13a16.722,16.722,0,0,1-3.973-11.08l.2-13.354a5.227,5.227,0,1,1,10.241-2.1l.777,21.169,8.112,14.356a1.628,1.628,0,0,1-.271,1.845l-2.117,2.237a1.625,1.625,0,0,1-.845.473A1.607,1.607,0,0,1,338.395,453.761Z"
            transform="translate(-283.321 -328.27)"
            fill="#2f2e41"
          />
          <path
            id="Path_90"
            data-name="Path 90"
            d="M303.011,349.435a1.445,1.445,0,0,0,2.128-.854l0-.02a6.906,6.906,0,0,0-.019-2.064,2.586,2.586,0,0,1,.491-1.954c.876-.945,2.433-.444,3.7-.683a3.124,3.124,0,0,0,2.43-3.336c-.018-.143-.046-.287-.078-.43a2.406,2.406,0,0,1,2.5-2.914c1.279.073,2.66.461,3.719-.487a2.743,2.743,0,0,0,.659-2.957c-.6-1.745-2.313-2.658-4-3.16a14.647,14.647,0,0,0-12.415,2.037,6.574,6.574,0,0,0-2.52,2.923,3.2,3.2,0,0,0,.791,3.578,6.61,6.61,0,0,0-1.531,6.421C299.371,347.166,301.79,348.732,303.011,349.435Z"
            transform="translate(-267.925 -277.454)"
            fill="#2f2e41"
          />
          <path
            id="Path_91"
            data-name="Path 91"
            d="M319.568,714.441H224.013a.361.361,0,0,1,0-.721h95.555a.361.361,0,0,1,0,.721Z"
            transform="translate(-220.008 -522.811)"
            fill="#3f3d56"
          />
        </g>
      </g>
    </svg>
  </span>
)
export const VWelcome: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      id="Group_7"
      data-name="Group 7"
      xmlns="http://www.w3.org/2000/svg"
      width="291.187"
      height="233.699"
      viewBox="0 0 291.187 233.699">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="291.187"
        height="171.286"
        transform="translate(0 26.086)"
        fill="#5c38ff"
      />
      <g id="Group_6" data-name="Group 6" transform="translate(39.772)">
        <path
          id="Path_1"
          data-name="Path 1"
          d="M14.895,375.512H1.5V362.117a4.357,4.357,0,0,1,4.344-4.344H18.877V371.53A3.987,3.987,0,0,1,14.895,375.512Z"
          transform="translate(-0.957 -228.253)"
          fill="#3f3d56"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M520.895,18.512H507.5V5.117A4.357,4.357,0,0,1,511.844.773h13.033V14.529A3.987,3.987,0,0,1,520.895,18.512Z"
          transform="translate(-323.776 -0.493)"
          fill="#3f3d56"
        />
        <g
          id="Group_2"
          data-name="Group 2"
          transform="translate(88.596 209.378)">
          <path
            id="Path_3"
            data-name="Path 3"
            d="M272.694,596.972h-4.825l-2.3-18.61h7.121Z"
            transform="translate(-258.027 -578.362)"
            fill="#a0616a"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M259.564,629.54H244.728v-.188a5.775,5.775,0,0,1,5.775-5.775h0l2.71-2.056,5.056,2.056h1.3v5.963Z"
            transform="translate(-244.728 -605.896)"
            fill="#2f2e41"
          />
        </g>
        <path
          id="Path_5"
          data-name="Path 5"
          d="M261.717,361.082l-3.184,11.055s-6.878,36.178-5.068,41.247,3.144,36.949,3.144,36.949h9.418s1.268-8.088,1.231-9.3,2.135-20.766-.761-23.662l12.671-31.858,19.911-16.653-7.808-9.691-29.554,1.918Z"
          transform="translate(-161.512 -229.14)"
          fill="#2f2e41"
        />
        <path
          id="Path_6"
          data-name="Path 6"
          d="M386.137,389.757v-5.792L380.344,376A4.357,4.357,0,0,0,376,380.344v19.549a4.357,4.357,0,0,0,4.344,4.344h19.549a4.357,4.357,0,0,0,4.344-4.344l-7.964-5.43h-5.43A4.712,4.712,0,0,1,386.137,389.757Z"
          transform="translate(-239.881 -239.881)"
          fill="#6c63ff"
          opacity="0.5"
        />
        <path
          id="Path_7"
          data-name="Path 7"
          d="M260.657,184.527H142.48a6.987,6.987,0,0,1-6.979-6.98V136.48a6.987,6.987,0,0,1,6.979-6.98H260.657a6.988,6.988,0,0,1,6.98,6.98v41.067A6.988,6.988,0,0,1,260.657,184.527Z"
          transform="translate(-86.447 -82.619)"
          fill="#6c63ff"
          opacity="0.5"
        />
        <path
          id="Path_8"
          data-name="Path 8"
          d="M192.27,162.389h-77.11A7.169,7.169,0,0,1,108,155.228V114.161A7.169,7.169,0,0,1,115.16,107H233.338a7.169,7.169,0,0,1,7.161,7.161,48.283,48.283,0,0,1-48.228,48.228Zm-77.11-54.665a6.444,6.444,0,0,0-6.437,6.437v41.067a6.444,6.444,0,0,0,6.437,6.437h77.11a47.558,47.558,0,0,0,47.5-47.5,6.444,6.444,0,0,0-6.437-6.437H115.161Z"
          transform="translate(-68.902 -68.264)"
          fill="#6c63ff"
        />
        <g
          id="Group_3"
          data-name="Group 3"
          transform="translate(121.05 66.945)">
          <path
            id="Path_9"
            data-name="Path 9"
            d="M366.449,355.633l-.766-10.847,6.135-1.3.4,11.5a3.64,3.64,0,1,1-5.771.652Z"
            transform="translate(-354.349 -286.082)"
            fill="#a0616a"
          />
          <path
            id="Path_10"
            data-name="Path 10"
            d="M336.735,184.923l-2.361,1.759,5.8,33.081-.848,2.025,1.131,1.064.347,2.544,4.568,23.632h6.966c-.1-.821,1.912-1.662,1.81-2.534-.116-1-.932-2.5-1.048-3.557q-.054-.489-.108-.985-.079-.728-.159-1.471-.062-.575-.123-1.157c-.891-8.4-1.257-17.863-1.771-26.029-.656-10.412-1.553-18.725-4.084-20.083l-10.122-8.288Z"
            transform="translate(-334.375 -184.923)"
            fill="#3f3d56"
          />
        </g>
        <path
          id="Path_11"
          data-name="Path 11"
          d="M388.537,574.989a.821.821,0,0,0,.6-1.424l-.056-.224.022-.054a2.206,2.206,0,0,1,4.07.015,19.588,19.588,0,0,1,1.722,4.9,6.526,6.526,0,0,1-.115,2.245,26.168,26.168,0,0,0,2.38-10.868,25.253,25.253,0,0,0-.157-2.818q-.13-1.15-.36-2.284a26.471,26.471,0,0,0-5.249-11.219,7.043,7.043,0,0,1-2.93-3.04,5.372,5.372,0,0,1-.489-1.468,6.632,6.632,0,0,0,.43-2.287c.2-.3.555-.452.772-.746,1.08-1.464,2.567-1.208,3.344.781,1.659.837,1.675,2.226.657,3.561-.648.85-.737,2-1.3,2.909.059.075.119.147.178.222a26.647,26.647,0,0,1,2.781,4.405,11.074,11.074,0,0,1,.661-5.144,18.551,18.551,0,0,1,2.864-4.132,2.273,2.273,0,0,1,4.049,1.116l.006.058q-.233.131-.456.279a1.114,1.114,0,0,0,.449,2.028l.023,0a11.093,11.093,0,0,1-.292,1.658c1.34,5.183-1.553,7.07-5.684,7.155-.091.047-.18.094-.271.138a27.19,27.19,0,0,1,1.464,6.888,25.8,25.8,0,0,1-.019,4.164l.007-.049a6.815,6.815,0,0,1,2.327-3.935c1.79-1.471,4.32-2.012,6.252-3.195a1.279,1.279,0,0,1,1.959,1.244l-.008.052a7.472,7.472,0,0,0-.839.4q-.233.131-.456.279a1.114,1.114,0,0,0,.449,2.028l.023,0,.047.007a11.1,11.1,0,0,1-2.041,3.2c-.838,4.524-4.437,4.953-8.287,3.636h0a27.184,27.184,0,0,1-1.826,5.331H388.7c-.023-.073-.044-.147-.065-.22a7.411,7.411,0,0,0,1.805-.108c-.484-.594-.968-1.192-1.452-1.786a.392.392,0,0,1-.03-.035c-.246-.3-.493-.606-.739-.91h0a10.859,10.859,0,0,1,.318-2.766h0Z"
          transform="translate(-247.519 -347.565)"
          fill="#f2f2f2"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          d="M187.983,643.6a.43.43,0,0,0,.431.431h91.7a.431.431,0,0,0,0-.862h-91.7a.43.43,0,0,0-.431.431Z"
          transform="translate(-119.93 -410.327)"
          fill="#ccc"
        />
        <path
          id="Path_13"
          data-name="Path 13"
          d="M8.214,0A8.214,8.214,0,0,0,0,8.214V147.341H.724V57.083A56.359,56.359,0,0,1,57.083.724L201.052.592,200.92,0Z"
          fill="#3f3d56"
        />
        <path
          id="Path_14"
          data-name="Path 14"
          d="M137.961,210.065c0,.485-.014.97-.04,1.448H115.8a6.8,6.8,0,0,1-6.8-6.8V184.159a26.415,26.415,0,0,1,2.9-.159,26.067,26.067,0,0,1,26.065,26.065Z"
          transform="translate(-69.54 -117.389)"
          fill="#6c63ff"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M287.058,183H216.331a2.185,2.185,0,1,0,0,4.37h70.727a2.185,2.185,0,0,0,0-4.37Z"
          transform="translate(-136.621 -116.748)"
          fill="#6c63ff"
        />
        <path
          id="Path_16"
          data-name="Path 16"
          d="M238.26,149.152H216.331a2.185,2.185,0,1,0,0,4.37H238.26a2.185,2.185,0,0,0,0-4.37Z"
          transform="translate(-136.621 -95.156)"
          fill="#6c63ff"
        />
        <g
          id="Group_4"
          data-name="Group 4"
          transform="translate(108.507 209.378)">
          <path
            id="Path_17"
            data-name="Path 17"
            d="M327.694,596.972h-4.825l-2.3-18.61h7.121Z"
            transform="translate(-313.027 -578.362)"
            fill="#a0616a"
          />
          <path
            id="Path_18"
            data-name="Path 18"
            d="M314.564,629.54H299.727v-.188a5.775,5.775,0,0,1,5.775-5.775h0l2.71-2.056,5.056,2.056h1.3v5.963Z"
            transform="translate(-299.727 -605.896)"
            fill="#2f2e41"
          />
        </g>
        <path
          id="Path_19"
          data-name="Path 19"
          d="M307.077,376.5l2.534,22.083L304,421.571l4.887,40,9.05.724s4.344-29.324.362-39.46l10.137-39.822-7.6-4.344Z"
          transform="translate(-193.946 -240.2)"
          fill="#2f2e41"
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M295.3,163.646c-1.6-1.7-1.05-3.258-3.519-3.694a33.208,33.208,0,0,0-5.4,0c-4.308,0-4.956,2.378-7.436,5.543-6.388,8.152-.445,14.693-1.954,24.439-1.4,9.055,2.355,13.987.691,23.067a54.631,54.631,0,0,1-5.014,15.379,15.321,15.321,0,0,0-1.831,8.979c.322,2.691,35.082,3.005,36.044,2.343,1.133-.78.75-2.452.86-3.616.3-3.155.6-5.366-.153-8.589a44.482,44.482,0,0,1-.709-9.677c-.01-3.018-4.26,1.964-4.013-1.049.315-3.842.939-7.6,1.627-11.409.532-2.947.741-5.975,1.523-8.861.9-3.324,1.975-6.248,2.011-9.734.028-2.714.683-6.507-.4-8.993-1.589-3.662-4.794-6.96-7.5-9.894a32.8,32.8,0,0,0-4.215-3.617"
          transform="translate(-172.728 -101.963)"
          fill="#3f3d56"
        />
        <g
          id="Group_5"
          data-name="Group 5"
          transform="translate(61.199 69.374)">
          <path
            id="Path_21"
            data-name="Path 21"
            d="M175.856,213.233l9.787,4.739-1.927,5.969-10.169-5.379a3.64,3.64,0,1,1,2.309-5.329Z"
            transform="translate(-169.05 -204.233)"
            fill="#a0616a"
          />
          <path
            id="Path_22"
            data-name="Path 22"
            d="M223.666,227.681c-.937-.5-15.217-9.6-22.726-13.834-.141-.079-1.11.44-1.245.364-.206-.116-.01-.979-.2-1.088-.418-.236-1.2.3-1.545.1-1.255-.707-.989-3.723-.989-3.723l2.534-6.154,4.143-.132.925,1.58,1.964-.237,1.294,1.685,14.912,5.851c.58-7.775,3.689-14.19,7.057-20.465l1.362.257a6.441,6.441,0,0,1,5.162,7.365l-3.932,24.138a5.988,5.988,0,0,1-8.713,4.29Z"
            transform="translate(-186.84 -191.631)"
            fill="#3f3d56"
          />
        </g>
        <circle
          id="Ellipse_1"
          data-name="Ellipse 1"
          cx="11.08"
          cy="11.08"
          r="11.08"
          transform="translate(101.751 33.542)"
          fill="#a0616a"
        />
        <path
          id="Path_23"
          data-name="Path 23"
          d="M297.174,98.911a8.662,8.662,0,0,0-1.111-.369c1.9,2.394-1.308,4.494-1.806,6.944.041,1.945-1.022,2.827-2.882,3.359l.043-.152c-15.129,3.875.83-9.025-11-9.38-1.8.105.6-5.563-1.249-5.278-4.706.724-4.926.227-5.43,3.621-.916.3-2.172-1.086-2.024-2.535-.335-.609-1.212-.219-1.564-1.144-.373-.706-1.082-5.322.536-3.164.107-1.473-.31-4.484,1.528-1.911-.239-1.17.777-.664,1.2.033.3-.684.6-1.365.9-2.049a1.347,1.347,0,0,0,.123.948c.854-1.814,2.158-1.978,4.192-2.491a9.6,9.6,0,0,0,.065,1.709c2.362-3.914,8.083-2.82,10.364.637,1.446.33,2.057-.17,3.5.192,3.891.973,5.67,6.972,4.608,11.031Z"
          transform="translate(-172.046 -53.953)"
          fill="#2f2e41"
        />
        <path
          id="Path_24"
          data-name="Path 24"
          d="M419.982,381.739h13.395V368.344A4.357,4.357,0,0,0,429.033,364H416v13.757A3.987,3.987,0,0,0,419.982,381.739Z"
          transform="translate(-265.4 -232.225)"
          fill="#6c63ff"
        />
        <ellipse
          id="Ellipse_2"
          data-name="Ellipse 2"
          cx="3.061"
          cy="3.13"
          rx="3.061"
          ry="3.13"
          transform="translate(43.17 16.857)"
          fill="#3f3d56"
        />
        <ellipse
          id="Ellipse_3"
          data-name="Ellipse 3"
          cx="3.061"
          cy="3.13"
          rx="3.061"
          ry="3.13"
          transform="translate(53.746 16.857)"
          fill="#3f3d56"
        />
        <ellipse
          id="Ellipse_4"
          data-name="Ellipse 4"
          cx="3.061"
          cy="3.13"
          rx="3.061"
          ry="3.13"
          transform="translate(64.322 16.857)"
          fill="#3f3d56"
        />
        <path
          id="Path_25"
          data-name="Path 25"
          d="M392.543,84.273a.544.544,0,0,0-.543.543v3.62a.544.544,0,0,0,.543.543h3.62a.544.544,0,0,0,.543-.543v-3.62a.544.544,0,0,0-.543-.543Z"
          transform="translate(-250.089 -53.764)"
          fill="#6c63ff"
        />
        <path
          id="Path_26"
          data-name="Path 26"
          d="M415.543,84.273a.544.544,0,0,0-.543.543v3.62a.544.544,0,0,0,.543.543h3.62a.544.544,0,0,0,.543-.543v-3.62a.544.544,0,0,0-.543-.543Z"
          transform="translate(-264.762 -53.764)"
          fill="#6c63ff"
        />
        <path
          id="Path_27"
          data-name="Path 27"
          d="M438.543,84.273a.544.544,0,0,0-.543.543v3.62a.544.544,0,0,0,.543.543h3.62a.544.544,0,0,0,.543-.543v-3.62a.544.544,0,0,0-.543-.543Z"
          transform="translate(-279.436 -53.764)"
          fill="#6c63ff"
        />
      </g>
    </svg>
  </span>
)
export const Vhdiw: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="325.441"
      height="233.699"
      viewBox="0 0 325.441 233.699">
      <g
        id="Group_52"
        data-name="Group 52"
        transform="translate(-561.558 -341.327)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="304.441"
          height="155.887"
          transform="translate(582.558 366.113)"
          fill="#5c38ff"
        />
        <g
          id="Group_33"
          data-name="Group 33"
          transform="translate(561.558 341.327)">
          <ellipse
            id="Ellipse_11"
            data-name="Ellipse 11"
            cx="12.754"
            cy="11.719"
            rx="12.754"
            ry="11.719"
            transform="translate(212.526)"
            fill="#ff6584"
          />
          <g
            id="Group_21"
            data-name="Group 21"
            transform="translate(240.11 95.49)">
            <g
              id="Group_19"
              data-name="Group 19"
              transform="translate(0.72 111.634)">
              <path
                id="Path_28"
                data-name="Path 28"
                d="M624.568,546.856l-4.594.087-2.561-16.6,6.779-.129Z"
                transform="translate(-610.071 -530.214)"
                fill="#ffb6b6"
              />
              <path
                id="Path_29"
                data-name="Path 29"
                d="M600.142,576.405a1.987,1.987,0,0,0,2.1,1.849l9.133-.174,1.5-3.02.682,2.977,3.446-.064-1.208-10.649-1.2-.041-4.9-.179-1.58-.055.068,3.02-7.189,4.767a1.84,1.84,0,0,0-.851,1.569Z"
                transform="translate(-600.142 -552.66)"
                fill="#2f2e41"
              />
            </g>
            <g
              id="Group_20"
              data-name="Group 20"
              transform="translate(31.633 111.634)">
              <path
                id="Path_30"
                data-name="Path 30"
                d="M697.279,546.856l-4.594.087-2.561-16.6,6.779-.129Z"
                transform="translate(-682.782 -530.214)"
                fill="#ffb6b6"
              />
              <path
                id="Path_31"
                data-name="Path 31"
                d="M672.854,576.405a1.987,1.987,0,0,0,2.1,1.849l9.132-.174,1.5-3.02.682,2.977,3.446-.064-1.208-10.649-1.2-.041-4.9-.179-1.58-.055.068,3.02-7.189,4.767a1.84,1.84,0,0,0-.851,1.569Z"
                transform="translate(-672.854 -552.66)"
                fill="#2f2e41"
              />
            </g>
            <path
              id="Path_32"
              data-name="Path 32"
              d="M618.3,245.089l25.292-.646-1.405,1.937,3.2,2.9s11.553,14.525,8.041,27.758-1.535,91.471-1.535,91.471l-20.6-2.062,2.283-78.918-16.861,29.7,4.9,48.14-17.549-.047-5.62-51.966L618.3,245.089Z"
              transform="translate(-598.448 -244.443)"
              fill="#2f2e41"
            />
          </g>
          <path
            id="Path_33"
            data-name="Path 33"
            d="M392.627,60.262a.289.289,0,0,0,.519,0,21.3,21.3,0,0,1,2.637-4.475.265.265,0,0,0-.324-.394l-2.2.733V43.591h-.738V56.125l-2.2-.733a.265.265,0,0,0-.324.394,21.317,21.317,0,0,1,2.638,4.475Z"
            transform="translate(-231.284 -26.562)"
            fill="#3f3d56"
          />
          <path
            id="Path_34"
            data-name="Path 34"
            d="M430.244,98.842a.273.273,0,0,0,.406.3,24.876,24.876,0,0,1,5.094-2,.253.253,0,0,0,.013-.494l-2.221-.686,8.484-9.815-.578-.422-8.484,9.815-1.23-1.833a.286.286,0,0,0-.521.124,20.222,20.222,0,0,1-.963,5.011Z"
            transform="translate(-255.328 -52.237)"
            fill="#3f3d56"
          />
          <g
            id="Group_22"
            data-name="Group 22"
            transform="translate(215.737 45.846)">
            <path
              id="Path_35"
              data-name="Path 35"
              d="M547.869,175.678l13.622-1.443,1.983,7.035-14.461,1.054a4.562,4.562,0,0,1-1.074.758,4.809,4.809,0,0,1-6.241-1.638,4.044,4.044,0,0,1,1.783-5.735,4.94,4.94,0,0,1,4.388-.032Z"
              transform="translate(-541.12 -152.018)"
              fill="#ffb6b6"
            />
            <path
              id="Path_36"
              data-name="Path 36"
              d="M629.588,124.794l-5.331-7.434a22.8,22.8,0,0,0-2.461,2.047l-1.105.7-3.571,2.934-10.11,8.293-3.363,2.762-3.754.605-8.286,1.34-12.548,3.1-9.24.55c0,.172,0,.43,0,.75a45.2,45.2,0,0,0,.4,6.883,2.089,2.089,0,0,0,.5,1.231c.068.043,7.144-1.987,7.5-1.991a93.842,93.842,0,0,0,17.395-.438c5.765-.7,10.841-1.328,12.975-1.6l.047-.008,1.543-.688,16.942-7.539,5.114-2.277a33.508,33.508,0,0,0-2.636-9.223Z"
              transform="translate(-557.615 -117.36)"
              fill="#6c63ff"
            />
          </g>
          <path
            id="Path_37"
            data-name="Path 37"
            d="M9.646,27.941C4.319,27.941,0,31.909,0,36.8V186.932H.85V89.537c0-33.587,29.632-60.815,66.185-60.815l169.07-.142-.155-.639Z"
            transform="translate(0 -17.026)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_12"
            data-name="Ellipse 12"
            cx="3.595"
            cy="3.377"
            rx="3.595"
            ry="3.377"
            transform="translate(50.697 29.105)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_13"
            data-name="Ellipse 13"
            cx="3.595"
            cy="3.377"
            rx="3.595"
            ry="3.377"
            transform="translate(60.394 29.105)"
            fill="#3f3d56"
          />
          <ellipse
            id="Ellipse_14"
            data-name="Ellipse 14"
            cx="3.595"
            cy="3.377"
            rx="3.595"
            ry="3.377"
            transform="translate(72.278 29.105)"
            fill="#3f3d56"
          />
          <g
            id="Group_25"
            data-name="Group 25"
            transform="translate(123.151 72.269)">
            <path
              id="Path_38"
              data-name="Path 38"
              d="M320.47,185c-5.328,0-9.646,3.968-9.646,8.864V258.05h.85V246.6c0-33.587,29.632-60.815,66.185-60.815l61.511-.142-.155-.639H320.47Z"
              transform="translate(-310.824 -185)"
              fill="#f2f2f2"
            />
            <g
              id="Group_24"
              data-name="Group 24"
              transform="translate(44.513 39.835)">
              <path
                id="Path_39"
                data-name="Path 39"
                d="M416.377,286.973a.819.819,0,0,0-.85.781v12.11a.853.853,0,0,0,1.7,0v-12.11A.819.819,0,0,0,416.377,286.973Z"
                transform="translate(-415.527 -286.973)"
                fill="#3f3d56"
              />
              <g
                id="Group_23"
                data-name="Group 23"
                transform="translate(3.885 2.011)">
                <ellipse
                  id="Ellipse_15"
                  data-name="Ellipse 15"
                  cx="5.299"
                  cy="4.766"
                  rx="5.299"
                  ry="4.766"
                  transform="translate(0 0.125)"
                  fill="#6c63ff"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M496.077,295.382h-28.52a1.636,1.636,0,1,1,0-3.261h28.52a1.636,1.636,0,1,1,0,3.261Z"
                  transform="translate(-448.302 -292.121)"
                  fill="#f2f2f2"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M518.335,309.509H467.558a1.636,1.636,0,1,1,0-3.261h50.778a1.636,1.636,0,1,1,0,3.261Z"
                  transform="translate(-448.302 -300.73)"
                  fill="#f2f2f2"
                />
              </g>
            </g>
            <ellipse
              id="Ellipse_16"
              data-name="Ellipse 16"
              cx="3.595"
              cy="3.377"
              rx="3.595"
              ry="3.377"
              transform="translate(44.395 12.308)"
              fill="#f2f2f2"
            />
            <ellipse
              id="Ellipse_17"
              data-name="Ellipse 17"
              cx="3.595"
              cy="3.377"
              rx="3.595"
              ry="3.377"
              transform="translate(56.815 12.308)"
              fill="#f2f2f2"
            />
            <ellipse
              id="Ellipse_18"
              data-name="Ellipse 18"
              cx="3.595"
              cy="3.377"
              rx="3.595"
              ry="3.377"
              transform="translate(69.235 12.308)"
              fill="#f2f2f2"
            />
          </g>
          <path
            id="Path_42"
            data-name="Path 42"
            d="M89.2,169.406a.819.819,0,0,0-.85.781V182.3a.853.853,0,0,0,1.7,0v-12.11A.819.819,0,0,0,89.2,169.406Z"
            transform="translate(-50.791 -103.229)"
            fill="#3f3d56"
          />
          <g
            id="Group_26"
            data-name="Group 26"
            transform="translate(41.447 68.188)">
            <ellipse
              id="Ellipse_19"
              data-name="Ellipse 19"
              cx="5.299"
              cy="4.766"
              rx="5.299"
              ry="4.766"
              transform="translate(0 0.125)"
              fill="#6c63ff"
            />
            <path
              id="Path_43"
              data-name="Path 43"
              d="M168.9,177.815h-28.52a1.636,1.636,0,1,1,0-3.261H168.9a1.636,1.636,0,1,1,0,3.261Z"
              transform="translate(-121.129 -174.554)"
              fill="#f2f2f2"
            />
            <path
              id="Path_44"
              data-name="Path 44"
              d="M191.161,191.942H140.384a1.636,1.636,0,1,1,0-3.261h50.778a1.636,1.636,0,1,1,0,3.261Z"
              transform="translate(-121.129 -183.163)"
              fill="#f2f2f2"
            />
          </g>
          <path
            id="Path_45"
            data-name="Path 45"
            d="M89.2,255.406a.819.819,0,0,0-.85.781V268.3a.853.853,0,0,0,1.7,0v-12.11A.819.819,0,0,0,89.2,255.406Z"
            transform="translate(-50.791 -155.634)"
            fill="#3f3d56"
          />
          <g
            id="Group_27"
            data-name="Group 27"
            transform="translate(41.447 101.783)">
            <ellipse
              id="Ellipse_20"
              data-name="Ellipse 20"
              cx="5.299"
              cy="4.766"
              rx="5.299"
              ry="4.766"
              transform="translate(0 0.125)"
              fill="#6c63ff"
            />
            <path
              id="Path_46"
              data-name="Path 46"
              d="M168.9,263.815h-28.52a1.636,1.636,0,1,1,0-3.261H168.9a1.636,1.636,0,1,1,0,3.261Z"
              transform="translate(-121.129 -260.554)"
              fill="#f2f2f2"
            />
            <path
              id="Path_47"
              data-name="Path 47"
              d="M191.161,277.942H140.384a1.636,1.636,0,1,1,0-3.261h50.778a1.636,1.636,0,1,1,0,3.261Z"
              transform="translate(-121.129 -269.163)"
              fill="#f2f2f2"
            />
          </g>
          <g
            id="Group_29"
            data-name="Group 29"
            transform="translate(37.563 133.367)">
            <path
              id="Path_48"
              data-name="Path 48"
              d="M89.2,341.406a.819.819,0,0,0-.85.781V354.3a.853.853,0,0,0,1.7,0v-12.11A.819.819,0,0,0,89.2,341.406Z"
              transform="translate(-88.354 -341.406)"
              fill="#3f3d56"
            />
            <g
              id="Group_28"
              data-name="Group 28"
              transform="translate(3.885 2.011)">
              <ellipse
                id="Ellipse_21"
                data-name="Ellipse 21"
                cx="5.299"
                cy="4.766"
                rx="5.299"
                ry="4.766"
                transform="translate(0 0.125)"
                fill="#6c63ff"
              />
              <path
                id="Path_49"
                data-name="Path 49"
                d="M168.9,349.815h-28.52a1.636,1.636,0,1,1,0-3.261H168.9a1.636,1.636,0,1,1,0,3.261Z"
                transform="translate(-121.129 -346.554)"
                fill="#f2f2f2"
              />
              <path
                id="Path_50"
                data-name="Path 50"
                d="M191.161,363.942H140.384a1.636,1.636,0,1,1,0-3.261h50.778a1.636,1.636,0,1,1,0,3.261Z"
                transform="translate(-121.129 -355.163)"
                fill="#f2f2f2"
              />
            </g>
          </g>
          <path
            id="Path_51"
            data-name="Path 51"
            d="M674.4,169.831c-.526,3.679-27.783-5.031-31.035-6.641-6.084-3,.281.077.281.077l-.707-18.437-.737-10.986s-.412-2.918-1.275-6.641a28.146,28.146,0,0,1-.536-2.832c-.374-2.965-.089-6.41,3.087-8.5L654.552,100.7l5.455-.293,4.749,6.621,5.331,7.434a33.508,33.508,0,0,1,2.636,9.223,33.056,33.056,0,0,1-.638,12.282l-3.337,8.6a2.006,2.006,0,0,0,1.046,2.27c2.974,1.653-3.046,6.2.638,11.825,0,0-.344,2.586,1.3,2.813S674.621,168.282,674.4,169.831Z"
            transform="translate(-382.376 -61.186)"
            fill="#6c63ff"
          />
          <g
            id="Group_30"
            data-name="Group 30"
            transform="translate(235.988 50.793)">
            <path
              id="Path_52"
              data-name="Path 52"
              d="M591.836,284.879l8.088-10.175,6.97,3.434-8.967,10.478a3.885,3.885,0,0,1-.122,1.239,4.626,4.626,0,0,1-5.544,3.1,4.212,4.212,0,0,1-3.376-5.094A4.367,4.367,0,0,1,591.836,284.879Z"
              transform="translate(-588.754 -218.186)"
              fill="#ffb6b6"
            />
            <path
              id="Path_53"
              data-name="Path 53"
              d="M633.729,132.533a16.228,16.228,0,0,0-6.384-2.465c-3.245-.52-5.065,3.77-5.78,7.955a22.526,22.526,0,0,0-.313,5.257l-.191,1.225-.112,6.339-.264,14.655-8.123,11.051-3.4,7.422-6.95,8.163c.136.12.343.295.6.514a53.01,53.01,0,0,0,5.77,4.4,2.542,2.542,0,0,0,1.319.5c.08-.016,4.974-4.347,5.215-4.59,1.623-1.624,1.943-3.8,6.851-10.136,4.47-5.764,8.829-11.5,10.4-13.57l.029-.037,7.076-21.445.644-1.944a13.843,13.843,0,0,0-6.387-13.291Z"
              transform="translate(-596.489 -130.025)"
              fill="#6c63ff"
            />
          </g>
          <path
            id="Path_54"
            data-name="Path 54"
            d="M666.421,137.245l-.038-.015c-.109.008-.218.014-.323.015Z"
            transform="translate(-397.206 -83.622)"
            fill="#2f2e41"
          />
          <ellipse
            id="Ellipse_22"
            data-name="Ellipse 22"
            cx="12.366"
            cy="11.363"
            rx="12.366"
            ry="11.363"
            transform="translate(260.023 14.056)"
            fill="#ffb6b6"
          />
          <path
            id="Path_55"
            data-name="Path 55"
            d="M634.719,40.674c-.835-5.509,1.6-7.194,5.408-7.693,7.535-3.6,9.261-2.694,11.65-2.3l.878-.174a9.179,9.179,0,0,1,6.067.527,12.864,12.864,0,0,1,8.741,11.142c.253,3.413-.911,3.944,1.242,6.716a3.872,3.872,0,0,1-2.6,6.159l-2.814,3.909a18.124,18.124,0,0,1-1.853-2.675,8.378,8.378,0,0,0-.144,3.069,21.414,21.414,0,0,1-9.1,1.8A3.161,3.161,0,0,1,651.263,59a14.178,14.178,0,0,0-.438,2.422c-2.041-1.207-3.727-.853-5.074,1-3.4-2.59-3.668-8.526.375-10.012,3.421-1.258-1.975-10.063-5.654-10.243-.024,0-1,3.4-1.038,3.339-.519-.954-.282-1.477-.9-2.522a7.94,7.94,0,0,0-.192,2.562,16.536,16.536,0,0,1-2.66-.776,4.183,4.183,0,0,1-.96-4.1Z"
            transform="translate(-379.073 -18.413)"
            fill="#2f2e41"
          />
          <path
            id="Path_56"
            data-name="Path 56"
            d="M741.958,530.077a.882.882,0,0,0,.7-1.537l-.066-.241.026-.058a2.685,2.685,0,0,1,4.779.016,20.029,20.029,0,0,1,2.022,5.292,6.485,6.485,0,0,1-.135,2.422,26.324,26.324,0,0,0,2.8-11.727,25.071,25.071,0,0,0-.184-3.04q-.152-1.241-.423-2.465a27.6,27.6,0,0,0-6.165-12.106,7.935,7.935,0,0,1-3.441-3.28,5.481,5.481,0,0,1-.574-1.584,6.649,6.649,0,0,0,.505-2.468c.233-.326.651-.487.906-.8,1.268-1.58,3.015-1.3,3.927.843,1.948.9,1.967,2.4.772,3.843-.76.917-.865,2.157-1.532,3.139.069.081.14.159.209.24a28.527,28.527,0,0,1,3.266,4.754,11.059,11.059,0,0,1,.776-5.551,20.067,20.067,0,0,1,3.363-4.459c1.474-1.711,4.5-.964,4.755,1.2l.007.063q-.273.142-.535.3a1.178,1.178,0,0,0,.528,2.188l.027,0a11.1,11.1,0,0,1-.343,1.789c1.574,5.592-1.824,7.629-6.675,7.721-.107.05-.211.1-.319.149a27.294,27.294,0,0,1,1.719,7.433,25.577,25.577,0,0,1-.022,4.494l.008-.053a7.262,7.262,0,0,1,2.732-4.246c2.1-1.587,5.073-2.172,7.341-3.447a1.492,1.492,0,0,1,2.3,1.343L765,520.3a9.166,9.166,0,0,0-.986.437q-.273.142-.535.3a1.178,1.178,0,0,0,.528,2.188l.027,0,.055.008a11.9,11.9,0,0,1-2.4,3.449c-.984,4.882-5.21,5.345-9.731,3.923h0a27.752,27.752,0,0,1-2.145,5.753H742.15c-.028-.078-.052-.159-.077-.237a9.461,9.461,0,0,0,2.12-.116c-.568-.641-1.137-1.287-1.705-1.928a.451.451,0,0,1-.036-.038c-.288-.328-.579-.653-.868-.981h0a10.811,10.811,0,0,1,.374-2.984h0Z"
            transform="translate(-440.455 -303.148)"
            fill="#f2f2f2"
          />
          <path
            id="Path_57"
            data-name="Path 57"
            d="M541.306,596.33a.485.485,0,0,0,.506.465H649.5a.467.467,0,1,0,0-.93H541.812A.485.485,0,0,0,541.306,596.33Z"
            transform="translate(-325.49 -363.095)"
            fill="#ccc"
          />
          <g
            id="Group_32"
            data-name="Group 32"
            transform="translate(151.562 37.032)">
            <path
              id="Path_58"
              data-name="Path 58"
              d="M390.556,112.736H376.22a1.555,1.555,0,0,1-1.614-1.483,20.605,20.605,0,0,1,0-14.971A1.555,1.555,0,0,1,376.22,94.8h14.336a1.555,1.555,0,0,1,1.614,1.483v14.971A1.555,1.555,0,0,1,390.556,112.736Z"
              transform="translate(-373.198 -94.799)"
              fill="#e6e6e6"
            />
            <path
              id="Path_59"
              data-name="Path 59"
              d="M381.844,95.93a4.045,4.045,0,0,0-4.2,3.864v11.831a1.423,1.423,0,0,0,1.479,1.359h7.928c3.974,0,7.2-2.96,7.2-6.612V97.289a1.423,1.423,0,0,0-1.479-1.359H381.844Z"
              transform="translate(-375.751 -95.488)"
              fill="#fff"
            />
            <g
              id="Group_31"
              data-name="Group 31"
              transform="translate(2.908 4.228)">
              <path
                id="Path_60"
                data-name="Path 60"
                d="M395.528,106.187h-6.712a.283.283,0,1,1,0-.564h6.712a.283.283,0,1,1,0,.564Z"
                transform="translate(-384.907 -105.623)"
                fill="#e6e6e6"
              />
              <path
                id="Path_61"
                data-name="Path 61"
                d="M395.528,121.58h-6.712a.283.283,0,1,1,0-.564h6.712a.283.283,0,1,1,0,.564Z"
                transform="translate(-384.907 -115.003)"
                fill="#e6e6e6"
              />
              <path
                id="Path_62"
                data-name="Path 62"
                d="M394.26,113.889H380.344a.283.283,0,1,1,0-.564H394.26a.283.283,0,1,1,0,.564Z"
                transform="translate(-380.037 -110.317)"
                fill="#e6e6e6"
              />
            </g>
            <path
              id="Path_63"
              data-name="Path 63"
              d="M405.611,127.838H399.8a.283.283,0,1,1,0-.564h5.806a.283.283,0,1,1,0,.564Z"
              transform="translate(-388.316 -114.588)"
              fill="#e6e6e6"
            />
          </g>
        </g>
      </g>
    </svg>
  </span>
)
export const VGreat: FC<IconProps> = props => (
  <span title={props.title} onClick={props.onClick} className={props.spanClass}>
    <svg
      className={props.svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width="315.854"
      height="219.912"
      viewBox="0 0 315.854 219.912">
      <g
        id="Group_54"
        data-name="Group 54"
        transform="translate(-1474.073 -355.115)">
        <rect
          id="Rectangle_11"
          data-name="Rectangle 11"
          width="276.699"
          height="158.88"
          transform="translate(1498.229 371.484)"
          fill="#5c38ff"
        />
        <g
          id="Group_51"
          data-name="Group 51"
          transform="translate(1474.073 355.115)">
          <path
            id="Path_92"
            data-name="Path 92"
            d="M185.634,150.924s-7.052-2.6-10.392-2.6a4.57,4.57,0,0,0-.95.1,11.006,11.006,0,0,0-5.048,3.292c-.367.393-.579.657-.579.657s.022-.256.067-.705a96.207,96.207,0,0,1,2.479-15.065,9.845,9.845,0,0,1,1.8-3.871,10.417,10.417,0,0,0,2.68-4.958,10.1,10.1,0,0,0,.29-2.093l-2.706-1.165-.5-3.273a7.01,7.01,0,0,1-1.885,2.583,2.21,2.21,0,0,1-.386.315c-2,1.254-6.068-.928-8.262-2.3.913-3.173,2.568-6.076,5.575-6.551,7.052-1.113,7.052-5.2,11.505-.742.367.367.739.72,1.11,1.061a24.272,24.272,0,0,1,2.13,8.915c.134,1.778.1,3.014.1,3.014s1.856,11.134,4.825,13.361-1.856,10.021-1.856,10.021Z"
            transform="translate(-102.029 -70.758)"
            fill="#2f2e41"
          />
          <path
            id="Path_93"
            data-name="Path 93"
            d="M179.768,168l-5.015,7.356,11.324,3.036V168Z"
            transform="translate(-109.895 -105.648)"
            fill="#ffb6b6"
          />
          <path
            id="Path_94"
            data-name="Path 94"
            d="M179.768,168l-5.015,7.356,11.324,3.036V168Z"
            transform="translate(-109.895 -105.648)"
            opacity="0.1"
          />
          <g
            id="Group_35"
            data-name="Group 35"
            transform="translate(256.053 175.349)">
            <path
              id="Path_95"
              data-name="Path 95"
              d="M694.046,477.092c.538-.214,1.224.99,1.687.776s-.06-1.483.362-3.139c.076-.3.555-2.181,1.343-2.267,1.494-.164,2.783,6.268,5.016,6.213a23.162,23.162,0,0,1,2.6-.427c.606-.035.935-.008,1.106.208.243.308-.044.729-.333,1.77-.433,1.561-.092,1.711-.541,2.876-.334.865-.7,1.237-.513,1.507.261.382,1.159-.116,1.549.292s0,1.5-.417,2.212a7.7,7.7,0,0,1-2.754,2.46,9.117,9.117,0,0,0-3.129,4.451l-7.257,22.154c1.393-4.62,5-17.447,6.151-22.362.332-1.419.625-2.891-.135-4.149-.732-1.211-2.353-2.077-3.842-3.93-.174-.216-.65-.825-.455-1.231.161-.336.634-.227.789-.539.208-.418-.474-.952-.994-2.02a6.3,6.3,0,0,1-.552-1.936c-.026-.165-.4-2.633.32-2.918Z"
              transform="translate(-691.704 -472.459)"
              fill="#f2f2f2"
            />
            <path
              id="Path_96"
              data-name="Path 96"
              d="M709.458,560.043c.26.2-.133.886.106,1.052s.711-.457,1.645-.728c.169-.049,1.231-.357,1.5.005.511.686-2.273,3.175-1.6,4.254a13.2,13.2,0,0,1,.96,1.153c.192.287.274.457.217.6-.081.208-.371.189-.965.347-.891.238-.866.449-1.568.564-.521.086-.808.015-.888.183-.112.239.391.535.3.844s-.734.431-1.206.434a4.382,4.382,0,0,1-2-.642,5.19,5.19,0,0,0-3.087-.251l-12.967,2.83c2.67-.649,10.006-2.579,12.75-3.433a3.1,3.1,0,0,0,2-1.263c.383-.709.341-1.754.821-3.02.056-.148.217-.557.473-.579.211-.018.294.245.492.232.265-.018.33-.507.7-1.071a3.586,3.586,0,0,1,.791-.83c.073-.06,1.178-.954,1.524-.685Z"
              transform="translate(-689.905 -527.505)"
              fill="#f2f2f2"
            />
            <path
              id="Path_97"
              data-name="Path 97"
              d="M719.5,535.7l1.242-1.283.01-.162a3.283,3.283,0,0,1,.6-1.818c.056-.073.115-.143.176-.214a2.775,2.775,0,0,0,.676-1.2c.076-.319.2-1.1-.3-1.377a.643.643,0,0,0-.388-.08c0-.024,0-.049.007-.075a1.953,1.953,0,0,0-.054-.669,2.279,2.279,0,0,1-.066-.534c0-.118,0-.216,0-.3a.833.833,0,0,0-.264-.766.889.889,0,0,0-.849-.007,4.275,4.275,0,0,0-.785.374,1.344,1.344,0,0,1-.146.08c-.2.064-.848-.641-1.1-.905-.553-.6-1.031-1.111-1.566-.886-.383.161-.555.632-.523,1.439a2.9,2.9,0,0,0,.107.656.593.593,0,0,0-.453.121h0c-.348.274-.319.841.085,1.686a2.954,2.954,0,0,0,.5.786,3.464,3.464,0,0,0,.363.336.583.583,0,0,0-.1.252c-.049.3.115.592.5.849a7.158,7.158,0,0,0,1.151.626,3.135,3.135,0,0,1,.72.4,1.792,1.792,0,0,1,.381,1.272l.07,1.4h0Z"
              transform="translate(-706.054 -506.018)"
              fill="#f2f2f2"
            />
            <path
              id="Path_98"
              data-name="Path 98"
              d="M741.553,524.934l.926,1.526.154.051a3.282,3.282,0,0,1,1.607,1.041c.056.072.109.148.162.224a2.774,2.774,0,0,0,.994.959c.289.155,1.011.472,1.408.058a.644.644,0,0,0,.176-.355l.071.026a1.953,1.953,0,0,0,.661.118,2.286,2.286,0,0,1,.534.072c.114.028.209.056.289.08a.833.833,0,0,0,.808-.061.889.889,0,0,0,.222-.82A4.285,4.285,0,0,0,749.4,527a1.31,1.31,0,0,1-.041-.161c-.012-.207.835-.658,1.154-.83.716-.383,1.336-.715,1.254-1.29-.059-.411-.471-.7-1.259-.871a2.9,2.9,0,0,0-.662-.063.593.593,0,0,0,0-.469h0c-.177-.406-.733-.522-1.653-.345a2.951,2.951,0,0,0-.888.288,3.47,3.47,0,0,0-.417.266.584.584,0,0,0-.218-.164.877.877,0,0,0-.948.267,7.161,7.161,0,0,0-.9.954,3.139,3.139,0,0,1-.572.595,1.793,1.793,0,0,1-1.328.046l-1.372-.287Z"
              transform="translate(-722.384 -504.172)"
              fill="#f2f2f2"
            />
            <path
              id="Path_99"
              data-name="Path 99"
              d="M745.5,502.035l1.242-1.283.01-.162a3.282,3.282,0,0,1,.6-1.818c.056-.073.115-.143.176-.214a2.775,2.775,0,0,0,.676-1.2c.076-.319.2-1.1-.3-1.377a.644.644,0,0,0-.388-.08c0-.024,0-.049.007-.075a1.954,1.954,0,0,0-.054-.669,2.283,2.283,0,0,1-.066-.534c0-.118,0-.216,0-.3a.833.833,0,0,0-.264-.766.889.889,0,0,0-.849-.007,4.275,4.275,0,0,0-.785.374,1.328,1.328,0,0,1-.146.08c-.2.064-.848-.641-1.1-.905-.552-.6-1.031-1.111-1.566-.885-.383.161-.555.632-.523,1.439a2.9,2.9,0,0,0,.107.656.593.593,0,0,0-.453.121h0c-.348.274-.319.841.085,1.686a2.95,2.95,0,0,0,.5.786,3.459,3.459,0,0,0,.363.336.584.584,0,0,0-.1.252c-.049.3.115.592.5.849a7.165,7.165,0,0,0,1.151.626,3.137,3.137,0,0,1,.72.4,1.792,1.792,0,0,1,.381,1.273l.07,1.4h0Z"
              transform="translate(-722.406 -484.845)"
              fill="#f2f2f2"
            />
            <path
              id="Path_100"
              data-name="Path 100"
              d="M691.546,537.652l.437.043.333-.285-.333.285.313.3c.03-.028.105-.086.222-.179a62,62,0,0,0,5.3-4.765,71.432,71.432,0,0,0,5.416-6.065c1.7-2.138,2.864-3.854,3.8-5.234.7-1.04,1.359-2.044,2-3.021a67.533,67.533,0,0,1,5.436-7.543,8.61,8.61,0,0,1,3.142-2.429,8.159,8.159,0,0,1,3.161-.665l-.013-.878a9.049,9.049,0,0,0-3.5.739,9.429,9.429,0,0,0-3.456,2.66,68.2,68.2,0,0,0-5.505,7.636c-.635.974-1.287,1.973-1.988,3.009-.925,1.367-2.077,3.068-3.758,5.178a70.566,70.566,0,0,1-5.349,5.991,61.068,61.068,0,0,1-5.224,4.7c-.336.268-.406.324-.424.519h0Z"
              transform="translate(-690.937 -494.319)"
              fill="#f2f2f2"
            />
            <path
              id="Path_101"
              data-name="Path 101"
              d="M768.809,503.687c.028.022.058.044.088.064a2.8,2.8,0,0,0,2.439.205,6.132,6.132,0,0,0,1.648-.935,10.967,10.967,0,0,0,1.427-1.187c.457-.447.61-.663.654-.925a1.339,1.339,0,0,0-.144-.824.5.5,0,0,0,.131-.226c.105-.381-.239-.586-.423-.7a2.147,2.147,0,0,1-.324-.22,1.1,1.1,0,0,1-.317-.476,2.436,2.436,0,0,0-.4-.677,2.615,2.615,0,0,0-1.159-.757,3.844,3.844,0,0,0-2.715.313,6.7,6.7,0,0,0-1.581.864,1.961,1.961,0,0,0-.747.806c-.171.4-.116.743.073,1.558a11.773,11.773,0,0,0,.422,1.59,3.3,3.3,0,0,0,.932,1.525Z"
              transform="translate(-738.563 -487.821)"
              fill="#f2f2f2"
            />
          </g>
          <g
            id="Group_40"
            data-name="Group 40"
            transform="translate(198.511 33.724)">
            <g
              id="Group_36"
              data-name="Group 36"
              transform="translate(37.238 156.563)">
              <path
                id="Path_102"
                data-name="Path 102"
                d="M680.048,537.928H673.51L670.4,512.706h9.651Z"
                transform="translate(-657.334 -512.706)"
                fill="#a0616a"
              />
              <path
                id="Path_103"
                data-name="Path 103"
                d="M635.509,567.765h0a5.614,5.614,0,0,0-.311,1.848h0a2.219,2.219,0,0,0,2.219,2.219h20.25a1.514,1.514,0,0,0,1.514-1.514v-.843a6.473,6.473,0,0,0-1.061-5.657s-2.563,2.445-6.393-1.385l-1.13-2.046-8.176,5.98-4.532.558c-.991.122-1.871-.019-2.381.84Z"
                transform="translate(-635.198 -542.691)"
                fill="#2f2e41"
              />
            </g>
            <g
              id="Group_37"
              data-name="Group 37"
              transform="translate(19.383 156.563)">
              <path
                id="Path_104"
                data-name="Path 104"
                d="M631.939,537.928H625.4l-3.111-25.222h9.651Z"
                transform="translate(-609.225 -512.706)"
                fill="#a0616a"
              />
              <path
                id="Path_105"
                data-name="Path 105"
                d="M587.4,567.765h0a5.614,5.614,0,0,0-.311,1.848h0a2.219,2.219,0,0,0,2.219,2.219h20.25a1.514,1.514,0,0,0,1.514-1.514v-.843a6.472,6.472,0,0,0-1.061-5.657s-2.563,2.445-6.394-1.385l-1.129-2.046-8.176,5.98-4.532.558c-.991.122-1.871-.019-2.381.84Z"
                transform="translate(-587.089 -542.691)"
                fill="#2f2e41"
              />
            </g>
            <path
              id="Path_106"
              data-name="Path 106"
              d="M632.252,93.591s-3.406,2-2.289,3.972,2.674,4.666,1.618,5.513-2.8,4.583-2.8,4.583-7.444-1.04-6.745,4.743,4.2,6.571,1.2,9.115,3.115,5.586,3.115,5.586,4.22-1.315,5.183-5.359-.858,3.092-.247,3.6,2.982,3.884,4.66-.6.016-6.223,2.234-8.869,3.725-6.927,3.659-7.675,2.536-7.576-1.469-10.239a54.268,54.268,0,0,0-8.115-4.374Z"
              transform="translate(-589.653 -92.579)"
              fill="#2f2e41"
            />
            <path
              id="Path_107"
              data-name="Path 107"
              d="M649.772,133l-2.411,8.568h13.23l-4.356-10.557Z"
              transform="translate(-605.609 -116.113)"
              fill="#a0616a"
            />
            <path
              id="Path_108"
              data-name="Path 108"
              d="M649.772,133l-2.411,8.568h13.23l-4.356-10.557Z"
              transform="translate(-605.609 -116.113)"
              opacity="0.1"
            />
            <path
              id="Path_109"
              data-name="Path 109"
              d="M648.406,289.546s5.651,7.193,4.367,21.578-5.651,77.091-5.651,77.091h-7.562l-6.053-58.6-3.7,58.6-11.565-.536,2.647-102.827,27.521,4.694Z"
              transform="translate(-587.294 -212.855)"
              fill="#2f2e41"
            />
            <g
              id="Group_38"
              data-name="Group 38"
              transform="translate(0 20.561)">
              <path
                id="uuid-15dc6cf4-99a2-4708-8e21-b6a3347dd403"
                d="M536.274,152.863c-1.7-2.319-1.888-5.079-.412-6.163s4.054-.083,5.758,2.238a7.2,7.2,0,0,1,1.352,3.121l7.1,9.919-4.725,3.23-6.493-10.121A7.2,7.2,0,0,1,536.274,152.863Z"
                transform="translate(-534.865 -146.263)"
                fill="#a0616a"
              />
              <path
                id="Path_110"
                data-name="Path 110"
                d="M587.694,174.59l-20.115,14.632s-4.463,3-9.626-3.532-10.363-16.637-10.363-16.637l4.653-3.463,5.671,7.39s3.744,2.4,3.826,3.511-.79,1.4.541,1.3,1.5-.847,1.361.312-1.166,2.35.544,1.333,2-.146,2-.146l13.385-12.132s7.948-4.151,9,1.125-.876,6.309-.876,6.309Z"
                transform="translate(-542.867 -158.417)"
                fill="#6c63ff"
              />
            </g>
            <path
              id="Path_111"
              data-name="Path 111"
              d="M630.37,156.652h11.782l10.823,16.954-4.5,23.5,2.954,15.027-30.075-7.905,2.366-.937,1.251-9.653-5.395-16.472,4.624-13.582Z"
              transform="translate(-588.139 -132.236)"
              fill="#6c63ff"
            />
            <path
              id="Path_112"
              data-name="Path 112"
              d="M656.793,106.424a7.967,7.967,0,1,1-7.967-7.967A7.967,7.967,0,0,1,656.793,106.424Z"
              transform="translate(-601.519 -95.639)"
              fill="#a0616a"
            />
            <path
              id="Path_113"
              data-name="Path 113"
              d="M653.4,92.753s-1.328,3.718.8,4.515,5.046,1.859,4.78,3.187.8,5.312.8,5.312-6.374,3.984-2.125,7.967,7.436,2.342,6.772,6.217,5.976,2.281,5.976,2.281,2.39-3.718.531-7.436,1.328,2.921,2.125,2.921,4.78,1.062,3.187-3.452-3.984-4.78-3.984-8.233-1.593-7.7-2.125-8.233-2.921-7.436-7.7-6.9a54.268,54.268,0,0,0-9.03,1.859Z"
              transform="translate(-609.15 -90.865)"
              fill="#2f2e41"
            />
            <g
              id="Group_39"
              data-name="Group 39"
              transform="translate(47.611 28.749)">
              <path
                id="uuid-800338dd-1caa-42bd-b73f-d0ae9c40b57c"
                d="M670.087,302.879c-.747,2.9-2.848,4.859-4.691,4.383s-2.731-3.21-1.983-6.107a7.486,7.486,0,0,1,1.624-3.141l3.322-12.233,5.708,1.681-3.881,11.881a7.488,7.488,0,0,1-.1,3.536Z"
                transform="translate(-663.147 -242.188)"
                fill="#a0616a"
              />
              <path
                id="Path_114"
                data-name="Path 114"
                d="M671.821,176.519s3.233-8.736,6.776-8.167,6.773,6.06,6.773,6.06l-2.561,31.077-7.035,17.734-7.463-2.942,3.876-17.724Z"
                transform="translate(-666.394 -168.325)"
                fill="#6c63ff"
              />
            </g>
          </g>
          <g
            id="Group_41"
            data-name="Group 41"
            transform="translate(53.701 188.986)">
            <path
              id="Path_115"
              data-name="Path 115"
              d="M148.925,535.414h6.8l3.233-26.213h-10.03Z"
              transform="translate(-147.353 -509.201)"
              fill="#ffb6b6"
            />
            <path
              id="Path_116"
              data-name="Path 116"
              d="M169.547,566.424h0a5.834,5.834,0,0,1,.323,1.921h0a2.306,2.306,0,0,1-2.307,2.307H146.518a1.574,1.574,0,0,1-1.574-1.573V568.2a6.727,6.727,0,0,1,1.1-5.879s2.664,2.542,6.645-1.439l1.174-2.127,8.5,6.215,4.71.58c1.03.127,1.944-.02,2.474.873h0Z"
              transform="translate(-144.692 -540.364)"
              fill="#2f2e41"
            />
          </g>
          <g
            id="Group_42"
            data-name="Group 42"
            transform="translate(38.217 182.314)">
            <path
              id="Path_117"
              data-name="Path 117"
              d="M111.532,509.61l4.766,4.844,20.953-16.079-7.035-7.149Z"
              transform="translate(-108.355 -491.226)"
              fill="#ffb6b6"
            />
            <path
              id="Path_118"
              data-name="Path 118"
              d="M122.587,551.93h0a5.836,5.836,0,0,1-1.143,1.578h0a2.307,2.307,0,0,1-3.262-.027l-14.76-15a1.574,1.574,0,0,1,.018-2.225l.625-.615a6.727,6.727,0,0,1,4.964-3.337s.057,3.682,5.686,3.728l2.339-.655,1.529,10.416,2.89,3.764c.632.824,1.377,1.372,1.113,2.376h0Z"
              transform="translate(-102.971 -517.056)"
              fill="#2f2e41"
            />
          </g>
          <g
            id="Group_43"
            data-name="Group 43"
            transform="translate(65.969 73.236)">
            <path
              id="Path_119"
              data-name="Path 119"
              d="M197.275,274.815l-16.482-40.634,9.217-1.378,12.273,37.29,2.093,5.49a8.843,8.843,0,0,1,2.276,3.5c1.218,3.318.494,6.635-1.617,7.41s-4.809-1.286-6.026-4.6a8.843,8.843,0,0,1-.529-4.144l-1.135-2.96-.071.028Z"
              transform="translate(-179.662 -219.636)"
              fill="#ffb6b6"
            />
            <path
              id="Path_120"
              data-name="Path 120"
              d="M190.126,200.245l8.4,34.1s-9.1-3.142-13.159,2.343c0,0-9.247-34.724-7.374-37.256s11.152-3.219,12.072.421"
              transform="translate(-177.746 -197.327)"
              fill="#e6e6e6"
            />
          </g>
          <path
            id="Path_121"
            data-name="Path 121"
            d="M176.124,282.566l5.938,57.156-25.238,33.032-6.309-4.825,15.4-28.763L148.659,300.38s2.6-17.444,3.711-19.671S176.124,282.566,176.124,282.566Z"
            transform="translate(-93.485 -176.109)"
            fill="#2f2e41"
          />
          <path
            id="Path_122"
            data-name="Path 122"
            d="M147.912,325.836l-3.34,3.34-2.412,76.641,12.99,1.485,3.062-61.773Z"
            transform="translate(-89.398 -204.905)"
            fill="#2f2e41"
          />
          <path
            id="Path_123"
            data-name="Path 123"
            d="M157.092,180.336l9.65,3.34,8.165,17.073v21.439s0,2.315-2.969,1.2-14.475-5.567-14.475-5.567-7.052,4.454-8.907,3.34-1.856-1.821-1.856-3.323-2.041-15.049-2.041-15.049l6.681-17.073,5.753-5.382Z"
            transform="translate(-90.97 -113.406)"
            fill="#e6e6e6"
          />
          <path
            id="Path_124"
            data-name="Path 124"
            d="M152.341,272.625,142.049,230h9.319l6.624,38.7,1.259,5.739a8.842,8.842,0,0,1,1.734,3.8c.714,3.462-.492,6.635-2.695,7.089s-4.566-1.983-5.279-5.443a8.843,8.843,0,0,1,.089-4.177l-.685-3.1-.074.017Z"
            transform="translate(-89.329 -144.637)"
            fill="#ffb6b6"
          />
          <path
            id="Path_125"
            data-name="Path 125"
            d="M153.575,197.287l2.08,28.268a14.56,14.56,0,0,0-11.134,4.083s-5.05-32.721-2.823-34.948,11.505-1.534,11.877,2.2"
            transform="translate(-88.751 -121.635)"
            fill="#e6e6e6"
          />
          <path
            id="Path_126"
            data-name="Path 126"
            d="M359.267,195.14h-85.62a4.887,4.887,0,0,1-4.882-4.882V177.382a4.887,4.887,0,0,1,4.882-4.882h90.5v17.758a4.887,4.887,0,0,1-4.882,4.882Z"
            transform="translate(-169.016 -108.478)"
            fill="#e6e6e6"
          />
          <path
            id="Path_127"
            data-name="Path 127"
            d="M558.615,142.222a.371.371,0,0,1-.264-.632,5.2,5.2,0,0,0-3.7-8.848h-.032a5.161,5.161,0,0,0-3.665,1.544.371.371,0,1,1-.528-.522A5.9,5.9,0,0,1,554.619,132h.037a5.938,5.938,0,0,1,4.223,10.112A.37.37,0,0,1,558.615,142.222Z"
            transform="translate(-346.076 -83.009)"
            fill="#3f3d56"
          />
          <path
            id="Path_128"
            data-name="Path 128"
            d="M379.817,202.211h-41.2a1.856,1.856,0,0,1,0-3.711h41.2a1.856,1.856,0,1,1,0,3.711Z"
            transform="translate(-211.777 -124.828)"
            fill="#fff"
          />
          <path
            id="Path_129"
            data-name="Path 129"
            d="M559.621,144.376a1.856,1.856,0,1,1,1.856-1.856A1.858,1.858,0,0,1,559.621,144.376Zm0-2.969a1.113,1.113,0,1,0,1.114,1.113A1.115,1.115,0,0,0,559.621,141.407Z"
            transform="translate(-350.755 -88.458)"
            fill="#3f3d56"
          />
          <rect
            id="Rectangle_9"
            data-name="Rectangle 9"
            width="35.258"
            height="37.114"
            rx="7.252"
            transform="translate(89.915 132.126)"
            fill="#fff"
          />
          <path
            id="Path_130"
            data-name="Path 130"
            d="M274.2,392.856H244.328a3.066,3.066,0,0,1-3.063-3.063V358.063A3.066,3.066,0,0,1,244.328,355H274.2a3.066,3.066,0,0,1,3.063,3.063v31.731A3.066,3.066,0,0,1,274.2,392.856Zm-29.875-37.114a2.323,2.323,0,0,0-2.32,2.32v31.731a2.323,2.323,0,0,0,2.32,2.32H274.2a2.323,2.323,0,0,0,2.32-2.32V358.063a2.323,2.323,0,0,0-2.32-2.32Z"
            transform="translate(-151.721 -223.245)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_10"
            data-name="Rectangle 10"
            width="13.732"
            height="5.849"
            transform="translate(94.739 136.58)"
            fill="#e6e6e6"
          />
          <path
            id="Path_131"
            data-name="Path 131"
            d="M298.347,403.961h-11.06a1.524,1.524,0,0,1-1.522-1.522v-3.176a1.523,1.523,0,0,1,1.522-1.522h11.06a1.523,1.523,0,0,1,1.522,1.522v3.176A1.524,1.524,0,0,1,298.347,403.961Z"
            transform="translate(-179.706 -250.123)"
            fill="#e6e6e6"
          />
          <path
            id="Path_132"
            data-name="Path 132"
            d="M273.032,429.832h-11.06a1.709,1.709,0,0,1-1.707-1.707v-3.176a1.709,1.709,0,0,1,1.707-1.707h11.06a1.709,1.709,0,0,1,1.707,1.707v3.176A1.709,1.709,0,0,1,273.032,429.832Zm-11.06-5.849a.966.966,0,0,0-.965.965v3.176a.966.966,0,0,0,.965.965h11.06a.966.966,0,0,0,.965-.965v-3.176a.966.966,0,0,0-.965-.965Z"
            transform="translate(-163.67 -266.159)"
            fill="#e6e6e6"
          />
          <path
            id="Path_133"
            data-name="Path 133"
            d="M269.26,375.356h-5.567a.928.928,0,0,1,0-1.856h5.567a.928.928,0,0,1,0,1.856Z"
            transform="translate(-165.242 -234.879)"
            fill="#fff"
          />
          <path
            id="Path_134"
            data-name="Path 134"
            d="M302.26,405.356h-5.567a.928.928,0,1,1,0-1.856h5.567a.928.928,0,0,1,0,1.856Z"
            transform="translate(-185.994 -253.744)"
            fill="#fff"
          />
          <path
            id="Path_135"
            data-name="Path 135"
            d="M275.26,431.356h-5.567a.928.928,0,1,1,0-1.856h5.567a.928.928,0,1,1,0,1.856Z"
            transform="translate(-169.015 -270.095)"
            fill="#e6e6e6"
          />
          <g
            id="Group_44"
            data-name="Group 44"
            transform="translate(127.015 109.223)">
            <path
              id="Path_136"
              data-name="Path 136"
              d="M342.8,344.549a28.216,28.216,0,0,0,16.217-7.472,27.462,27.462,0,0,0,8.424-17,27.937,27.937,0,0,0-1.022-11.208c-.209-.686-1.263-.327-1.054.359a27.026,27.026,0,0,1-1.254,18.868,26.77,26.77,0,0,1-21.387,15.341c-.71.075-.639,1.186.076,1.111h0Z"
              transform="translate(-342.229 -303.226)"
              fill="#3f3d56"
            />
            <path
              id="Path_137"
              data-name="Path 137"
              d="M389.83,303.566l3.947-8.468-.868.163,6.594,6.833c.5.517,1.237-.317.742-.83l-6.594-6.833a.56.56,0,0,0-.868.163l-3.947,8.468c-.3.649.69,1.154.993.5Z"
              transform="translate(-371.503 -294.289)"
              fill="#3f3d56"
            />
          </g>
          <g
            id="Group_45"
            data-name="Group 45"
            transform="translate(115.152 141.776)">
            <circle
              id="Ellipse_27"
              data-name="Ellipse 27"
              cx="4.454"
              cy="4.454"
              r="4.454"
              fill="#6c63ff"
            />
            <path
              id="Path_138"
              data-name="Path 138"
              d="M320.537,387.908a.326.326,0,0,0-.391.222l-1.232,2.949-1.287-1.875c-.23-.335-.782-.018-.549.321l1.629,2.373a.323.323,0,0,0,.581-.076l1.471-3.522a.32.32,0,0,0-.222-.391Z"
              transform="translate(-314.514 -385.707)"
              fill="#fff"
            />
          </g>
          <rect
            id="uuid-fd87b38b-9a3a-463a-bd94-d3d374d132bf"
            width="315.854"
            height="0.625"
            transform="translate(0 219.287)"
            fill="#e6e6e6"
          />
          <g
            id="Group_46"
            data-name="Group 46"
            transform="translate(95.853 69.775)">
            <path
              id="Path_139"
              data-name="Path 139"
              d="M275.378,208.784H261.936a3.675,3.675,0,0,1-3.671-3.671V191.671A3.675,3.675,0,0,1,261.936,188h13.442a3.675,3.675,0,0,1,3.671,3.671v13.442A3.675,3.675,0,0,1,275.378,208.784Zm-13.442-19.839a2.729,2.729,0,0,0-2.726,2.726v13.442a2.729,2.729,0,0,0,2.726,2.726h13.442a2.729,2.729,0,0,0,2.726-2.726V191.671a2.729,2.729,0,0,0-2.726-2.726Z"
              transform="translate(-258.265 -188)"
              fill="#3f3d56"
            />
            <path
              id="Path_140"
              data-name="Path 140"
              d="M282.171,211.006H274.01a4.932,4.932,0,0,1-4.926-4.926v-8.161Z"
              transform="translate(-265.068 -194.237)"
              fill="#6c63ff"
            />
          </g>
          <g id="Group_47" data-name="Group 47" transform="translate(177.133)">
            <path
              id="Path_141"
              data-name="Path 141"
              d="M490.711,16.33H480.15a2.888,2.888,0,0,1-2.884-2.884V2.884A2.888,2.888,0,0,1,480.15,0h10.562A2.888,2.888,0,0,1,493.6,2.884V13.446a2.888,2.888,0,0,1-2.884,2.884ZM480.15.742a2.144,2.144,0,0,0-2.142,2.142V13.446a2.144,2.144,0,0,0,2.142,2.142h10.562a2.144,2.144,0,0,0,2.142-2.142V2.884A2.144,2.144,0,0,0,490.711.742Z"
              transform="translate(-477.266)"
              fill="#e6e6e6"
            />
            <path
              id="Path_142"
              data-name="Path 142"
              d="M496.048,18.076h-6.413a3.875,3.875,0,0,1-3.871-3.871V7.793l10.283,10.283Z"
              transform="translate(-482.61 -4.901)"
              fill="#6c63ff"
            />
          </g>
          <path
            id="Path_143"
            data-name="Path 143"
            d="M555.711,78.33H545.15a2.888,2.888,0,0,1-2.884-2.884V64.884A2.888,2.888,0,0,1,545.15,62h10.562a2.888,2.888,0,0,1,2.884,2.884V75.446A2.888,2.888,0,0,1,555.711,78.33ZM545.15,62.742a2.144,2.144,0,0,0-2.142,2.142V75.446a2.144,2.144,0,0,0,2.142,2.142h10.562a2.144,2.144,0,0,0,2.142-2.142V64.884a2.144,2.144,0,0,0-2.142-2.142Z"
            transform="translate(-341.008 -38.989)"
            fill="#e6e6e6"
          />
          <path
            id="Path_144"
            data-name="Path 144"
            d="M551.265,71v9.65h9.65Z"
            transform="translate(-346.668 -44.649)"
            fill="#6c63ff"
          />
          <g
            id="Group_48"
            data-name="Group 48"
            transform="translate(178.989 59.754)">
            <path
              id="Path_145"
              data-name="Path 145"
              d="M482.265,177.808v-13.2A3.61,3.61,0,0,1,485.87,161h13.2a3.609,3.609,0,0,1,3.605,3.605v13.2a3.61,3.61,0,0,1-3.605,3.605h-13.2A3.61,3.61,0,0,1,482.265,177.808Zm3.605-15.88a2.68,2.68,0,0,0-2.678,2.678v13.2a2.68,2.68,0,0,0,2.678,2.678h13.2a2.68,2.68,0,0,0,2.678-2.678v-13.2a2.68,2.68,0,0,0-2.678-2.678Z"
              transform="translate(-482.265 -161)"
              fill="#3f3d56"
            />
            <path
              id="Path_146"
              data-name="Path 146"
              d="M493.515,172.25h12.062v12.062Z"
              transform="translate(-489.34 -168.075)"
              fill="#6c63ff"
            />
          </g>
          <circle
            id="Ellipse_28"
            data-name="Ellipse 28"
            cx="9.496"
            cy="9.496"
            r="9.496"
            transform="translate(62.776 46.644)"
            fill="#ffb6b6"
          />
          <path
            id="Path_147"
            data-name="Path 147"
            d="M175.433,123.46c-1.856,1.856-3.34,3.711-3.34,3.711l-.742-2.969s-.171.126-.471.327c-1.176.8-4.335,2.817-6.87,3.251a3,3,0,0,1-2.784-.609,7.01,7.01,0,0,1-1.885-2.583l-.5,3.273-2.706,1.165a10.935,10.935,0,0,0,2.969,7.052,3.4,3.4,0,0,1,.423.531c1.418,2.138,2.435,7.371,3.08,11.821.572,3.956.846,7.289.846,7.289s-2.81-3.518-5.894-4a3.982,3.982,0,0,0-.512-.048,1.315,1.315,0,0,0-.171-.007c-3.34,0-10.392,2.6-10.392,2.6s-4.825-7.794-1.856-10.021,4.825-13.361,4.825-13.361a34.462,34.462,0,0,1,1.106-9.037c.913-3.173,2.568-6.076,5.575-6.551,7.052-1.113,7.052-5.2,11.505-.742.367.367.739.72,1.11,1.061,4.149,3.815,8.388,6.142,6.684,7.846Z"
            transform="translate(-90.344 -70.758)"
            fill="#2f2e41"
          />
          <g
            id="Group_49"
            data-name="Group 49"
            transform="translate(198.505 6.954)">
            <path
              id="Path_148"
              data-name="Path 148"
              d="M548.5,34.138a9.6,9.6,0,0,0-.332-6.063,9.338,9.338,0,0,0-4.32-4.791,9.5,9.5,0,0,0-3.671-1.08c-.243-.02-.261.359-.018.378a9.19,9.19,0,0,1,5.808,2.758,9.1,9.1,0,0,1,2.173,8.682c-.065.234.3.351.361.115h0Z"
              transform="translate(-538.08 -20.917)"
              fill="#e6e6e6"
            />
            <path
              id="Path_149"
              data-name="Path 149"
              d="M537.362,22.334l-2.183-2.308-.057.295,2.986-1.23c.226-.093.055-.431-.17-.339l-2.986,1.23a.191.191,0,0,0-.057.295l2.183,2.308c.167.177.451-.074.284-.251h0Z"
              transform="translate(-534.849 -18.737)"
              fill="#e6e6e6"
            />
          </g>
          <g
            id="Group_50"
            data-name="Group 50"
            transform="translate(184.035 20.802)">
            <path
              id="Path_150"
              data-name="Path 150"
              d="M496.2,56.176a9.6,9.6,0,0,0,.332,6.063,9.338,9.338,0,0,0,4.32,4.791,9.5,9.5,0,0,0,3.671,1.08c.243.02.261-.359.018-.378a9.19,9.19,0,0,1-5.808-2.758,9.1,9.1,0,0,1-2.173-8.682c.065-.234-.3-.351-.361-.115h0Z"
              transform="translate(-495.862 -56.047)"
              fill="#e6e6e6"
            />
            <path
              id="Path_151"
              data-name="Path 151"
              d="M516.65,81.8l2.183,2.308.057-.295-2.986,1.23c-.226.093-.055.431.17.339l2.986-1.23a.191.191,0,0,0,.057-.295l-2.183-2.308c-.167-.177-.451.074-.284.251Z"
              transform="translate(-508.399 -72.045)"
              fill="#e6e6e6"
            />
          </g>
        </g>
      </g>
    </svg>
  </span>
)
