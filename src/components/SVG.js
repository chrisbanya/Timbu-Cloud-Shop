export const CartIcon = () => {
  return (
      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="44" height="44" rx="22" fill="#DBDBDB" fill-opacity="0.1" />
          <path d="M27.3332 17.1667H28.8795C30.2664 17.1667 31.4218 18.2298 31.5369 19.6119L32.4258 30.2785C32.5554 31.8333 31.3285 33.1667 29.7684 33.1667H14.2313C12.6712 33.1667 11.4443 31.8333 11.5738 30.2785L12.4627 19.6119C12.5779 18.2298 13.7333 17.1667 15.1202 17.1667H16.6665M27.3332 17.1667H16.6665M27.3332 17.1667L27.3332 15.8333C27.3332 14.4188 26.7713 13.0623 25.7711 12.0621C24.7709 11.0619 23.4143 10.5 21.9998 10.5C20.5854 10.5 19.2288 11.0619 18.2286 12.0621C17.2284 13.0623 16.6665 14.4188 16.6665 15.8333L16.6665 17.1667M27.3332 17.1667L27.3332 22.5M16.6665 17.1667L16.6665 22.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <circle cx="40" cy="4.5" r="4" fill="#D90000" />
      </svg>
  )
}

export const LikeIcon = ({ iconClicked }) => {
  return (
      <svg width="44" height="45" viewBox="0 0 44 45" fill={iconClicked ? 'red' : 'none'} xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="44" height="44" rx="22" fill="#DBDBDB" fill-opacity="0.1" />
          <path d="M11.7752 22.5632L22 33.1667L32.2248 22.5632C33.3614 21.3844 34 19.7857 34 18.1187C34 14.6474 31.2864 11.8333 27.9391 11.8333C26.3316 11.8333 24.79 12.4955 23.6534 13.6743L22 15.3889L20.3466 13.6743C19.21 12.4955 17.6684 11.8333 16.0609 11.8333C12.7136 11.8333 10 14.6474 10 18.1187C10 19.7857 10.6386 21.3844 11.7752 22.5632Z" stroke={iconClicked ? 'red' : 'white'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}


export const SearchIcon = () => {
  return (
      <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="44" height="44" rx="22" fill="#DBDBDB" fill-opacity="0.1" />
          <path d="M32.6667 33.1667L27.0711 27.5711M30 20.5C30 14.9772 25.5228 10.5 20 10.5C14.4772 10.5 10 14.9772 10 20.5C10 26.0228 14.4772 30.5 20 30.5C25.5228 30.5 30 26.0228 30 20.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}

export const ArrowRight = () => {
  return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6666 16L5.33331 16M26.6666 16L18.6666 24M26.6666 16L18.6666 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}

export const ButtonText = () => {
  return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26695)">
              <rect x="10" y="2.5" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
              <path d="M27.6652 22.312L26.6877 22.4852C26.6468 22.3601 26.5818 22.2411 26.4929 22.128C26.4063 22.015 26.2885 21.9224 26.1394 21.8503C25.9903 21.7781 25.8039 21.7421 25.5802 21.7421C25.2748 21.7421 25.0199 21.8106 24.8155 21.9477C24.6111 22.0823 24.5089 22.2567 24.5089 22.4707C24.5089 22.6559 24.5774 22.805 24.7145 22.918C24.8516 23.031 25.0728 23.1236 25.3782 23.1958L26.2584 23.3978C26.7682 23.5156 27.1482 23.6972 27.3983 23.9425C27.6484 24.1878 27.7734 24.5064 27.7734 24.8984C27.7734 25.2303 27.6772 25.526 27.4849 25.7858C27.2949 26.0431 27.0291 26.2451 26.6877 26.3918C26.3486 26.5385 25.9554 26.6118 25.5081 26.6118C24.8877 26.6118 24.3814 26.4796 23.9895 26.215C23.5975 25.9481 23.357 25.5693 23.268 25.0788L24.3105 24.92C24.3754 25.1918 24.5089 25.3974 24.7109 25.5369C24.9129 25.6739 25.1762 25.7425 25.5009 25.7425C25.8544 25.7425 26.137 25.6691 26.3486 25.5224C26.5602 25.3733 26.666 25.1918 26.666 24.9777C26.666 24.8046 26.6011 24.6591 26.4712 24.5413C26.3438 24.4234 26.1478 24.3345 25.8832 24.2743L24.9454 24.0687C24.4283 23.9509 24.046 23.7633 23.7983 23.506C23.553 23.2487 23.4303 22.9228 23.4303 22.5284C23.4303 22.2014 23.5217 21.9152 23.7045 21.6699C23.8872 21.4246 24.1398 21.2334 24.462 21.0964C24.7842 20.9569 25.1534 20.8872 25.5694 20.8872C26.1682 20.8872 26.6396 21.017 26.9835 21.2767C27.3273 21.534 27.5546 21.8791 27.6652 22.312ZM28.9593 26.5V20.9593H29.9946V21.8611H30.0631C30.1786 21.5557 30.3673 21.3176 30.6295 21.1469C30.8916 20.9737 31.2054 20.8872 31.5709 20.8872C31.9413 20.8872 32.2515 20.9737 32.5016 21.1469C32.7541 21.32 32.9405 21.5581 33.0607 21.8611H33.1184C33.2507 21.5653 33.4611 21.3296 33.7497 21.1541C34.0383 20.9761 34.3822 20.8872 34.7814 20.8872C35.284 20.8872 35.694 21.0447 36.0114 21.3597C36.3313 21.6747 36.4912 22.1497 36.4912 22.7846V26.5H35.4126V22.8856C35.4126 22.5104 35.3104 22.2387 35.106 22.0703C34.9016 21.902 34.6575 21.8178 34.3738 21.8178C34.0227 21.8178 33.7497 21.926 33.5549 22.1425C33.3601 22.3565 33.2627 22.6318 33.2627 22.9685V26.5H32.1878V22.817C32.1878 22.5164 32.094 22.2747 31.9064 22.092C31.7188 21.9092 31.4748 21.8178 31.1742 21.8178C30.9697 21.8178 30.781 21.8719 30.6078 21.9801C30.4371 22.086 30.2988 22.2339 30.193 22.4238C30.0896 22.6138 30.0379 22.8339 30.0379 23.084V26.5H28.9593Z" fill="black" />
          </g>
          <defs>
              <filter id="filter0_d_211_26695" x="0.54928" y="0.13732" width="58.9014" height="58.9014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7.08804" />
                  <feGaussianBlur stdDeviation="4.72536" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26695" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26695" result="shape" />
              </filter>
          </defs>
      </svg>
  )

}

export const AddIcon = () => {
  return (
      <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26750)">
              <rect x="31" y="8.5" width="90.4762" height="90.4762" rx="45.2381" fill="white" shape-rendering="crispEdges" />
              <g clip-path="url(#clip0_211_26750)">
                  <path d="M89.4325 51.8532H78.123V40.5437C78.123 40.0438 77.9244 39.5643 77.5709 39.2108C77.2174 38.8573 76.738 38.6588 76.2381 38.6588C75.7381 38.6588 75.2587 38.8573 74.9052 39.2108C74.5517 39.5643 74.3531 40.0438 74.3531 40.5437V51.8532H63.0436C62.5437 51.8532 62.0643 52.0518 61.7108 52.4053C61.3573 52.7588 61.1587 53.2382 61.1587 53.7381C61.1587 54.238 61.3573 54.7175 61.7108 55.071C62.0643 55.4244 62.5437 55.623 63.0436 55.623H74.3531V66.9326C74.3531 67.4325 74.5517 67.9119 74.9052 68.2654C75.2587 68.6189 75.7381 68.8175 76.2381 68.8175C76.738 68.8175 77.2174 68.6189 77.5709 68.2654C77.9244 67.9119 78.123 67.4325 78.123 66.9326V55.623H89.4325C89.9324 55.623 90.4119 55.4244 90.7653 55.071C91.1188 54.7175 91.3174 54.238 91.3174 53.7381C91.3174 53.2382 91.1188 52.7588 90.7653 52.4053C90.4119 52.0518 89.9324 51.8532 89.4325 51.8532Z" fill="black" />
              </g>
          </g>
          <defs>
              <filter id="filter0_d_211_26750" x="0.841269" y="0.960318" width="150.794" height="150.794" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="22.619" />
                  <feGaussianBlur stdDeviation="15.0794" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26750" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26750" result="shape" />
              </filter>
              <clipPath id="clip0_211_26750">
                  <rect width="45.2381" height="45.2381" fill="white" transform="translate(53.619 31.119)" />
              </clipPath>
          </defs>
      </svg>
  )
}

export const CartIconsvg = () => {
  return (
      <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26751)">
              <rect x="30.4762" y="8.5" width="90.4762" height="90.4762" rx="45.2381" fill="black" shape-rendering="crispEdges" />
              <path d="M83.254 46.1984H85.44C87.4007 46.1984 89.034 47.7013 89.1968 49.6552L90.4534 64.7345C90.6366 66.9324 88.9021 68.8175 86.6966 68.8175H64.732C62.5265 68.8175 60.792 66.9324 60.9752 64.7345L62.2318 49.6552C62.3946 47.7013 64.028 46.1984 65.9886 46.1984H68.1746M83.254 46.1984H68.1746M83.254 46.1984L83.254 44.3135C83.254 42.3138 82.4596 40.3961 81.0457 38.9821C79.6317 37.5682 77.714 36.7738 75.7143 36.7738C73.7147 36.7738 71.7969 37.5682 70.383 38.9821C68.969 40.3961 68.1746 42.3138 68.1746 44.3135L68.1746 46.1984M83.254 46.1984L83.254 53.7381M68.1746 46.1984L68.1746 53.7381" stroke="white" stroke-width="2.82738" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
              <filter id="filter0_d_211_26751" x="0.317465" y="0.960318" width="150.794" height="150.794" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="22.619" />
                  <feGaussianBlur stdDeviation="15.0794" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26751" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26751" result="shape" />
              </filter>
          </defs>
      </svg>
  )
}

