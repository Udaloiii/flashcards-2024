import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    ref={ref}
    // style={{
    //   enableBackground: 'new 0 0 337.086 212.885',
    // }}
    viewBox={'0 0 337.086 212.885'}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    {/*<path*/}
    {/*  d={*/}
    {/*    'M331.98 55.325a6.036 6.036 0 0 0-1.63-4.941L290.408 8.696a4.266 4.266 0 0 0-.369-.347 5.383 5.383 0 0 0-.583-.46l-.09-.06a5.298 5.298 0 0 0-.667-.37 4.602 4.602 0 0 0-.516-.228 5.533 5.533 0 0 0-.438-.144l-.132-.036a5.923 5.923 0 0 0-.54-.121l-.098-.016a6.09 6.09 0 0 0-.381-.046 4.75 4.75 0 0 0-.544-.031H122.44c-.195 0-.394.013-.592.037a5.941 5.941 0 0 0-1.717.423l-75.16 30.075a4.905 4.905 0 0 0-.606.294 5.6 5.6 0 0 0-.601.37c-.182.126-.35.257-.479.37a4.523 4.523 0 0 0-.458.43 7.93 7.93 0 0 0-.613.779 5.033 5.033 0 0 0-.317.515L9.941 99.962a6.058 6.058 0 0 0 .116 5.941 6.065 6.065 0 0 0 5.137 2.959l25.991.232v94.562c0 .7.129 1.404.366 2.045a5.997 5.997 0 0 0 1.617 2.419 5.234 5.234 0 0 0 1.462.975 6.005 6.005 0 0 0 2.589.594h163.613c.752 0 1.488-.139 2.203-.418l.061-.023 75.194-30.094a5.551 5.551 0 0 0 .72-.357 5.774 5.774 0 0 0 1.636-1.356c.284-.336.534-.707.738-1.098a5.995 5.995 0 0 0 .699-2.791V82.376l37.055-22.668a6.005 6.005 0 0 0 2.842-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M331.602 54.993a6.031 6.031 0 0 0-1.63-4.94L290.029 8.364a4.491 4.491 0 0 0-.369-.346 4.809 4.809 0 0 0-.582-.46l-.091-.061a5.294 5.294 0 0 0-.447-.259c-.071-.038-.145-.074-.22-.111-.096-.047-.195-.096-.281-.133a4.432 4.432 0 0 0-.235-.095 6.123 6.123 0 0 0-.439-.143l-.131-.037a7.932 7.932 0 0 0-.541-.12l-.098-.017c-.127-.02-.253-.032-.381-.045a5.252 5.252 0 0 0-.544-.031H122.062c-.195 0-.394.015-.592.037a6.437 6.437 0 0 0-1.569.364c-.049.019-.1.038-.148.059l-75.16 30.076c-.207.083-.41.185-.606.293-.22.123-.428.25-.601.371a6.878 6.878 0 0 0-.718.58c-.075.071-.147.145-.219.219a5.41 5.41 0 0 0-.391.472c-.076.103-.15.204-.222.308a5.75 5.75 0 0 0-.317.514L9.562 99.631a6.056 6.056 0 0 0 .116 5.94 6.07 6.07 0 0 0 5.137 2.96l25.991.231v94.563c0 .699.133 1.401.366 2.045.051.138.13.339.191.474a6.03 6.03 0 0 0 1.426 1.944c.153.14.367.329.653.525.323.221.621.363.809.45a6.104 6.104 0 0 0 2.589.595h163.613a5.96 5.96 0 0 0 2.204-.417l.06-.024 75.194-30.094a4.63 4.63 0 0 0 .374-.167c.117-.059.232-.123.346-.189a6.33 6.33 0 0 0 1.071-.767 6.178 6.178 0 0 0 1.303-1.688 6.06 6.06 0 0 0 .302-.658 6.109 6.109 0 0 0 .397-2.132V82.045l37.055-22.669a6.009 6.009 0 0 0 2.843-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M331.223 54.663a6.032 6.032 0 0 0-1.629-4.942L289.651 8.033c-.023-.025-.049-.049-.073-.072-.098-.094-.193-.188-.296-.275a5.615 5.615 0 0 0-.583-.46l-.09-.06a5.298 5.298 0 0 0-.667-.37 5.682 5.682 0 0 0-.516-.228 7.08 7.08 0 0 0-1.111-.301l-.098-.016c-.127-.02-.254-.032-.381-.046a5.25 5.25 0 0 0-.544-.03H121.684c-.195 0-.394.015-.592.036a6.283 6.283 0 0 0-1.717.424L44.215 36.71c-.208.084-.41.186-.606.295-.22.122-.427.248-.601.37a6.548 6.548 0 0 0-.936.799c-.14.148-.268.307-.392.473-.075.102-.149.202-.221.306a5.542 5.542 0 0 0-.317.515L9.184 99.299a6.06 6.06 0 0 0 .117 5.942 6.068 6.068 0 0 0 5.137 2.959l25.991.231v94.563c0 .699.133 1.402.366 2.045a6.006 6.006 0 0 0 1.617 2.418c.153.139.367.328.653.525.322.22.621.364.809.451a6.103 6.103 0 0 0 2.589.593h163.613c.752 0 1.481-.156 2.203-.418a1.49 1.49 0 0 1 .061-.022l75.194-30.095a4.48 4.48 0 0 0 .374-.167c.118-.059.232-.124.346-.19.397-.23.766-.487 1.071-.766.203-.186.385-.376.565-.589.285-.336.533-.708.739-1.099a5.85 5.85 0 0 0 .301-.658 6.116 6.116 0 0 0 .398-2.133V81.713l37.055-22.668a6.008 6.008 0 0 0 2.84-4.382z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M330.844 54.33a6.032 6.032 0 0 0-1.629-4.94L289.272 7.702a4.508 4.508 0 0 0-.37-.347 5.102 5.102 0 0 0-.582-.46l-.09-.06a5.294 5.294 0 0 0-.447-.259c-.072-.038-.145-.074-.22-.111-.096-.047-.195-.096-.281-.133a4.805 4.805 0 0 0-.674-.237l-.132-.037a6.672 6.672 0 0 0-.54-.12l-.098-.017c-.127-.02-.253-.032-.381-.045a5.252 5.252 0 0 0-.544-.031H121.305c-.195 0-.394.015-.592.037a6.445 6.445 0 0 0-1.57.364c-.048.019-.099.038-.147.059L43.835 36.38c-.207.083-.41.185-.606.293-.22.123-.428.25-.601.371a7.2 7.2 0 0 0-.718.58 6.46 6.46 0 0 0-.219.219c-.14.148-.267.309-.391.472-.077.103-.15.204-.222.308a5.447 5.447 0 0 0-.317.514L8.805 98.968a6.061 6.061 0 0 0 .116 5.94 6.07 6.07 0 0 0 5.138 2.96l25.991.232v94.563c0 .699.134 1.402.366 2.045.051.139.13.339.191.474a6.028 6.028 0 0 0 1.093 1.621c.107.115.22.22.333.323.153.14.367.33.653.526.323.221.621.362.808.449a6.052 6.052 0 0 0 2.59.594h163.613a5.95 5.95 0 0 0 2.203-.417l.061-.023 75.194-30.095a4.63 4.63 0 0 0 .374-.167c.117-.058.231-.122.346-.189a6.371 6.371 0 0 0 1.071-.767c.203-.185.385-.375.564-.589.284-.338.535-.708.739-1.098a5.76 5.76 0 0 0 .301-.659 6.132 6.132 0 0 0 .397-2.132V81.382l37.055-22.669a6.001 6.001 0 0 0 2.842-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M330.465 54a6.03 6.03 0 0 0-1.629-4.941L288.894 7.371a5.887 5.887 0 0 0-.368-.348 5.905 5.905 0 0 0-.674-.519 6.71 6.71 0 0 0-1.183-.598 5.991 5.991 0 0 0-.439-.144l-.132-.036a6.34 6.34 0 0 0-.539-.121l-.099-.016c-.127-.021-.252-.033-.381-.047a5.246 5.246 0 0 0-.543-.03h-163.61a6.779 6.779 0 0 0-2.16.402 1.59 1.59 0 0 0-.149.059l-75.16 30.076a6.975 6.975 0 0 0-1.208.663c-.181.128-.349.26-.479.37-.083.071-.166.142-.239.212a5.063 5.063 0 0 0-.609.69c-.076.104-.151.204-.223.308a5.413 5.413 0 0 0-.317.515L8.426 98.637a6.06 6.06 0 0 0 .118 5.941 6.069 6.069 0 0 0 5.137 2.959l25.99.232v94.563c0 .7.135 1.402.366 2.044.051.141.13.341.191.475a6.048 6.048 0 0 0 1.426 1.945c.152.139.366.328.653.524.323.221.621.363.81.451.164.076.321.146.456.197a6.153 6.153 0 0 0 2.132.397h163.613a5.884 5.884 0 0 0 2.264-.441l75.193-30.095c.127-.049.252-.105.375-.167.116-.058.23-.123.345-.189.398-.23.768-.488 1.072-.766.203-.184.384-.376.564-.591.284-.335.535-.706.739-1.097.125-.237.231-.473.3-.658a6.188 6.188 0 0 0 .397-2.133V81.05l37.055-22.667A6.003 6.003 0 0 0 330.465 54z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M330.087 53.668a6.027 6.027 0 0 0-1.629-4.94L288.516 7.04a5.498 5.498 0 0 0-.369-.347 5.215 5.215 0 0 0-.583-.46l-.09-.061a5.58 5.58 0 0 0-.447-.259c-.072-.038-.145-.074-.22-.111a4.805 4.805 0 0 0-.954-.37 6.678 6.678 0 0 0-.769-.173 9.942 9.942 0 0 0-.382-.046 4.974 4.974 0 0 0-.544-.031h-163.61c-.195 0-.394.015-.592.037a6.238 6.238 0 0 0-1.569.364c-.049.019-.1.038-.148.059l-75.16 30.076c-.207.083-.41.185-.606.293a6.594 6.594 0 0 0-1.08.74c-.083.072-.165.142-.239.211-.075.071-.147.145-.219.219-.14.148-.267.309-.391.473-.076.102-.15.203-.222.307a5.323 5.323 0 0 0-.317.514L8.048 98.306a6.059 6.059 0 0 0 .117 5.94 6.07 6.07 0 0 0 5.137 2.96l25.991.231v94.564c0 .699.134 1.401.366 2.045.051.139.13.339.191.475a6.018 6.018 0 0 0 1.426 1.943c.153.14.367.329.653.525.323.221.621.363.809.45a6.103 6.103 0 0 0 2.589.594H208.94c.752 0 1.487-.141 2.203-.417.02-.008.041-.015.061-.024l75.194-30.093a5.018 5.018 0 0 0 .72-.357 6.221 6.221 0 0 0 1.071-.767 6.2 6.2 0 0 0 1.604-2.345 6.123 6.123 0 0 0 .397-2.133V80.72l37.055-22.669a6.003 6.003 0 0 0 2.842-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M329.708 53.337a6.032 6.032 0 0 0-1.629-4.941L288.137 6.708c-.023-.025-.048-.049-.072-.073a4.048 4.048 0 0 0-.297-.274 5.484 5.484 0 0 0-.583-.46l-.09-.06a5.585 5.585 0 0 0-.447-.26c-.072-.038-.145-.073-.22-.109a6.201 6.201 0 0 0-.28-.134 6.835 6.835 0 0 0-.236-.095 6.69 6.69 0 0 0-.438-.144l-.132-.036a5.606 5.606 0 0 0-.54-.121l-.098-.016c-.127-.02-.253-.032-.38-.046a5.271 5.271 0 0 0-.545-.031h-163.61c-.195 0-.394.017-.592.038a6.53 6.53 0 0 0-1.717.423L42.7 35.385a7.129 7.129 0 0 0-1.207.664 7.2 7.2 0 0 0-.718.581 5.265 5.265 0 0 0-.61.691c-.076.103-.15.203-.222.307a5.46 5.46 0 0 0-.317.515L7.669 97.974a6.06 6.06 0 0 0 .117 5.941 6.065 6.065 0 0 0 5.137 2.959l25.991.233v94.562c0 .7.134 1.402.366 2.045.051.14.13.34.191.474a6.068 6.068 0 0 0 1.094 1.622c.106.114.22.22.332.323.153.14.367.328.653.524.324.221.622.364.809.451.165.076.322.146.457.197a6.126 6.126 0 0 0 2.132.397h163.613c.752 0 1.487-.142 2.203-.418l.061-.023 75.195-30.094c.127-.05.252-.107.373-.168.118-.059.232-.123.347-.189.397-.23.766-.487 1.07-.765a6.21 6.21 0 0 0 1.604-2.347 6.139 6.139 0 0 0 .398-2.133V80.388l37.055-22.668a6 6 0 0 0 2.841-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M329.33 53.005a6.027 6.027 0 0 0-1.629-4.94L287.759 6.377a5.107 5.107 0 0 0-.37-.347 5.41 5.41 0 0 0-.582-.46c-.03-.021-.061-.04-.09-.061a5.161 5.161 0 0 0-.448-.259 8.938 8.938 0 0 0-.5-.243 5.119 5.119 0 0 0-.674-.238l-.132-.036a6.798 6.798 0 0 0-.638-.138c-.127-.02-.254-.032-.382-.045a5.217 5.217 0 0 0-.543-.031H119.791c-.195 0-.394.015-.592.037a6.445 6.445 0 0 0-1.57.364 3.004 3.004 0 0 0-.147.059l-75.16 30.076a5.367 5.367 0 0 0-.606.293 7.53 7.53 0 0 0-.602.371c-.18.127-.347.258-.478.37-.084.072-.165.141-.239.21-.075.071-.147.145-.219.219-.14.148-.268.308-.392.472-.076.103-.149.204-.222.309a5.179 5.179 0 0 0-.316.513L7.29 97.643a6.061 6.061 0 0 0 .117 5.94 6.07 6.07 0 0 0 5.138 2.96l25.991.231v94.564c0 .699.134 1.401.366 2.045.051.139.13.339.191.475a6.013 6.013 0 0 0 1.093 1.621c.107.114.22.219.333.322.153.14.366.329.653.525.322.221.621.363.808.45a6.099 6.099 0 0 0 2.59.594h163.613c.752 0 1.496-.12 2.203-.416l.06-.025 75.195-30.094a4.46 4.46 0 0 0 .373-.167c.117-.059.232-.123.346-.189a6.33 6.33 0 0 0 1.071-.767 6.146 6.146 0 0 0 1.303-1.688c.125-.236.232-.472.302-.657.26-.698.397-1.414.397-2.133v-91.18l37.055-22.668a5.996 5.996 0 0 0 2.842-4.381z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M328.951 52.674a6.03 6.03 0 0 0-1.629-4.941L287.38 6.046a5.466 5.466 0 0 0-.369-.347 5.84 5.84 0 0 0-.583-.46l-.09-.06a5.294 5.294 0 0 0-.447-.259c-.072-.038-.145-.074-.22-.111a6.145 6.145 0 0 0-.517-.228 5.277 5.277 0 0 0-.57-.179c-.183-.047-.356-.093-.54-.122l-.098-.015c-.127-.02-.253-.032-.381-.046a5.255 5.255 0 0 0-.544-.032H119.412a5.65 5.65 0 0 0-.592.037 6.24 6.24 0 0 0-1.717.425l-75.16 30.074a5.459 5.459 0 0 0-.606.294c-.22.123-.428.25-.6.371a6.89 6.89 0 0 0-.479.368c-.083.072-.165.143-.239.212a5.682 5.682 0 0 0-.219.22 5.595 5.595 0 0 0-.391.472c-.076.102-.15.202-.222.306a5.46 5.46 0 0 0-.317.515L6.912 97.311a6.06 6.06 0 0 0 .117 5.941 6.063 6.063 0 0 0 5.137 2.959l25.991.232v94.563c0 .7.134 1.402.366 2.046a6.023 6.023 0 0 0 1.618 2.418c.154.139.366.328.653.525.324.221.622.364.809.451a6.104 6.104 0 0 0 2.589.595h163.613c.752 0 1.481-.156 2.203-.418.021-.008.04-.014.06-.023l75.195-30.093a5.028 5.028 0 0 0 .72-.358c.398-.23.766-.487 1.071-.766.203-.186.385-.376.564-.589a6.11 6.11 0 0 0 .739-1.099c.125-.237.232-.472.301-.657a6.143 6.143 0 0 0 .397-2.134V79.726l37.055-22.669a5.999 5.999 0 0 0 2.841-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M328.572 52.343a6.026 6.026 0 0 0-1.629-4.94L287.001 5.715a5.044 5.044 0 0 0-.368-.347 6.435 6.435 0 0 0-.584-.461c-.028-.02-.06-.039-.09-.06a5.04 5.04 0 0 0-.447-.26l-.22-.11c-.096-.047-.195-.096-.281-.133-.078-.034-.156-.064-.236-.095a4.978 4.978 0 0 0-.438-.142 6.506 6.506 0 0 0-.132-.037c-.182-.047-.355-.092-.539-.121l-.099-.016a8.076 8.076 0 0 0-.925-.076H119.033c-.195 0-.394.015-.592.037a6.437 6.437 0 0 0-1.718.422l-75.16 30.077a5.53 5.53 0 0 0-.606.292c-.221.123-.428.25-.601.372a6.81 6.81 0 0 0-.718.58c-.075.07-.147.145-.219.219-.14.148-.267.308-.391.472-.076.102-.15.204-.222.308a5.528 5.528 0 0 0-.317.514L6.533 96.98a6.059 6.059 0 0 0 .117 5.94 6.07 6.07 0 0 0 5.137 2.96l25.991.231v94.563c0 .699.134 1.401.366 2.046.051.139.13.339.191.474a6.058 6.058 0 0 0 1.426 1.944c.153.14.366.328.653.524.324.221.622.363.809.45a6.055 6.055 0 0 0 2.589.596h163.613a6.198 6.198 0 0 0 2.263-.442l75.195-30.093a4.63 4.63 0 0 0 .374-.167c.117-.059.231-.123.346-.189a6.197 6.197 0 0 0 1.071-.767c.204-.185.385-.375.564-.589a6.116 6.116 0 0 0 1.04-1.757 6.136 6.136 0 0 0 .397-2.132v-91.18l37.055-22.669a5.986 5.986 0 0 0 2.842-4.38z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M328.194 52.012a6.03 6.03 0 0 0-1.629-4.941L286.622 5.383c-.022-.025-.048-.049-.073-.073a5.464 5.464 0 0 0-.295-.274 5.555 5.555 0 0 0-.583-.461c-.029-.02-.06-.039-.091-.059a5.904 5.904 0 0 0-.667-.37 5.783 5.783 0 0 0-.281-.134 6.066 6.066 0 0 0-.235-.095 6.275 6.275 0 0 0-.57-.179 5.388 5.388 0 0 0-.54-.122l-.098-.015c-.128-.021-.254-.032-.381-.046a5.268 5.268 0 0 0-.544-.031H118.655a5.65 5.65 0 0 0-.592.037 6.447 6.447 0 0 0-1.57.365c-.048.018-.1.037-.147.059L41.186 34.06a5.553 5.553 0 0 0-.607.293c-.22.122-.427.25-.6.371a6.89 6.89 0 0 0-.718.581 5.025 5.025 0 0 0-.611.691c-.076.103-.149.202-.221.306a5.156 5.156 0 0 0-.317.516L6.155 96.648a6.063 6.063 0 0 0 .116 5.941 6.068 6.068 0 0 0 5.137 2.959l25.992.233v94.562c0 .701.134 1.403.366 2.046.051.14.129.339.191.474a6.107 6.107 0 0 0 1.094 1.622c.106.113.219.22.332.323.153.139.366.328.652.524.323.221.623.363.809.45a6.048 6.048 0 0 0 2.589.594h163.613c.753 0 1.481-.156 2.204-.418.02-.008.04-.014.06-.023l75.195-30.094a4.977 4.977 0 0 0 .72-.357 6.075 6.075 0 0 0 1.071-.766c.203-.184.385-.376.564-.59a6.12 6.12 0 0 0 .739-1.098 5.73 5.73 0 0 0 .3-.658c.26-.698.398-1.414.398-2.134V79.063l37.054-22.668a5.997 5.997 0 0 0 2.843-4.383z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M327.815 51.68a6.027 6.027 0 0 0-1.629-4.94L286.244 5.052a4.233 4.233 0 0 0-.369-.347 5.452 5.452 0 0 0-.583-.461l-.09-.06a5.284 5.284 0 0 0-1.184-.598 5.787 5.787 0 0 0-.438-.143l-.132-.037a6.272 6.272 0 0 0-.54-.12l-.098-.017a6.087 6.087 0 0 0-.381-.045 4.533 4.533 0 0 0-.544-.031H118.276a4.74 4.74 0 0 0-.592.037 5.901 5.901 0 0 0-1.717.423l-75.16 30.076a4.899 4.899 0 0 0-.606.293c-.222.12-.429.248-.601.371-.182.126-.35.257-.478.369-.084.07-.166.141-.239.211-.076.07-.147.144-.219.219a5.379 5.379 0 0 0-.391.472 6.669 6.669 0 0 0-.222.308 4.85 4.85 0 0 0-.317.514L5.776 96.317a6.059 6.059 0 0 0 .117 5.94 6.066 6.066 0 0 0 5.137 2.96l25.991.231v94.563c0 .7.129 1.404.366 2.046a5.962 5.962 0 0 0 1.617 2.418 5.128 5.128 0 0 0 1.462.975 5.979 5.979 0 0 0 2.589.594h163.613c.752 0 1.488-.138 2.203-.417l.059-.024 75.195-30.094a5.009 5.009 0 0 0 .72-.356 5.824 5.824 0 0 0 1.635-1.356c.285-.337.534-.708.739-1.099a5.972 5.972 0 0 0 .698-2.79V78.73l37.055-22.668a5.992 5.992 0 0 0 2.843-4.382z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    {/*<path*/}
    {/*  d={*/}
    {/*    'M327.815 51.68a6.027 6.027 0 0 0-1.629-4.94L286.244 5.052a4.233 4.233 0 0 0-.369-.347 5.452 5.452 0 0 0-.583-.461l-.09-.06a5.284 5.284 0 0 0-1.184-.598 5.787 5.787 0 0 0-.438-.143l-.132-.037a6.272 6.272 0 0 0-.54-.12l-.098-.017a6.087 6.087 0 0 0-.381-.045 4.533 4.533 0 0 0-.544-.031H118.276a4.74 4.74 0 0 0-.592.037 5.901 5.901 0 0 0-1.717.423l-75.16 30.076a4.899 4.899 0 0 0-.606.293c-.222.12-.429.248-.601.371-.182.126-.35.257-.478.369-.084.07-.166.141-.239.211-.076.07-.147.144-.219.219a5.379 5.379 0 0 0-.391.472 6.669 6.669 0 0 0-.222.308 4.85 4.85 0 0 0-.317.514L5.776 96.317a6.059 6.059 0 0 0 .117 5.94 6.066 6.066 0 0 0 5.137 2.96l25.991.231v94.563c0 .7.129 1.404.366 2.046a5.962 5.962 0 0 0 1.617 2.418 5.128 5.128 0 0 0 1.462.975 5.979 5.979 0 0 0 2.589.594h163.613c.752 0 1.488-.138 2.203-.417l.059-.024 75.195-30.094a5.009 5.009 0 0 0 .72-.356 5.824 5.824 0 0 0 1.635-1.356c.285-.337.534-.708.739-1.099a5.972 5.972 0 0 0 .698-2.79V78.73l37.055-22.668a5.992 5.992 0 0 0 2.843-4.382z'*/}
    {/*  }*/}
    {/*  style={{*/}
    {/*    fill: '#000000',*/}
    {/*  }}*/}
    {/*/>*/}
    <path
      d={'M118.276 9.226h163.609v160.685H118.276z'}
      style={{
        fill: '#f9a467',
      }}
    />
    <path
      d={
        'M281.886 171.094h-163.61c-.65 0-1.183-.528-1.183-1.184V9.226c0-.652.532-1.183 1.183-1.183h163.609c.657 0 1.184.53 1.184 1.183V169.91a1.18 1.18 0 0 1-1.183 1.184zm-162.424-2.366h161.239V10.409H119.462v158.319z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'m43.056 200.012 75.22-30.102V9.226l-75.22 30.103z'}
      style={{
        fill: '#fed095',
      }}
    />
    <path
      d={
        'M43.056 201.196c-.235 0-.468-.07-.665-.203a1.19 1.19 0 0 1-.519-.981V39.329c0-.484.294-.921.745-1.101l75.222-30.101a1.183 1.183 0 0 1 1.624 1.097V169.91c0 .483-.294.917-.744 1.099l-75.223 30.102a1.198 1.198 0 0 1-.44.085zm1.183-161.065v158.133l72.854-29.157V10.976L44.239 40.131z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'M43.056 39.329h163.613v160.683H43.056z'}
      style={{
        fill: '#fed095',
      }}
    />
    <path
      d={
        'M206.669 201.196H43.056c-.657 0-1.185-.53-1.185-1.185V39.329a1.18 1.18 0 0 1 1.185-1.184h163.613c.651 0 1.184.526 1.184 1.184v160.683a1.185 1.185 0 0 1-1.184 1.184zm-162.43-2.368h161.246V40.514H44.239v158.314z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'M201.961 196.486H47.286v-93.305l6.585 86.195z'}
      style={{
        fill: '#fed095',
      }}
    />
    <path
      d={'M172.505 115.168H43.056V39.329h163.613z'}
      style={{
        fill: '#f9a467',
        opacity: 0.5,
      }}
    />
    <path
      d={'m206.669 200.012 75.217-30.102V9.226l-75.217 30.103z'}
      style={{
        fill: '#f9a467',
      }}
    />
    <path
      d={
        'M206.669 201.196c-.234 0-.468-.07-.665-.203a1.19 1.19 0 0 1-.519-.981V39.329c0-.484.293-.921.744-1.101l75.219-30.101a1.19 1.19 0 0 1 1.104.118c.324.222.517.587.517.979V169.91c0 .483-.293.917-.744 1.099l-75.217 30.102a1.178 1.178 0 0 1-.439.085zm1.185-161.065v158.133l72.848-29.157V10.976l-72.848 29.155z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'m245.844 104.619 36.042-20.793v-74.6l-75.217 30.103z'}
      style={{
        fill: '#f9a467',
        opacity: 0.5,
      }}
    />
    <path
      d={'M118.276 20.452h163.609v18.877H118.276zM118.276 49.977V20.452L44.497 49.977z'}
      style={{
        fill: '#f9a467',
        opacity: 0.5,
      }}
    />
    <path
      d={'M208.541 39.329 253.678 92.6l68.152-41.688-39.944-41.686z'}
      style={{
        fill: '#f9a467',
      }}
    />
    <path
      d={
        'M253.682 93.784c-.341 0-.674-.145-.903-.415l-45.138-53.276a1.179 1.179 0 0 1 .453-1.858l73.345-30.103a1.181 1.181 0 0 1 1.304.275l39.942 41.687a1.179 1.179 0 0 1-.24 1.83L254.3 93.611a1.19 1.19 0 0 1-.618.173zm-43.184-53.979 43.43 51.259 66.03-40.394-38.368-40.043-71.092 29.178z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'M43.056 39.329 11.083 99.184l157.737 1.409 37.849-61.264z'}
      style={{
        fill: '#fed095',
      }}
    />
    <path
      d={
        'M168.82 101.777h-.012l-157.734-1.41a1.187 1.187 0 0 1-1.008-.581 1.176 1.176 0 0 1-.025-1.16l31.971-59.855a1.178 1.178 0 0 1 1.044-.625h163.613c.427 0 .824.23 1.03.604a1.18 1.18 0 0 1-.024 1.201l-37.849 61.263a1.18 1.18 0 0 1-1.006.563zM13.05 98.019l155.115 1.385 36.382-58.89H43.764L13.05 98.019z'
      }
      style={{
        fill: '#5e2c00',
      }}
    />
    <path
      d={'M45.501 42.931 18.372 93.72l30.916-45.837 140.076-4.952z'}
      style={{
        fill: '#fed095',
      }}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
