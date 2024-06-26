import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={12} cy={12} r={8.5} stroke={'currentColor'} />
    <g fill={'currentColor'}>
      <path
        d={
          'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M6 6h12v12H6z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