export const MdIcon = () => {
  return (
      <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26696)">
              <rect x="8" y="2.5" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
              <path d="M21.057 26.5V20.9593H22.0923V21.8611H22.1608C22.2762 21.5557 22.465 21.3176 22.7271 21.1469C22.9893 20.9737 23.3031 20.8872 23.6686 20.8872C24.039 20.8872 24.3492 20.9737 24.5993 21.1469C24.8518 21.32 25.0382 21.5581 25.1584 21.8611H25.2161C25.3484 21.5653 25.5588 21.3296 25.8474 21.1541C26.136 20.9761 26.4799 20.8872 26.8791 20.8872C27.3817 20.8872 27.7917 21.0447 28.1091 21.3597C28.429 21.6747 28.5889 22.1497 28.5889 22.7846V26.5H27.5103V22.8856C27.5103 22.5104 27.4081 22.2387 27.2037 22.0703C26.9993 21.902 26.7552 21.8178 26.4714 21.8178C26.1203 21.8178 25.8474 21.926 25.6526 22.1425C25.4578 22.3565 25.3604 22.6318 25.3604 22.9685V26.5H24.2855V22.817C24.2855 22.5164 24.1917 22.2747 24.0041 22.092C23.8165 21.9092 23.5724 21.8178 23.2718 21.8178C23.0674 21.8178 22.8786 21.8719 22.7055 21.9801C22.5347 22.086 22.3965 22.2339 22.2907 22.4238C22.1873 22.6138 22.1355 22.8339 22.1355 23.084V26.5H21.057ZM32.1086 26.6082C31.6613 26.6082 31.2621 26.494 30.911 26.2655C30.5623 26.0347 30.2882 25.7064 30.0886 25.2808C29.8914 24.8527 29.7928 24.3393 29.7928 23.7405C29.7928 23.1417 29.8926 22.6294 30.0922 22.2038C30.2942 21.7781 30.5708 21.4523 30.9219 21.2262C31.273 21.0002 31.671 20.8872 32.1158 20.8872C32.4597 20.8872 32.7363 20.9449 32.9455 21.0603C33.1571 21.1733 33.3207 21.3056 33.4361 21.4571C33.5539 21.6086 33.6453 21.7421 33.7102 21.8575H33.7752V19.1124H34.8537V26.5H33.8004V25.6379H33.7102C33.6453 25.7557 33.5515 25.8904 33.4289 26.0419C33.3086 26.1934 33.1427 26.3257 32.9311 26.4387C32.7195 26.5517 32.4453 26.6082 32.1086 26.6082ZM32.3467 25.6884C32.6569 25.6884 32.9191 25.6066 33.1331 25.4431C33.3495 25.2771 33.513 25.0475 33.6237 24.7541C33.7367 24.4607 33.7932 24.1192 33.7932 23.7296C33.7932 23.3449 33.7379 23.0082 33.6273 22.7196C33.5167 22.431 33.3543 22.2062 33.1403 22.0451C32.9263 21.8839 32.6617 21.8034 32.3467 21.8034C32.0221 21.8034 31.7515 21.8876 31.5351 22.0559C31.3187 22.2242 31.1551 22.4539 31.0445 22.7449C30.9363 23.0359 30.8822 23.3641 30.8822 23.7296C30.8822 24.1 30.9375 24.4331 31.0481 24.7289C31.1587 25.0246 31.3223 25.2591 31.5387 25.4323C31.7575 25.603 32.0269 25.6884 32.3467 25.6884Z" fill="black" />
          </g>
          <defs>
              <filter id="filter0_d_211_26696" x="0" y="0.5" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26696" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26696" result="shape" />
              </filter>
          </defs>
      </svg>

  )
}

