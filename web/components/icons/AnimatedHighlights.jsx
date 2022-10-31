import { motion } from 'framer-motion'

export default function AnimatedHighlights({ className = '', color = '#FFCC7B' }) {
  return (
    <svg
      className={className}
      width="75"
      height="60"
      viewBox="0 0 75 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // style={{
      //   left: '-50px',
      //   top: '-40px',
      //   position: 'absolute',
      // }}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2839 6.198C22.4265 7.30874 22.3374 8.32454 22.9419 10.0976C23.5297 11.8227 23.8654 12.881 24.3465 14.527C25.2557 17.6376 26.8677 21.79 28.3443 24.8259C29.4902 27.182 33.2355 32.1743 36.1592 35.2429C36.7704 35.8845 37.7095 36.8746 38.2458 37.4429C38.9492 38.1884 39.4577 38.5241 40.0694 38.6473C41.2044 38.8755 42.4478 38.3035 42.9482 37.323C43.3163 36.6014 43.2782 34.8588 42.8807 34.2323C42.7677 34.0543 42.458 33.1758 42.1924 32.2798C41.9271 31.3838 41.4761 29.9021 41.1906 28.9869C40.9048 28.0719 40.6702 27.2276 40.6687 27.1111C40.6673 26.9946 40.4831 26.444 40.2595 25.8877C40.0359 25.3314 39.5551 24.1027 39.1909 23.1571C38.1102 20.351 36.0446 16.9524 32.7401 12.543C28.5868 7.00121 27.3179 5.56177 26.3695 5.31723C25.6939 5.14297 24.166 5.24805 23.8718 5.48903C23.8111 5.53878 23.5464 5.85784 23.2839 6.198ZM68.8478 1.97365C68.5375 2.3195 65.0967 9.50882 64.2308 11.6203C63.5614 13.2531 62.5899 17.304 62.4693 18.9647C62.4183 19.6685 62.4098 22.1408 62.4504 24.4587C62.5288 28.9462 62.7652 29.8463 64.0578 30.5759C65.3784 31.3215 67.3405 30.4734 68.0104 28.8679C68.1734 28.4768 68.9691 27.0164 69.7781 25.6226C70.5873 24.229 71.4464 22.6436 71.6872 22.0995C71.9282 21.5556 72.3006 20.7104 72.5148 20.2212C73.1039 18.8769 73.8308 15.5781 74.0369 13.3159C74.3551 9.81971 74.2412 3.51952 73.8439 2.65838C73.412 1.72211 72.2646 0.922002 71.3343 0.908559C70.6368 0.898235 69.2981 1.47179 68.8478 1.97365ZM1.18075 53.2213C0.350735 54.3225 0.277418 56.0117 1.0096 57.1655C1.34121 57.688 2.88318 58.6333 3.13901 58.4709C3.20898 58.4265 4.01396 58.5286 4.92791 58.6978C6.39504 58.9694 9.49336 59.4481 11.3622 59.692C15.5858 60.2431 19.16 59.8305 24.2643 58.2024C24.7535 58.0463 25.9945 57.6994 27.0221 57.4313C28.8782 56.947 28.8937 56.9386 29.4418 56.1049C30.1206 55.0726 30.0375 53.8314 29.2251 52.8643C28.0704 51.4902 18.9174 49.2536 15.2301 49.4446C11.6613 49.6295 8.38504 50.2886 5.10448 51.4822C4.35173 51.7561 3.37778 52.0784 2.94018 52.1984C2.089 52.4318 1.53129 52.756 1.18075 53.2213Z"
        fill={color}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, yo: 'spring', delay: 1 }}
      />
    </svg>
  )
}
