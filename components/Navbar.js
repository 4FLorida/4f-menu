import React, { Component } from 'react';
import Header from '../components/Header';
import NavItem from '../components/NavItem';
import Link from 'next/link';
import Head from 'next/head';

class Navbar extends Component {
  render() {
    return (
      <Header>
        <Link href="/Siparisler">
          <NavItem>
            <svg
              width="50"
              height="40"
              viewBox="0 0 41 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M37 23.0577V23.8346C37 24.4784 36.5021 25 35.8876 25H5.11236C4.49789 25 4 24.4784 4 23.8346V23.0577C4 22.4139 4.49789 21.8923 5.11236 21.8923H35.8876C36.5021 21.8923 37 22.4141 37 23.0577ZM35.9989 19.353C35.9989 19.9968 35.501 20.5184 34.8865 20.5184H6.11348C5.49902 20.5184 5.00112 19.9968 5.00112 19.353C5.00112 11.2339 10.7187 4.48764 18.1569 3.30082C18.0899 3.06712 18.0528 2.82006 18.0528 2.56383C18.0528 1.15015 19.1506 0 20.5 0C21.8494 0 22.9472 1.15015 22.9472 2.56383C22.9472 2.82006 22.9101 3.06712 22.8431 3.30082C30.2813 4.48748 35.9989 11.2339 35.9989 19.353ZM19.3604 6.64001C19.2106 6.01568 18.6066 5.63794 18.0104 5.79364C17.8336 5.84025 13.6468 6.97222 10.9488 10.3192C8.66123 13.1571 8.37128 16.702 8.36015 16.8515C8.31195 17.4931 8.76935 18.0542 9.38189 18.1045C9.41155 18.107 9.44092 18.1081 9.47029 18.1081C10.0452 18.1081 10.5322 17.6448 10.578 17.0341C10.5803 17.0049 10.818 14.0939 12.6488 11.8228C14.8678 9.07006 18.4948 8.06985 18.554 8.05369C19.149 7.89645 19.5099 7.26388 19.3604 6.64001Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="41"
                  height="33"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </NavItem>
        </Link>
        <Link href="/Urunler">
          <NavItem>
            <svg
              width="50"
              height="40"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 17.8502C5 20.0748 5.5183 22.1689 6.43053 24L16 18.0447L6.28751 12C5.46626 13.7595 5 15.7452 5 17.8502ZM8.02969 21.068C7.72541 21.223 7.40341 21.3225 7.07792 21.4106C6.93336 21.45 6.54343 21.5216 6.48534 21.2882C6.42827 21.0583 6.79751 20.9017 6.94156 20.8627C7.17678 20.7987 7.39941 20.7323 7.61958 20.6203C7.79487 20.5305 8.15407 20.4517 8.31266 20.6255C8.48171 20.8102 8.14372 21.0097 8.02969 21.068ZM12.1791 17.0314C12.6326 17.0314 13.0003 17.4271 13.0003 17.9161C13.0003 18.4051 12.6327 18.8008 12.1791 18.8008C11.726 18.8008 11.3581 18.4051 11.3581 17.9161C11.3575 17.4271 11.7254 17.0314 12.1791 17.0314ZM9.91326 18.3604C9.91326 19.0957 9.36074 19.6904 8.67903 19.6904C7.99763 19.6904 7.44449 19.0945 7.44449 18.3604C7.44449 17.6262 7.99711 17.0305 8.67903 17.0305C9.36074 17.0305 9.91326 17.6255 9.91326 18.3604ZM7.44449 13.7695C7.89835 13.7695 8.26605 14.1652 8.26605 14.6546C8.26605 15.1435 7.89845 15.5391 7.44449 15.5391C6.99145 15.5391 6.62385 15.1435 6.62385 14.6546C6.62385 14.1661 6.99094 13.7695 7.44449 13.7695ZM5.91161 17.6055C5.20716 17.6055 6.00556 17.0554 6.34242 17.0554C7.04688 17.0554 6.24847 17.6055 5.91161 17.6055Z"
                fill="white"
              />
              <path
                d="M17 4.13337V2C11.5094 2.18125 6.71857 4.91048 4 8.93281L6.02051 10C8.33337 6.61436 12.3705 4.31251 17 4.13337Z"
                fill="white"
              />
              <path
                d="M29.9795 9L32 7.7995C29.282 3.27404 24.4906 0.203892 19 0V2.39986C23.6292 2.60138 27.6663 5.19077 29.9795 9Z"
                fill="white"
              />
              <path
                d="M31 26.0951L28.957 25C26.5985 28.3605 22.5868 30.6325 18 30.812V33C23.4576 32.8173 28.2295 30.1074 31 26.0951Z"
                fill="white"
              />
              <path
                d="M30.1208 11.1725C31.0854 13.0379 31.6334 15.1478 31.6334 17.384C31.6334 19.7126 31.0409 21.9062 30 23.8277L32.0518 25C33.2938 22.7332 34 20.138 34 17.384C34 14.722 33.3376 12.2119 32.172 10L30.1208 11.1725Z"
                fill="white"
              />
              <path
                d="M4.76034 23.8286C3.70075 21.9507 3.09713 19.8082 3.09713 17.5348C3.09713 15.3506 3.6554 13.2899 4.63791 11.4672L2.54818 10.3223C1.36128 12.4826 0.686035 14.9344 0.686035 17.5338C0.686035 20.2242 1.40538 22.7584 2.67061 24.9725L4.76034 23.8286Z"
                fill="white"
              />
              <path
                d="M17 33V30.812C12.4133 30.632 8.40161 28.3605 6.04253 25L4 26.0951C6.77021 30.1074 11.5427 32.8173 17 33Z"
                fill="white"
              />
              <path
                d="M17 5C12.7758 5.19246 9.10107 7.56016 7 11.0441L17 17V5ZM10.8387 11.4007C10.1383 11.4007 9.57008 10.8147 9.57008 10.0921C9.57008 9.36895 10.1382 8.78287 10.8387 8.78287C11.5397 8.78287 12.1078 9.36895 12.1078 10.0921C12.1084 10.8153 11.5397 11.4007 10.8387 11.4007ZM14.6248 13.791C14.159 13.791 13.7809 13.4017 13.7809 12.9206C13.7809 12.4395 14.1589 12.0497 14.6248 12.0497C15.0912 12.0497 15.4695 12.4395 15.4695 12.9206C15.469 13.4017 15.0912 13.791 14.6248 13.791ZM14.5912 10.5502C14.4307 10.3451 14.2484 10.239 14.0043 10.1704C13.7597 10.1014 13.7111 9.83332 13.8684 9.64901C14.0533 9.43296 14.3689 9.36373 14.6316 9.43829C15.011 9.54522 15.3331 9.75062 15.5804 10.0669C15.9199 10.4991 14.8907 10.9323 14.5912 10.5502ZM15.0165 8.48282C14.5506 8.48282 14.1723 8.09343 14.1723 7.61189C14.1723 7.13079 14.5506 6.74141 15.0165 6.74141C15.4829 6.74141 15.8612 7.13079 15.8612 7.61189C15.8612 8.09332 15.4829 8.48282 15.0165 8.48282Z"
                fill="white"
              />
              <path
                d="M31 17.8498C31 15.745 30.4925 13.7594 29.5954 12L19 18.0441L29.4398 24C30.4346 22.1679 31 20.0739 31 17.8498ZM29.21 14.0744C29.9762 14.0744 29.0705 14.5845 28.7296 14.5845C27.9646 14.5839 28.8696 14.0744 29.21 14.0744ZM23.6195 18.8848C23.1253 18.8848 22.7241 18.489 22.7241 17.9996C22.7241 17.5112 23.1253 17.115 23.6195 17.115C24.1149 17.115 24.5154 17.5112 24.5154 17.9996C24.5153 18.489 24.1148 18.8848 23.6195 18.8848ZM26.082 17.1019C26.6416 17.1019 25.5745 17.5581 25.3383 17.5581C24.7793 17.5581 25.8464 17.1019 26.082 17.1019ZM25.5663 20.0111C24.792 20.0111 25.5501 19.3335 26.0021 19.3335C26.7771 19.3329 26.0177 20.0111 25.5663 20.0111ZM27.9263 22.2297C27.431 22.2297 27.0304 21.834 27.0304 21.3445C27.0304 20.8562 27.4321 20.4605 27.9263 20.4605C28.4212 20.4605 28.8223 20.8562 28.8223 21.3445C28.8221 21.834 28.4212 22.2297 27.9263 22.2297ZM28.3772 18.7326C27.6342 18.7326 27.0317 18.1373 27.0317 17.4032C27.0317 16.6684 27.6342 16.0729 28.3772 16.0729C29.1208 16.0729 29.724 16.6684 29.724 17.4032C29.7227 18.1379 29.1202 18.7326 28.3772 18.7326Z"
                fill="white"
              />
              <path
                d="M17 30V19L7 24.5415C9.16472 27.6949 12.8177 29.822 17 30ZM15.187 29.1208C14.4471 29.1208 15.2525 28.5737 15.6284 28.5737C16.3684 28.5736 15.5629 29.1208 15.187 29.1208ZM14.9814 21.9551C15.456 21.9551 15.841 22.3239 15.841 22.7794C15.841 23.2351 15.456 23.6038 14.9814 23.6038C14.5073 23.6038 14.1223 23.2351 14.1223 22.7794C14.1223 22.3239 14.5073 21.9551 14.9814 21.9551ZM12.7716 23.884C13.5153 23.884 12.8058 24.5351 12.3591 24.5351C11.616 24.5351 12.325 23.884 12.7716 23.884ZM13.2912 24.97C14.0048 24.97 14.5828 25.5247 14.5828 26.2094C14.5828 26.894 14.0048 27.4487 13.2912 27.4487C12.5784 27.4487 12.0002 26.8935 12.0002 26.2094C12.0002 25.5246 12.5784 24.97 13.2912 24.97ZM9.62863 24.0193C10.1033 24.0193 10.4883 24.388 10.4883 24.8436C10.4883 25.2992 10.1033 25.668 9.62863 25.668C9.15454 25.668 8.76975 25.2992 8.76975 24.8436C8.76975 24.3885 9.15443 24.0193 9.62863 24.0193Z"
                fill="white"
              />
              <path
                d="M29 24.5415L18 19V30C22.6015 29.822 26.6198 27.6949 29 24.5415ZM20.0323 28.273C19.5107 28.273 19.0876 27.9037 19.0876 27.4486C19.0876 26.9925 19.5107 26.6238 20.0323 26.6238C20.5544 26.6238 20.9783 26.9925 20.9783 27.4486C20.9783 27.9037 20.5544 28.273 20.0323 28.273ZM20.6717 24.8442C19.8876 24.8442 19.2507 24.2889 19.2507 23.6048C19.2507 22.9206 19.8863 22.3653 20.6717 22.3653C21.4564 22.3653 22.0922 22.9206 22.0922 23.6048C22.0922 24.289 21.4565 24.8442 20.6717 24.8442ZM22.1087 26.6702C21.5207 26.6702 22.6491 26.2503 22.8952 26.2503C23.482 26.2503 22.3548 26.6702 22.1087 26.6702ZM25.6792 25.7937C25.157 25.7937 24.7339 25.425 24.7339 24.97C24.7339 24.5138 25.1577 24.145 25.6792 24.145C26.2013 24.145 26.6246 24.5138 26.6246 24.97C26.6246 25.425 26.2013 25.7937 25.6792 25.7937Z"
                fill="white"
              />
              <path
                d="M19 3V15L30 9.04407C27.6892 5.56017 23.6473 3.19246 19 3ZM22.56 4.72869C23.0737 4.72869 23.4889 5.11808 23.4889 5.59929C23.4889 6.0805 23.0737 6.4701 22.56 6.4701C22.0476 6.4701 21.6317 6.08039 21.6317 5.59929C21.6312 5.11818 22.0469 4.72869 22.56 4.72869ZM20.569 3.91385C21.3725 3.91385 20.6398 4.63534 20.1334 4.63534C19.3299 4.63534 20.0625 3.91385 20.569 3.91385ZM21.1642 12.0377C20.3938 12.0377 19.7679 11.4517 19.7679 10.7291C19.7679 10.0065 20.3927 9.42041 21.1642 9.42041C21.9353 9.42041 22.56 10.0065 22.56 10.7291C22.56 11.4517 21.9354 12.0377 21.1642 12.0377ZM22.5947 8.15326C22.3607 8.32692 21.9941 8.37409 21.7404 8.21097C21.4781 8.04219 21.1492 8.00046 20.8433 7.94417C20.5864 7.89635 20.3458 7.70726 20.4706 7.43883C20.5894 7.18507 20.9578 7.03586 21.241 7.08824C21.7336 7.17997 22.2264 7.2706 22.6476 7.54185C22.8984 7.7028 22.7964 8.00416 22.5947 8.15326ZM23.3616 10.1915C22.5587 10.1915 23.2723 9.45095 23.7925 9.45095C24.5954 9.4503 23.8818 10.1915 23.3616 10.1915ZM25.3166 8.98125C24.8034 8.98125 24.3877 8.59187 24.3877 8.11066C24.3877 7.62945 24.8041 7.23985 25.3166 7.23985C25.8296 7.23985 26.2455 7.62955 26.2455 8.11066C26.2455 8.59176 25.8296 8.98125 25.3166 8.98125ZM26.9541 8.60263C26.3763 8.60263 27.4852 8.15858 27.727 8.15858C28.3048 8.15804 27.1959 8.60263 26.9541 8.60263Z"
                fill="white"
              />
            </svg>
          </NavItem>
        </Link>
        <Link href="/Kategoriler">
          <NavItem>
            <svg
              width="50"
              height="60"
              viewBox="0 0 33 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M25.2497 24.9034H23.5018V25.4169C23.5018 26.3717 23.2332 27.1329 22.6961 27.7004C22.159 28.2679 21.5081 28.4706 20.7434 28.3085L7.0333 25.6331C6.2686 25.4889 5.61769 25.0295 5.08057 24.2548C4.54346 23.4801 4.2749 22.6154 4.2749 21.6605V4.1488C4.2749 3.19394 4.61629 2.37871 5.29906 1.70311C5.98183 1.0275 6.80571 0.689697 7.7707 0.689697H25.2497C26.2147 0.689697 27.0386 1.0275 27.7213 1.70311C28.4041 2.37871 28.7455 3.19394 28.7455 4.1488V21.4443C28.7455 22.3992 28.4041 23.2144 27.7213 23.89C27.0386 24.5656 26.2147 24.9034 25.2497 24.9034ZM7.7707 11.9588C7.7707 12.7875 8.04381 13.5442 8.59003 14.2288C8.66286 14.3369 8.85858 14.5081 9.17721 14.7423C9.49584 14.9765 9.77805 15.2242 10.0239 15.4855C10.2696 15.7467 10.3925 16.0034 10.3925 16.2557V19.7148C10.3925 19.985 10.6793 20.2327 11.2528 20.4579C11.8264 20.6831 12.7049 20.9398 13.8883 21.2281C14.5984 21.4083 15.2129 21.4758 15.7318 21.4308C16.2507 21.3857 16.6559 21.2822 16.9472 21.12C17.2385 20.9579 17.3841 20.7777 17.3841 20.5795V17.1204C17.3841 16.8682 17.507 16.6295 17.7528 16.4043C17.9986 16.1791 18.29 15.9764 18.6268 15.7962C18.9636 15.6161 19.1594 15.499 19.214 15.4449C19.305 15.3729 19.437 15.2918 19.61 15.2017C19.783 15.1116 19.8922 15.017 19.9377 14.918C19.9832 14.8189 20.006 14.6432 20.006 14.391C20.006 13.5803 19.742 12.8326 19.214 12.148C18.686 11.4634 18.0578 11.049 17.3295 10.9049C16.8743 10.8148 16.4465 10.8598 16.0459 11.04C15.4997 10.1212 14.776 9.57166 13.8747 9.3915C12.9734 9.21134 12.2588 9.47257 11.7308 10.1752C11.312 9.85091 10.8841 9.64372 10.4472 9.55364C9.70067 9.40951 9.06797 9.57166 8.54906 10.0401C8.03015 10.5085 7.7707 11.1481 7.7707 11.9588ZM26.9976 5.39191C26.9976 4.56317 26.7017 3.86054 26.11 3.28402C25.5182 2.70751 24.8127 2.41925 23.9934 2.41925H11.2938L20.7434 4.25689C21.5081 4.41904 22.159 4.88746 22.6961 5.66215C23.2332 6.43685 23.5018 7.29262 23.5018 8.22946V23.1739H23.9934C24.8127 23.1739 25.5182 22.8811 26.11 22.2956C26.7017 21.71 26.9976 21.0119 26.9976 20.2012V5.39191Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.274902"
                  y="0.689697"
                  width="32.4706"
                  height="35.6728"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </NavItem>
        </Link>
        <Link href="/Kampanyalar">
          <NavItem></NavItem>
        </Link>
        <Link href="/Analiz">
          <NavItem>
            <svg
              width="60"
              height="50"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M8.13868 18.1619L4.2749 21.9681V11.0414H8.13868V18.1619ZM14.5783 15.7798L12.5563 14.0449L10.7145 15.7539V5.86286H14.5783V15.7798ZM21.0179 13.6307L17.1542 17.5146V0.684326H21.0179V13.6307ZM24.637 13.3847L22.3059 11.0414H28.7455V17.5146L26.4401 15.1972L17.1542 24.4538L12.6851 20.544L7.8167 25.2824H4.2749L12.6078 17.0744L17.1542 20.9324"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.274902"
                  y="0.684326"
                  width="32.4706"
                  height="32.598"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </NavItem>
        </Link>
        <Link href="/Ayarlar">
          <NavItem>
            <svg
              width="50"
              height="60"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M7.95609 19.8367C8.37979 18.0606 9.9699 16.7404 11.8667 16.7404C14.0877 16.7404 15.8881 18.5502 15.8881 20.7828C15.8881 23.0153 14.0877 24.8251 11.8667 24.8251C9.9699 24.8251 8.37979 23.505 7.95609 21.7288H5.70631C5.18652 21.7288 4.76514 21.3053 4.76514 20.7828C4.76514 20.2602 5.18652 19.8367 5.70631 19.8367H7.95609ZM16.17 11.58C16.5937 9.80387 18.1838 8.48373 20.0806 8.48373C22.3016 8.48373 24.102 10.2935 24.102 12.5261C24.102 14.7586 22.3016 16.5684 20.0806 16.5684C18.1838 16.5684 16.5937 15.2483 16.17 13.4721H5.70631C5.18652 13.4721 4.76514 13.0486 4.76514 12.5261C4.76514 12.0036 5.18652 11.58 5.70631 11.58H16.17ZM7.95609 3.32331C8.37979 1.54718 9.9699 0.227051 11.8667 0.227051C14.0877 0.227051 15.8881 2.03687 15.8881 4.26939C15.8881 6.50191 14.0877 8.31172 11.8667 8.31172C9.9699 8.31172 8.37979 6.99159 7.95609 5.21546H5.70631C5.18652 5.21546 4.76514 4.79189 4.76514 4.26939C4.76514 3.74688 5.18652 3.32331 5.70631 3.32331H7.95609ZM19.0539 5.21546C18.5341 5.21546 18.1127 4.79189 18.1127 4.26939C18.1127 3.74688 18.5341 3.32331 19.0539 3.32331H28.2945C28.8143 3.32331 29.2357 3.74688 29.2357 4.26939C29.2357 4.79189 28.8143 5.21546 28.2945 5.21546H19.0539ZM27.2678 13.4721C26.748 13.4721 26.3266 13.0486 26.3266 12.5261C26.3266 12.0036 26.748 11.58 27.2678 11.58H28.2945C28.8143 11.58 29.2357 12.0036 29.2357 12.5261C29.2357 13.0486 28.8143 13.4721 28.2945 13.4721H27.2678ZM19.0539 21.7288C18.5341 21.7288 18.1127 21.3053 18.1127 20.7828C18.1127 20.2602 18.5341 19.8367 19.0539 19.8367H28.2945C28.8143 19.8367 29.2357 20.2602 29.2357 20.7828C29.2357 21.3053 28.8143 21.7288 28.2945 21.7288H19.0539ZM11.8667 6.41956C13.0481 6.41956 14.0058 5.4569 14.0058 4.26939C14.0058 3.08188 13.0481 2.11921 11.8667 2.11921C10.6854 2.11921 9.7277 3.08188 9.7277 4.26939C9.7277 5.4569 10.6854 6.41956 11.8667 6.41956ZM20.0806 14.6762C21.262 14.6762 22.2197 13.7136 22.2197 12.5261C22.2197 11.3386 21.262 10.3759 20.0806 10.3759C18.8993 10.3759 17.9416 11.3386 17.9416 12.5261C17.9416 13.7136 18.8993 14.6762 20.0806 14.6762ZM11.8667 22.9329C13.0481 22.9329 14.0058 21.9703 14.0058 20.7828C14.0058 19.5952 13.0481 18.6326 11.8667 18.6326C10.6854 18.6326 9.7277 19.5952 9.7277 20.7828C9.7277 21.9703 10.6854 22.9329 11.8667 22.9329Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.765137"
                  y="0.227051"
                  width="32.4706"
                  height="32.598"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </NavItem>
        </Link>
      </Header>
    );
  }
}

export default Navbar;