export const LgIcon = () => {
  return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26697)">
              <rect x="10" y="2.5" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
              <path d="M27.4041 19.1124V26.5H26.3256V19.1124H27.4041ZM31.1782 28.6932C30.7381 28.6932 30.3594 28.6355 30.0419 28.52C29.7269 28.4046 29.4696 28.2519 29.27 28.0619C29.0704 27.8719 28.9213 27.6639 28.8227 27.4379L29.7497 27.0555C29.8147 27.1613 29.9013 27.2731 30.0095 27.391C30.1201 27.5112 30.2692 27.6134 30.4568 27.6976C30.6467 27.7818 30.8908 27.8239 31.189 27.8239C31.5979 27.8239 31.9357 27.7241 32.2027 27.5245C32.4696 27.3273 32.6031 27.0122 32.6031 26.5794V25.49H32.5345C32.4696 25.6078 32.3758 25.7389 32.2532 25.8832C32.1329 26.0275 31.967 26.1525 31.7554 26.2583C31.5437 26.3641 31.2684 26.417 30.9293 26.417C30.4916 26.417 30.0972 26.3148 29.7461 26.1104C29.3974 25.9036 29.1209 25.5994 28.9165 25.1978C28.7145 24.7938 28.6135 24.2972 28.6135 23.708C28.6135 23.1188 28.7133 22.6138 28.9129 22.193C29.1149 21.7721 29.3914 21.4499 29.7425 21.2262C30.0936 21.0002 30.4916 20.8872 30.9365 20.8872C31.2804 20.8872 31.5582 20.9449 31.7698 21.0603C31.9814 21.1733 32.1462 21.3056 32.264 21.4571C32.3842 21.6086 32.4768 21.7421 32.5417 21.8575H32.6211V20.9593H33.678V26.6226C33.678 27.0988 33.5674 27.4896 33.3462 27.795C33.1249 28.1004 32.8255 28.3265 32.448 28.4732C32.0728 28.6198 31.6496 28.6932 31.1782 28.6932ZM31.1674 25.5224C31.4776 25.5224 31.7397 25.4503 31.9538 25.306C32.1702 25.1593 32.3337 24.9501 32.4443 24.6783C32.5574 24.4042 32.6139 24.0759 32.6139 23.6936C32.6139 23.3208 32.5586 22.9926 32.448 22.7088C32.3373 22.425 32.175 22.2038 31.961 22.0451C31.747 21.8839 31.4824 21.8034 31.1674 21.8034C30.8427 21.8034 30.5722 21.8876 30.3558 22.0559C30.1393 22.2218 29.9758 22.4479 29.8652 22.7341C29.757 23.0202 29.7029 23.3401 29.7029 23.6936C29.7029 24.0567 29.7582 24.3753 29.8688 24.6495C29.9794 24.9236 30.1429 25.1377 30.3594 25.2916C30.5782 25.4455 30.8475 25.5224 31.1674 25.5224Z" fill="black" />
          </g>
          <defs>
              <filter id="filter0_d_211_26697" x="0.54928" y="0.13732" width="58.9014" height="58.9014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7.08804" />
                  <feGaussianBlur stdDeviation="4.72536" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26697" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26697" result="shape" />
              </filter>
          </defs>
      </svg>
  )
}

