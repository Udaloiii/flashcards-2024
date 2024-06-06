import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={1}
    ref={ref}
    width={33}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M.5.5h350'} stroke={'#fff'} strokeDasharray={'3 3'} strokeLinecap={'round'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
