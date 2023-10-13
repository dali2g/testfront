import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative z-10">
      <div className="absolute inset-0">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlnsSvgjs="http://svgjs.dev/svgjs"
    width={2560}
    height={560}
    preserveAspectRatio="none"
    viewBox="0 0 1440 560"
  >
    <g mask="url(&quot;#SvgjsMask1002&quot;)" fill="none">
      <rect width={2560} height={560} x={0} y={0} fill="rgba(5, 59, 80, 1)" />
      <path
        d="M1512 560L0 560 L0 230.35Q18.55 176.9, 72 195.45Q98.84 150.29, 144 177.14Q222.03 135.16, 264 213.19Q318.71 147.9, 384 202.61Q401.59 148.21, 456 165.8Q498.51 136.31, 528 178.83Q597.49 128.32, 648 197.81Q726.15 155.96, 768 234.11Q793.38 139.49, 888 164.87Q968.88 125.75, 1008 206.62Q1057.53 136.14, 1128 185.67Q1180.21 117.88, 1248 170.09Q1309.2 159.29, 1320 220.49Q1395.83 176.31, 1440 252.14Q1485.97 226.11, 1512 272.08z"
        fill="rgba(23, 107, 135, 1)"
      />
      <path
        d="M1536 560L0 560 L0 287.55Q58.88 274.44, 72 333.32Q126.03 267.35, 192 321.37Q267.93 277.3, 312 353.23Q318.58 239.81, 432 246.4Q498.17 192.57, 552 258.74Q623.39 210.13, 672 281.53Q749.26 286.79, 744 364.06Q813.22 313.28, 864 382.51Q869.67 268.18, 984 273.85Q1038.36 208.21, 1104 262.56Q1159.91 246.47, 1176 302.38Q1270.69 277.07, 1296 371.77Q1299.1 254.87, 1416 257.96Q1470.68 192.64, 1536 247.32z"
        fill="rgba(100, 204, 197, 1)"
      />
      <path
        d="M1488 560L0 560 L0 395.56Q39.44 315, 120 354.45Q212.9 327.35, 240 420.25Q328.56 388.81, 360 477.36Q360.51 405.88, 432 406.39Q462.86 317.25, 552 348.1Q602.13 326.24, 624 376.37Q705.56 385.94, 696 467.5Q739.67 439.18, 768 482.85Q789.11 383.96, 888 405.07Q906.28 351.35, 960 369.62Q989.67 327.29, 1032 356.96Q1082.99 335.95, 1104 386.95Q1152.43 363.38, 1176 411.81Q1273.79 389.6, 1296 487.39Q1339.63 411.01, 1416 454.64Q1445.1 411.74, 1488 440.83z"
        fill="rgba(238, 238, 238, 1)"
      />
      <path
        d="M1464 560L0 560 L0 547.94Q55.22 483.16, 120 538.38Q197.26 495.64, 240 572.91Q294.37 507.28, 360 561.65Q361.49 491.13, 432 492.62Q475.16 415.78, 552 458.95Q599.21 434.16, 624 481.38Q730.67 468.05, 744 574.71Q789.7 548.41, 816 594.11Q829.26 535.38, 888 548.64Q930.01 470.65, 1008 512.66Q1021.8 454.45, 1080 468.25Q1125 441.25, 1152 486.25Q1255.88 470.13, 1272 574.01Q1295.02 477.03, 1392 500.05Q1413.42 449.48, 1464 470.9z"
        fill="rgba(255, 255, 255, 1)"
      />
    </g>
    <defs>
      <mask id="SvgjsMask1002">
        <rect width={2560} height={560} fill="#ffffff" />
      </mask>
    </defs>
  </svg>
      </div>

      <div className="relative z-10">
        <div className="px-6 pt-1 lg:px-8">
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto  px-6 py-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-1">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-[#EEEEEE] ring-1 ring-gray-700 hover:ring-[#EEEEEE]">
                <span className="font-semibold text-[#EEEEEE] animate-pulse">Hire Me ?</span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <span className="absolute inset-0 " aria-hidden="true" />
                See My Work
                <ChevronRightIcon
                  className="-mr-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-[#EEEEEE]  sm:text-6xl">
              A design conference for the dark side.
            </h1>
            <p className="mt-20 text-lg font-semibold leading-8 text-gray-600">
              The next generation of web users are tech-savvy and suspicious.
              They know how to use dev tools, they can detect a phishing scam
              from a mile away, and they certainly aren’t accepting any checks
              from Western Union. At DeceptiConf you’ll learn about the latest
              dark patterns being developed to trick even the smartest visitors,
              and you’ll learn how to deploy them without ever being detected.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#053b50] px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-[#176b87] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] transition ease-in-out"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900 animate-pulse"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{
                enableBackground: "new",
              }}
              viewBox="0 0 168.18 243.92"
            >
              <title>{"Twitter Penwin"}</title>
              <defs>
                <filter id="a" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="darken" />
                </filter>
              </defs>
              <path
                d="M92.186 245.3c-4.968-6.154-16.39 1.44-23.019 5.755-6.54 4.255-18.765 12.005-14.387 18.463 5.79 8.542 21.826-2 29.733-8.632 4.437-3.722 11.31-11.08 7.673-15.586z"
                style={{
                  stroke: "#a40",
                  strokeWidth: 1.2102,
                  fill: "#f95",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M41.992 126.34C-1.471 62.738 53.926 29.9 90.049 30.286c23.263.248 69.673 33.586 49.264 86.561 0 0 25.514-19.823 28.145-17.294 18.298 17.585-24.076 72.228-24.076 72.228-2.431 27.684 15.383 33.856 32.893 40.353-23.18 51.21-159.05 69.3-134.29-38.66-7.736-.42-41.55-46.88-29.161-56.63 3.215-2.53 29.163 9.495 29.163 9.495z"
                style={{
                  stroke: "#214478",
                  strokeWidth: 1.7322,
                  fill: "#3771c8",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M69.887 140.76C4.972 121.82 42.848 16.83 78.759 99.273 122.61 22.407 171.6 117.05 101.54 140.52c-.86 52.299 39.858 58.427 33.809 84.163-10.187 43.339-119.38 28.931-83.145-64.029 3.056-7.84 7.97-13.52 17.685-19.894z"
                style={{
                  fill: "#fff",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M610.17 201.28c.445-1.251 1.03-2.433 1.337-3.672 6.484-26.091 10.69-25.891 17.654-31.294-11.4 2.027-17.414 18.643-19.467 31.91-.215 1.392.682 1.709.477 3.055z"
                style={{
                  fill: "#214478",
                }}
                transform="translate(-577.74 -54.259)"
              />
              <path
                d="M611.44 151.09c2.367 3.733 9.376 11.356 17.703 15.239-5.758-.51-16.383-11.396-20.562-16.639-.424-.532 3.126 1.926 2.859 1.4zM709.68 139.2c-9.12 8.96-18.262 17.896-26.136 28.414a421.51 421.51 0 0 1 23.492-24.211l2.644-4.203zM712.68 196.93l-14.087 14.567 12.469-15.226 1.619.66z"
                style={{
                  fill: "#214478",
                }}
                transform="translate(-577.74 -54.259)"
              />
              <path
                d="M74.443 198.3c-8.12 5.295 1.386 20.196 6.714 28.294 4.929 7.492 13.789 20.507 21.58 16.065 7.262-4.14 1.473-17.659-2.638-24.937-5.275-9.34-16.672-25.282-25.656-19.422z"
                style={{
                  strokeLinejoin: "round",
                  stroke: "#a40",
                  strokeWidth: 1.2339,
                  fill: "#f95",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M78.519 108.39c-2.456-.278-15.028 7.408-14.866 10.071.215 3.537 12.191 12.9 15.825 12.708 3.184-.168 13.015-6.889 13.188-10.311.22-4.36-11.382-12.156-14.147-12.469z"
                style={{
                  stroke: "#a40",
                  strokeWidth: 1.1153,
                  fill: "#f95",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M70.633 121.19s4.848 5.828 7.263 6.004c2.48.18 8.429-5.341 8.429-5.341-5.48.341-10.845.42-15.692-.663z"
                style={{
                  fill: "#a02c2c",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M63.556 118.33c5.213 4.422 16.842 5.231 29.403 2.308-4.892-.088-17.208 3.642-29.403-2.308z"
                style={{
                  fill: "#a40",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <path
                d="M80.476 141.32c-5.365 2.134-11.977 5.53-16.185 14.207 5.635-1.404 6.942-2.52 10.37-3.776-3.037 3.396-3.74 6.581-5.155 9.83 1.744-4.595 5.749-9.72 9.71-12.409-5.058 2.204-9.005 4.024-13.067 5.036 3.285-6.655 7.448-8.68 14.327-12.888z"
                style={{
                  fill: "#acf",
                }}
                transform="translate(-9.26 -29.403)"
              />
              <g
                style={{
                  opacity: 0.45,
                  filter: "url(#a)",
                }}
                transform="translate(-9.26 -29.403)"
              >
                <path
                  d="M78.356 108.23c2.186-1.21-2.274 13.447-1.95 13.734 1.598 1.41 3.575 8.306 1.919 8.95-1.666.649-6.975-4.962-9.406-5.857-4.718-1.737-5.204-6.594-5.065-7.073.885-3.064 11.4-8.036 14.502-9.754z"
                  style={{
                    fill: "#d45500",
                  }}
                />
              </g>
              <g
                style={{
                  opacity: 0.20447,
                }}
              >
                <path
                  d="M649.27 135.89c-1.565 1.383-2.42 2.162-1.931 7.633.132 1.48 9.682 2.956 11.03 1.199.844-1.1-7.69-10.077-9.099-8.832z"
                  style={{
                    fill: "#fff",
                  }}
                  transform="translate(-577.74 -54.259)"
                />
                <path
                  d="M660.39 56.06c27.16 5.907 67.128 36.419 46.318 86.311l27.606-17.474c13.592 13.838-3.08 41.582-22.381 70.533-5.232 17.98 4.558 32.205 31.875 42.048-7.142 11.109-5.97 21.768-44.761 34.588-26.044-6.276-22.018-60.129-58.387-104.4-54.86-66.77-27.49-103.08 19.72-111.61z"
                  style={{
                    opacity: 0.92332,
                    fillOpacity: 0.40468,
                    fill: "#fff",
                  }}
                  transform="translate(-577.74 -54.259)"
                />
              </g>
              <path
                d="M41.353 102.87c5.69-10.056 17.658-10.454 27.814-6.474-11.87-11.952-24.377-9.37-27.814 6.474zM90.748 98.554c8.859-6.627 18.397-5.441 28.534 2.638-7.676-15.02-18.574-15.094-28.534-2.638z"
                style={{
                  fill: "#000",
                }}
                transform="translate(-9.26 -29.403)"
              />
            </svg>
            
          </div>
        </div>
      </div>
    </div>
  );
}