export const XlIcon = () => {
  return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26698)">
              <rect x="10" y="2.5" width="40" height="40" rx="20" fill="black" shape-rendering="crispEdges" />
              <path d="M27.6454 20.9593L28.558 22.7846L29.5031 20.9593H31.2815L29.734 23.7296L31.3392 26.5H29.5752L28.558 24.6603L27.566 26.5H25.7768L27.3857 23.7296L25.8562 20.9593H27.6454ZM33.8507 19.1124V26.5H32.0868V19.1124H33.8507Z" fill="white" />
          </g>
          <defs>
              <filter id="filter0_d_211_26698" x="0.54928" y="0.13732" width="58.9014" height="58.9014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7.08804" />
                  <feGaussianBlur stdDeviation="4.72536" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26698" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26698" result="shape" />
              </filter>
          </defs>
      </svg>
  )
}

export const XxlIcon = () => {
  return (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_211_26699)">
              <rect x="10" y="2.5" width="40" height="40" rx="20" fill="white" shape-rendering="crispEdges" />
              <path d="M24.7168 20.9593L25.9396 23.1164L27.1733 20.9593H28.3528L26.625 23.7296L28.3673 26.5H27.1877L25.9396 24.4295L24.6951 26.5H23.5119L25.2362 23.7296L23.5336 20.9593H24.7168ZM30.3116 20.9593L31.5344 23.1164L32.7681 20.9593H33.9477L32.2198 23.7296L33.9621 26.5H32.7825L31.5344 24.4295L30.2899 26.5H29.1068L30.831 23.7296L29.1284 20.9593H30.3116ZM36.1336 19.1124V26.5H35.0551V19.1124H36.1336Z" fill="black" />
          </g>
          <defs>
              <filter id="filter0_d_211_26699" x="0.54928" y="0.13732" width="58.9014" height="58.9014" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="7.08804" />
                  <feGaussianBlur stdDeviation="4.72536" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_211_26699" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_211_26699" result="shape" />
              </filter>
          </defs>
      </svg>
  )
}

