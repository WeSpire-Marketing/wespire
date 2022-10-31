import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useInView } from 'framer-motion'

export default function Icon({ color = '#FFCC7B' }) {
  const controls = useAnimationControls()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, pathLength: 1 })
    }
  }, [controls, isInView])

  return (
    <svg
      width="56"
      height="42"
      viewBox="0 0 56 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      style={{
        top: '-9px',
        right: '-55px',
        position: 'absolute',
      }}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.7958 25.1023C35.692 25.2285 35.5145 25.7166 35.4011 26.187C34.9888 27.898 34.8208 28.662 34.738 29.2011C34.6916 29.5037 34.6084 29.9739 34.5531 30.2462C34.4978 30.5184 34.4605 30.8613 34.4703 31.0084C34.4901 31.3037 34.3484 31.4054 33.8742 31.4361C33.1533 31.4828 29.1288 32.4022 28.7719 32.6019C28.2476 32.895 28.1795 33.707 28.6427 34.1424C28.8852 34.3703 29.0449 34.4248 29.5262 34.4445C30.523 34.485 31.6393 34.6199 32.9331 34.8563C33.3898 34.9397 33.8917 34.9994 34.0485 34.9889C34.3856 34.9664 34.552 35.1827 34.5857 35.6872C34.6173 36.16 34.8466 37.2088 35.2381 38.6713C35.7802 40.6962 35.8078 40.7688 36.1416 41.0492C36.4063 41.2716 36.5323 41.306 36.9559 41.2712C37.3957 41.2352 37.4867 41.1892 37.6997 40.8954C37.9139 40.5999 37.9426 40.4458 37.9442 39.582C37.9451 39.0438 37.9945 38.0958 38.054 37.4754C38.1134 36.8551 38.1746 36.0904 38.1901 35.7763C38.2257 35.0557 38.3598 34.8988 38.9758 34.8576C39.2413 34.8399 39.6441 34.7698 39.871 34.7019C40.0979 34.634 40.6544 34.481 41.1077 34.3618C42.3439 34.0368 43.5973 33.5977 43.8628 33.3967C44.3032 33.0631 44.353 32.5175 44.0001 31.8956C43.7145 31.3924 43.4385 31.3237 41.7942 31.3466C41.1165 31.3561 40.0724 31.3458 39.474 31.3238L38.386 31.2837L38.2747 30.5487C38.2136 30.1444 38.0386 28.8076 37.8859 27.578C37.6127 25.3782 37.6037 25.3379 37.3273 25.0662C37.0792 24.8223 36.9845 24.7949 36.5154 24.8315C36.1011 24.8639 35.9429 24.9234 35.7958 25.1023ZM12.2589 4.77096C12.0426 4.89797 11.8597 5.12492 11.735 5.42073C11.5622 5.83064 11.5529 6.01747 11.6404 7.32628C11.822 10.0438 11.1781 12.7251 9.98087 14.2366C9.58925 14.731 8.61579 15.5676 8.30135 15.6799C8.19535 15.7178 7.87129 15.8515 7.58122 15.977C6.5594 16.4193 5.77941 16.5604 3.51403 16.7134C1.40314 16.8559 1.32474 16.8683 1.13146 17.0899C0.987132 17.2555 0.937461 17.4468 0.952728 17.7786C0.9704 18.1641 1.0199 18.2728 1.25989 18.4535C1.41729 18.5721 1.71346 18.6855 1.91806 18.7057C2.12266 18.7259 2.42104 18.7748 2.58095 18.8143C2.74096 18.8539 3.08307 18.8721 3.34131 18.8548C3.81623 18.8231 4.131 18.9756 4.14909 19.2462C4.1622 19.4424 4.5886 19.7033 5.0885 19.8209C7.8423 20.4684 9.61782 21.1969 10.8947 22.2031C11.5786 22.7421 12.5289 24.0789 12.8483 24.9512C12.9164 25.1372 13.0854 26.596 13.2239 28.1929C13.517 31.575 13.5221 31.5904 14.4676 31.9953C15.0942 32.2637 15.4274 32.2686 15.9314 32.0165C16.8134 31.5755 16.9807 31.1369 16.8749 29.5423C16.8147 28.6337 16.8269 28.2226 16.9204 28.0088C16.9908 27.8481 17.0447 27.6635 17.0404 27.5986C17.0285 27.4212 17.5064 26.2082 18.0048 25.151C18.6852 23.7074 19.6457 22.6531 21.2804 21.5551C22.4275 20.7846 23.9099 19.9609 24.9026 19.5423C25.8084 19.1604 26.1778 18.9693 26.8133 18.554C27.2418 18.2739 27.8316 17.5585 28.0001 17.1143C28.3349 16.2321 27.9449 15.2939 27.0098 14.7319C26.6179 14.4963 26.5058 14.4813 25.3006 14.5036C24.0441 14.5268 23.8062 14.5055 22.6614 14.2681C21.7336 14.0758 21.522 14.0044 19.8749 13.3282C18.0953 12.5975 16.9829 11.5778 16.3186 10.0679C16.1441 9.67125 15.9019 9.13059 15.7807 8.86645C15.6593 8.60232 15.4945 8.14558 15.4144 7.85148C14.8013 5.6009 14.6589 5.24988 14.2083 4.87966C13.7445 4.49863 12.8108 4.4465 12.2589 4.77096ZM15.9838 15.3101C16.9089 16.1193 17.7033 16.6039 19.1528 17.243C20.4053 17.7951 20.4079 17.7977 19.9801 18.0639C18.9924 18.6785 17.5332 19.881 16.8746 20.6233C16.5346 21.0063 15.6822 22.1864 15.4256 22.6289C15.304 22.8387 15.1819 23.0122 15.1542 23.0144C15.1266 23.0167 14.8537 22.69 14.548 22.2884C14.0364 21.6168 13.0516 20.6535 12.3695 20.1578C11.9508 19.8535 10.4801 19.0757 10.0075 18.9086C9.77928 18.8279 9.37044 18.6777 9.09884 18.5748L8.60504 18.3876L8.90297 18.1773C9.06682 18.0618 9.55187 17.7607 9.98087 17.5083C10.785 17.0353 11.9236 16.1019 12.304 15.604C12.4228 15.4483 12.7161 14.9854 12.9556 14.5753C13.195 14.1651 13.5268 13.6593 13.6927 13.4512L13.9945 13.0727L14.5566 13.8131C14.8658 14.2203 15.508 14.894 15.9838 15.3101Z"
        fill={color}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={controls}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
      />
      <motion.path
        d="M47.1531 1.0739C47.0494 1.20012 46.8718 1.68816 46.7584 2.15854C46.3462 3.8696 46.1781 4.6336 46.0953 5.17271C46.049 5.47527 45.9657 5.94552 45.9104 6.21779C45.8551 6.48996 45.8179 6.8329 45.8277 6.97994C45.8474 7.27531 45.7057 7.37695 45.2315 7.40765C44.5106 7.45434 40.4862 8.37379 40.1292 8.57346C39.605 8.86657 39.5369 9.67863 40 10.1139C40.2426 10.3419 40.4022 10.3964 40.8835 10.416C41.8804 10.4566 42.9966 10.5915 44.2904 10.8279C44.7472 10.9113 45.249 10.971 45.4058 10.9605C45.7429 10.938 45.9093 11.1543 45.943 11.6588C45.9746 12.1315 46.204 13.1804 46.5954 14.6428C47.1375 16.6678 47.1652 16.7404 47.499 17.0208C47.7636 17.2432 47.8897 17.2775 48.3133 17.2428C48.7531 17.2068 48.844 17.1608 49.0571 16.867C49.2712 16.5714 49.2999 16.4174 49.3015 15.5536C49.3024 15.0154 49.3519 14.0674 49.4113 13.447C49.4707 12.8267 49.532 12.062 49.5475 11.7478C49.583 11.0273 49.7172 10.8704 50.3331 10.8292C50.5986 10.8115 51.0015 10.7414 51.2284 10.6735C51.4552 10.6055 52.0117 10.4525 52.465 10.3333C53.7013 10.0084 54.9547 9.56932 55.2202 9.36824C55.6605 9.0347 55.7104 8.48907 55.3574 7.86721C55.0718 7.364 54.7958 7.29533 53.1515 7.3182C52.4738 7.32765 51.4297 7.31734 50.8313 7.29536L49.7434 7.25531L49.6321 6.52028C49.5709 6.11601 49.3959 4.77919 49.2432 3.54958C48.97 1.34975 48.961 1.30947 48.6846 1.03778C48.4366 0.793902 48.3418 0.766479 47.8727 0.803073C47.4584 0.835512 47.3002 0.894988 47.1531 1.0739Z"
        fill={color}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={controls}
        transition={{ duration: 1.5, yo: 'spring', delay: 0.25 }}
      />
    </svg>
  )
}
