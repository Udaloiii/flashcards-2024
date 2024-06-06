import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    viewBox={'0 0 500 500'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M0 0h500v500H0z'}
      style={{
        fill: '#000000',
      }}
    />
    <path
      d={
        'M37.712 141.585a6.733 6.733 0 0 0-5.604 7.698l27.773 176.462a6.733 6.733 0 0 0 7.698 5.604l128.514-20.227a6.733 6.733 0 0 0 5.604-7.698L178.499 156.03l-42.684-29.886-98.103 15.441z'
      }
      style={{
        fill: '#f5f5f5',
      }}
    />
    <path
      d={'m145.786 161.18 32.713-5.149-42.684-29.886 4.937 31.371a4.403 4.403 0 0 0 5.034 3.664z'}
      style={{
        fill: '#d6d6d6',
      }}
    />
    <path
      d={'m135.815 126.145 4.937 31.371a4.402 4.402 0 0 0 5.033 3.664l32.713-5.149'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 0.274,
      }}
    />
    <path
      d={
        'M108.669 245.785c-.707-4.495-.934-8.17-.68-11.021.254-2.851 1.191-5.575 2.813-8.173a19.225 19.225 0 0 1 3.329-4.155 37.843 37.843 0 0 0 3.506-3.773 17.089 17.089 0 0 0 2.501-4.201c.622-1.504.76-3.359.412-5.57-.587-3.732-2.027-6.182-4.319-7.344-2.291-1.162-4.848-1.521-7.666-1.078-4.04.636-6.644 2.199-7.813 4.685-1.171 2.489-1.647 5.667-1.428 9.537l-14.744 2.321c-.588-3.733-.513-7.22.227-10.461.739-3.239 2.065-6.103 3.977-8.591 1.911-2.486 4.359-4.551 7.342-6.192 2.981-1.64 6.378-2.761 10.189-3.361 8.229-1.295 14.989-.641 20.28 1.962 5.289 2.605 8.529 7.677 9.716 15.221.384 2.44.471 4.611.265 6.518-.209 1.907-.691 3.681-1.446 5.323-.758 1.642-1.758 3.225-3.001 4.748a74.59 74.59 0 0 1-4.285 4.774c-1.473 1.56-2.636 2.974-3.492 4.239-.855 1.267-1.454 2.553-1.794 3.855a13.392 13.392 0 0 0-.426 3.991c.057 1.358.219 2.876.482 4.551l-13.945 2.195zm3.016 22.132-2.357-14.973 15.43-2.429 2.357 14.973-15.43 2.429z'
      }
      style={{
        fill: '#d6d6d6',
      }}
    />
    <path
      d={
        'M184.165 254.637a380.806 380.806 0 0 1 55.184 68.437 379.969 379.969 0 0 1 29.35 56.561l-48.917 22.013-41.92-142.656 6.303-4.355z'
      }
      style={{
        fill: '#fec02d',
      }}
    />
    <path
      d={
        'm153.265 243.101 31.361 9.802c8.593 13.628 13.556 25.7 16.469 34.095 13.569 39.1 9.217 74.882 7.987 84.994 0 0-.021.173-3.975 29.656H61.718a227.228 227.228 0 0 1 2.14-42.802c2.992-20.558 5.77-39.642 18.206-60.602 5.057-8.523 22.653-35.796 56.392-50.073a111.21 111.21 0 0 1 14.809-5.07z'
      }
      style={{
        fill: '#fec02d',
      }}
    />
    <path
      d={
        'M79.498 302.8a323.357 323.357 0 0 0 65.808 13.773 323.28 323.28 0 0 0 63.172.267l1.496 12.304a388.163 388.163 0 0 1-65.355-.189 388.192 388.192 0 0 1-71.131-12.983l6.01-13.172z'
      }
      style={{
        fill: '#ff7129',
      }}
    />
    <path
      d={'m214.055 291.834 7.103 1.585-25.863 108.229h-14.643z'}
      style={{
        fill: '#e8a600',
        opacity: 0.5,
      }}
    />
    <path
      d={'m156.037 380.916 6.083-1.892 13.942 7.207 3.516-8.526-17.694-6.805-7.223 3.385z'}
      style={{
        fill: '#e8a600',
      }}
    />
    <path
      d={'M61.494 385.444a309.895 309.895 0 0 0 95.984 8.561v-16.3l-94.669-10.576-1.315 18.315z'}
      style={{
        fill: '#e8a600',
        opacity: 0.5,
      }}
    />
    <path
      d={
        'M165.928 265.636c-8.867-1.52-14.823-9.94-13.303-18.807l5.923-34.55 32.11 5.505-5.923 34.55c-1.519 8.866-9.94 14.822-18.807 13.302z'
      }
      style={{
        fill: '#f7a99c',
      }}
    />
    <path
      d={
        'm186.394 242.662-19.016-14.401c-.105 1.847-.404 10.531 6.024 17.692 4.104 4.572 8.956 6.303 11.224 6.95l1.768-10.241z'
      }
      style={{
        fill: '#ff7769',
      }}
    />
    <path
      d={
        'M159.646 201.445c-.01-.539-1.246-1.568-1.621-1.912a10.05 10.05 0 0 0-2.102-1.482c-1.477-.778-3.177-1.197-4.851-1.11-3.328.172-6.635 2.363-7.745 5.562-.645 1.858-.55 3.914-.038 5.813.769 2.855 2.47 5.44 4.739 7.336 1.88 1.572 4.141 2.671 6.522 3.236.477.113 5.428.863 5.424.668l-.328-18.111z'
      }
      style={{
        fill: '#f7a99c',
      }}
    />
    <path
      d={
        'M155.188 201.008c-.072 2.643-.19 16.627 10.374 28.375 1.946 2.164 14.884 16.551 29.613 13.22 18.927-4.281 22.083-33.583 22.233-35.173.51-5.377 2.011-21.212-9.463-31.814-9.364-8.652-21.242-8.157-22.93-8.06-1.78.102-13.152.94-21.688 10.449-7.747 8.63-8.021 18.678-8.139 23.003z'
      }
      style={{
        fill: '#f7a99c',
      }}
    />
    <path
      d={
        'M207.396 205.695c-.112 2.311 1.343 4.26 3.251 4.353 1.908.093 3.546-1.705 3.658-4.016.113-2.311-1.343-4.26-3.251-4.353-1.908-.093-3.546 1.705-3.658 4.016z'
      }
      style={{
        fill: '#262626',
      }}
    />
    <path
      d={'m200.651 208.001 2.384 4.767c.438.876.03 1.94-.883 2.297l-3.174 1.243'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 1.7049,
      }}
    />
    <path
      d={'M177.868 214.134a4.701 4.701 0 1 0 9.392.456 4.701 4.701 0 0 0-9.392-.456z'}
      style={{
        fill: '#ff7769',
      }}
    />
    <path
      d={'M155.458 212.671c.104-.506.752-3.944-1.577-6.914-1.824-2.327-4.321-2.896-5.006-3.029'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 1.7049,
      }}
    />
    <path
      d={'M154.03 206.484c-.15-.051-1.957-.633-3.497.541-1.266.965-1.419 2.407-1.441 2.647'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 1.7049,
      }}
    />
    <path
      d={
        'M213.97 212.917a4.666 4.666 0 0 1 2.406.82 67.335 67.335 0 0 1-2.4 8.547c-.155.008-.305.032-.463.024a4.701 4.701 0 0 1 .457-9.391z'
      }
      style={{
        fill: '#ff7769',
      }}
    />
    <path
      d={'m188.955 200.728 3.913 4.44-5.604 1.974'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 1.7049,
      }}
    />
    <path
      d={
        'm187.264 225.775 14.088 1.605c-.038-.288-.655-4.449-3.999-5.962-3.278-1.483-7.897.159-10.089 4.357z'
      }
      style={{
        fill: '#fff',
      }}
    />
    <path
      d={
        'M155.338 197.768a9.284 9.284 0 0 1 4.062 3.09 9.258 9.258 0 0 1 1.758 4.452c14.612-1.387 23.047-5.493 28.127-9.19 0 0 .371-.27 11.083-8.408a33.731 33.731 0 0 0 8.255 6.497 33.712 33.712 0 0 0 9.032 3.463c7.679-1.787 13.033-7.524 13.211-13.514.187-6.309-5.421-11.085-9.401-13.07-6.495-3.239-9.483.54-19.006-1.955-7.676-2.011-7.389-4.9-14.587-6.644-2.175-.527-11.212-2.717-20.293 2.064-7.659 4.033-13.727 12.17-14.331 21.554-.332 5.135 1.061 9.277 2.09 11.661z'
      }
      style={{
        fill: '#262626',
      }}
    />
    <path
      d={
        'M153.265 243.101c-12.886 2.938-36.991 10.359-59.445 30.445 0 0-22.63 20.244-38.064 57.784-1.367 3.326-2.897 6.836-4.586 14.216a86.1 86.1 0 0 0-2.092 15.603c-.144 3.444 1.978 6.577 5.217 7.753a392.29 392.29 0 0 0 9.754 3.396c6.727 2.243 21.648 8.355 38.55 10.701 35.246 4.892 54.813 6.115 54.813 6.115l2.562-60.841-46.588-5.897 39.879-79.275z'
      }
      style={{
        fill: '#fec02d',
      }}
    />
    <path
      d={'M190.914 274.387c5.852 20.466 9.478 37.6 11.772 50.094'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d={'m129.973 270.718-26.14 58.887h15.821z'}
      style={{
        fill: '#e8a600',
        opacity: 0.5,
      }}
    />
    <path
      d={'M187.957 288.744h14.675v113.045h-14.675z'}
      style={{
        fill: '#4450e4',
      }}
      transform={'rotate(15.819 195.295 345.263)'}
    />
    <path
      d={
        'M158.956 342.598s26.491-2.638 29.315-1.767c2.824.871 12.49 6.343 13.856 7.904 1.366 1.561 1.854 3.025 1.659 4.489-.195 1.464-2.147 3.122-2.147 3.122 1.529 2.382 1.582 4.014 1.256 5.117-.582 1.971-2.894 4.029-2.915 4.055.171.61.363 1.485.415 2.549.05 1.011.15 3.047-.855 4.906-1.492 2.759-4.563 3.546-5.235 3.702 0 0 1.187 2.211-.374 4.065-1.561 1.854-6.245 4.196-11.807 3.415-5.562-.781-20.004-7.904-20.004-7.904l-4.642 1.453 1.478-35.106z'
      }
      style={{
        fill: '#f7a99c',
      }}
    />
    <circle
      cx={231.317}
      cy={227.38}
      r={64.454}
      style={{
        fill: '#cdebf5',
        opacity: 0.5,
      }}
    />
    <path
      d={
        'M231.317 154.55c-40.223 0-72.83 32.607-72.83 72.83s32.607 72.83 72.83 72.83 72.83-32.607 72.83-72.83-32.607-72.83-72.83-72.83zm0 133.768c-33.655 0-60.938-27.283-60.938-60.938s27.283-60.938 60.938-60.938 60.938 27.283 60.938 60.938-27.283 60.938-60.938 60.938z'
      }
      style={{
        fill: '#4450e4',
      }}
    />
    <path
      d={
        'M201.639 356.346s-9.756-1.819-14.685-4.112c-4.93-2.293-6.764-3.554-6.764-3.554M199.98 365.518s-11.307-1.131-15.893-3.768c-4.586-2.637-6.226-4.357-6.226-4.357M196.252 375.985c-4.842-.19-8.48-1.271-11.018-2.312-4.23-1.735-9.516-5.044-9.516-5.045h0'
      }
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 1.5,
      }}
    />
    <path
      d={'m158.956 342.598-1.478 35.107 4.642-1.453-1.488-33.817z'}
      style={{
        fill: '#ff7769',
      }}
    />
    <path
      d={
        'M128.139 274.387s-24.301 53.427-23.615 54.803c.685 1.376 55.451-.917 55.451-.917l-2.562 60.841s-42.76-2.703-59.676-6.901-36.243-10.776-36.243-10.776'
      }
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d={
        'M234.642 184.233a3.62 3.62 0 0 0 4.574 4.871c3.401-1.276 7.085-1.814 10.652-1.555 3.987.289 7.04 1.487 8.505 2.175 1.738.817 5.354 2.517 8.049 6.227 3.754 5.167 3.44 11.213 3.131 13.573a3.62 3.62 0 0 0 7.178.94c.524-3.999.642-11.756-4.452-18.768-3.789-5.216-8.721-7.534-10.827-8.524-2.345-1.102-6.167-2.489-11.062-2.844-4.602-.333-9.346.357-13.718 1.998a3.607 3.607 0 0 0-2.03 1.907z'
      }
      style={{
        fill: '#fff',
      }}
    />
    <path
      d={'M107.884 268.96a170.845 170.845 0 0 0-30.55 35.851 170.83 170.83 0 0 0-19.896 43.868'}
      style={{
        fill: 'none',
        stroke: '#fff',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d={'M279.094 401.648H170.865a7.643 7.643 0 0 1-7.643-7.643v-4.892h115.873v12.535z'}
      style={{
        fill: '#2a83c6',
      }}
    />
    <path
      d={
        'M359.834 401.648H241.757c-4.637 0-7.937-3.963-7.37-8.853l8.924-76.995c.567-4.889 4.785-8.853 9.422-8.853H370.81c4.637 0 7.937 3.964 7.37 8.853l-8.924 76.995c-.567 4.889-4.785 8.853-9.422 8.853z'
      }
      style={{
        fill: '#2a83c6',
      }}
    />
    <path
      d={
        'M371.234 401.648H253.157c-4.637 0-7.937-3.963-7.37-8.853l8.924-76.995c.567-4.889 4.785-8.853 9.422-8.853H382.21c4.637 0 7.937 3.964 7.37 8.853l-8.924 76.995c-.566 4.889-4.785 8.853-9.422 8.853z'
      }
      style={{
        fill: '#3897e9',
      }}
    />
    <path
      d={
        'm389.58 320.227-8.924 73.024s.399 8.396-13.358 8.396h-77.274c8.318-.053 37.447-1.252 64.204-23.159 26.704-21.863 33.648-50.107 35.352-58.261z'
      }
      style={{
        fill: '#5fbbff',
      }}
    />
    <path
      d={
        'M387.121 329.605c-2.674 8.656-9.171 25.604-24.741 41.432-15.36 15.615-31.932 22.396-40.511 25.252'
      }
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d={'M317.708 362.005h-4.127l2.63-16.739h4.128zM323.126 362.005h-4.127l1.813-11.542h4.128z'}
      style={{
        fill: '#fec02d',
      }}
    />
    <path
      d={
        'M202.357 164.835c-5.956 3.361-20.998 12.886-30.867 32.099-9.842 19.159-8.854 36.882-8.125 43.686M209.638 367.712l-2.321-16.373'
      }
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d={
        'M438.549 351.367H283.845a6.42 6.42 0 0 1-6.419-6.419v-113.26a6.42 6.42 0 0 1 6.419-6.419h154.703a6.42 6.42 0 0 1 6.419 6.419v113.26a6.417 6.417 0 0 1-6.418 6.419z'
      }
      style={{
        fill: '#f5f5f5',
      }}
    />
    <path
      d={
        'M444.968 239.858v-8.17a6.42 6.42 0 0 0-6.419-6.419H283.845a6.42 6.42 0 0 0-6.419 6.419v8.17h167.542z'
      }
      style={{
        fill: '#d6d6d6',
        opacity: 0.5,
      }}
    />
    <path
      d={
        'M286.14 233.328a1.987 1.987 0 1 1-3.974 0 1.987 1.987 0 0 1 3.974 0zM292.422 233.328a1.987 1.987 0 1 1-3.974 0 1.987 1.987 0 0 1 3.974 0zM298.842 233.328a1.987 1.987 0 1 1-3.974 0 1.987 1.987 0 0 1 3.974 0z'
      }
      style={{
        fill: '#f5f5f5',
      }}
    />
    <path
      d={
        'M379.308 269.82v-8.176a4.856 4.856 0 0 0-4.856-4.856h-47.46a4.856 4.856 0 0 0-4.856 4.856v62.645a4.856 4.856 0 0 0 4.856 4.856h75.893a4.856 4.856 0 0 0 4.856-4.856v-49.613a4.856 4.856 0 0 0-4.856-4.856h-23.577z'
      }
      style={{
        fill: '#d6d6d6',
        opacity: 0.5,
      }}
    />
    <path
      d={
        'm374.5 281.24-9.562 9.562-9.561-9.562-5.77 5.77 9.562 9.561-9.562 9.562 5.77 5.77 9.561-9.562 9.562 9.562 5.77-5.77-9.562-9.562 9.562-9.561z'
      }
      style={{
        fill: '#d6d6d6',
      }}
    />
    <path
      d={'M283.845 225.269h154.703a6.42 6.42 0 0 1 6.419 6.419v113.26'}
      style={{
        fill: 'none',
        stroke: '#262626',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: 10,
        strokeWidth: 0.274,
      }}
    />
    <path
      d={
        'M457.499 422.968H42.686c-5.887 0-10.66-4.773-10.66-10.66 0-5.887 4.773-10.66 10.66-10.66H457.5c5.887 0 10.66 4.773 10.66 10.66-.001 5.887-4.773 10.66-10.661 10.66z'
      }
      style={{
        fill: '#fdb6d6',
      }}
    />
    <path
      d={
        'M430.392 254.439c-.735-5.854-.881-10.625-.436-14.309.445-3.684 1.769-7.177 3.976-10.478a25.014 25.014 0 0 1 4.482-5.25 49.04 49.04 0 0 0 4.696-4.748 22.208 22.208 0 0 0 3.411-5.343c.867-1.923 1.121-4.323.759-7.202-.61-4.861-2.377-8.093-5.3-9.692-2.923-1.599-6.221-2.167-9.891-1.706-5.261.661-8.699 2.581-10.315 5.756-1.618 3.178-2.363 7.278-2.236 12.302l-19.201 2.411c-.611-4.861-.372-9.378.717-13.547 1.088-4.167 2.923-7.826 5.502-10.973 2.578-3.145 5.832-5.722 9.765-7.728 3.929-2.005 8.377-3.32 13.34-3.943 10.717-1.346 19.451-.224 26.202 3.362 6.749 3.589 10.743 10.293 11.977 20.118.399 3.177.424 5.995.08 8.457-.347 2.463-1.045 4.743-2.09 6.84-1.048 2.097-2.409 4.108-4.081 6.031-1.675 1.925-3.589 3.928-5.746 6.014-1.972 1.963-3.537 3.747-4.696 5.353-1.159 1.608-1.988 3.25-2.481 4.923a17.404 17.404 0 0 0-.714 5.155c.018 1.763.167 3.736.441 5.917l-18.161 2.28zm3.013 28.804-2.449-19.5 20.095-2.523 2.449 19.5-20.095 2.523z'
      }
      style={{
        fill: '#ff7129',
      }}
    />
    <circle
      cx={347.074}
      cy={122.549}
      r={51.426}
      style={{
        fill: '#f5f5f5',
      }}
      transform={'rotate(-45.001 347.074 122.554)'}
    />
    <circle
      cx={347.074}
      cy={122.549}
      r={41.732}
      style={{
        fill: '#d6d6d6',
        opacity: 0.5,
      }}
      transform={'rotate(-45.001 347.074 122.554)'}
    />
    <path
      d={'M345.698 93.178h2.751v33.957h-2.751z'}
      style={{
        fill: '#d6d6d6',
      }}
    />
    <path
      d={'M354.537 120.297h2.752v22.001h-2.752z'}
      style={{
        fill: '#d6d6d6',
      }}
      transform={'rotate(-60 355.922 131.305)'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)