export const BatchIcon = () => {
  return (
      <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="20" height="20" rx="10" fill="#EB4335" />
          <path d="M6.336 12L9.324 6.6H10.884L7.824 12H6.336ZM6.336 12.84V12L6.924 11.604H12.852V12.84H6.336ZM10.32 15V9.504H11.676V15H10.32Z" fill="white" />
      </svg>
  )
}

export const MinusIcon = () => {
  return (
      <svg width="8" height="3" viewBox="0 0 8 3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22621 0.933237V2.77273H0.777343V0.933237H7.22621Z" fill="#535353" />
      </svg>
  )
}

export const PlusIcon = () => {
  return (
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.23438 7.76136V0.079545H4.76278V7.76136H3.23438ZM0.160511 4.68182V3.15341H7.84233V4.68182H0.160511Z" fill="white" />
      </svg>
  )
}

export const CancelIcon = () => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.37158 7.37158L16.6283 16.6283" stroke="#535353" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.63623 16.9092L16.8929 7.65251" stroke="#535353" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}

export const BackIcon = () => {
  return (
      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13.5L1 7.5L7 1.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}

export const CheckedIcon = () => {
  return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="#D6D6D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#D6D6D6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}

export const UnCheckedIcon = () => {
  return (
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3.66675H5C3.89543 3.66675 3 4.56218 3 5.66675V19.6667C3 20.7713 3.89543 21.6667 5 21.6667H19C20.1046 21.6667 21 20.7713 21 19.6667V5.66675C21 4.56218 20.1046 3.66675 19 3.66675Z" stroke="#735CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
  )
}