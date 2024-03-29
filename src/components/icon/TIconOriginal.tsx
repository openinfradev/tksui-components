/* eslint-disable max-len */
const TOriginalImage = {
    t_checkbox_on: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='0.5' y='0.5' width='15' height='15' rx='3.5' fill='currentColor'/>
            <path d='M6.58327 11.25L3.7666 8.41667L4.59993 7.58333L6.58327 9.55L11.3999 4.75L12.2333 5.6L6.58327 11.25Z' fill='white' stroke='white' />
        </svg>
    ),
    t_checkbox_off: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='0.5' y='0.5' width='15' height='15' rx='3.5'/>
        </svg>
    ),
    t_checkbox_disabled_off: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <rect id='Rectangle 41976' x='0.5' y='0.5' width='15' height='15' rx='3.5' fill='#F4F4F4' stroke='#B8BABC'/>
            </g>
        </svg>
    ),
    t_checkbox_indeterminate: (
        <svg width='15' height='15' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <rect x='0.5' y='0.5' width='15' height='15' rx='3.5' fill='currentColor'/>
                <path id='Vector' d='M3.8667 8.5999V7.3999H12.1334V8.5999H3.8667Z' fill='white' stroke='white'/>
            </g>
        </svg>
    ),
    t_radio_on: (
        <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <circle id='Ellipse 3258' cx='8' cy='8' r='7.5' />
                <circle id='Ellipse 3259' cx='8' cy='8' r='3.5' fill='white'/>
            </g>
        </svg>

    ),
    t_radio_off: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <circle id='Ellipse 3257' cx='8' cy='8' r='7.5'/>
            </g>
        </svg>

    ),
    t_radio_disabled_off: (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='#F4F4F4' stroke='#B8BABC' xmlns='http://www.w3.org/2000/svg'>
            <g>
                <circle id='Ellipse 3258' cx='8' cy='8' r='7.5' />
            </g>
        </svg>

    ),
    t_navigate_left: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path transform='rotate(135 7.428 6.032)' style={{stroke: 'none'}} d='M0 0h11.536v2H0z'/>
            <path transform='rotate(-135 11.935 6.772)' style={{stroke: 'none'}} d='M0 0h11.536v2H0z'/>
        </svg>
    ),
    t_navigate_left_double: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <g>
                <path transform='rotate(135 5.714 5.322)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                <path transform='rotate(-135 10.22 7.482)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                <g data-name='icon'>
                    <path transform='rotate(135 8.714 6.565)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                    <path transform='rotate(-135 13.22 6.24)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                </g>
            </g>
        </svg>
    ),
    t_navigate_right: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' transform={'rotate(180)'}>
            <path transform='rotate(135 7.428 6.032)' style={{stroke: 'none'}} d='M0 0h11.536v2H0z'/>
            <path transform='rotate(-135 11.935 6.772)' style={{stroke: 'none'}} d='M0 0h11.536v2H0z'/>
        </svg>
    ),
    t_navigate_right_double: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' transform={'rotate(180)'}>
            <g>
                <path transform='rotate(135 5.714 5.322)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                <path transform='rotate(-135 10.22 7.482)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                <g data-name='icon'>
                    <path transform='rotate(135 8.714 6.565)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                    <path transform='rotate(-135 13.22 6.24)' style={{stroke: 'none'}} d='M0 0h11.536v1.923H0z'/>
                </g>
            </g>
        </svg>
    ),
    t_list: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path transform='translate(5 3)' style={{stroke: 'none'}} d='M0 0h14v2H0z'/>
            <path transform='translate(5 9)' style={{stroke: 'none'}} d='M0 0h14v2H0z'/>
            <path transform='translate(5 15)' style={{stroke: 'none'}} d='M0 0h14v2H0z'/>
            <path transform='translate(1 3)' style={{stroke: 'none'}} d='M0 0h2v2H0z'/>
            <path transform='translate(1 9)' style={{stroke: 'none'}} d='M0 0h2v2H0z'/>
            <path transform='translate(1 15)' style={{stroke: 'none'}} d='M0 0h2v2H0z'/>
        </svg>
    ),
    t_done: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 58 58'>
            <path d='M15.8262 29.6945L15.643 29.8718L15.8237 30.0515C17.8671 32.0838 19.8512 34.0539 21.7619 35.9512C22.8703 37.0518
                23.954 38.1279 25.0102 39.1773L25.1861 39.3521L25.3623 39.1777C31.8538 32.7511 38.4892 26.1777 45.1626 19.5667L45.1759
                19.5535L45.3451 19.386L45.186 19.2088C44.7629 18.7377 44.2661 18.181 43.6421 17.4817C43.4605 17.2782 43.2681 17.0626
                 43.0636 16.8335L42.8879 16.6367L42.7009 16.8227C39.7815 19.7249 36.9133 22.5764 34.0451 25.4279C31.0239 28.4315
                  28.0025 31.4353 24.9211 34.4985C24.751 34.3179 24.5813 34.1377 24.4119 33.9579C22.4068 31.829 20.4442 29.7453
                   18.3894 27.5702L18.2159 27.3866L18.0341 27.5618C17.206 28.3601 16.5387 29.0054 16.0267 29.5007C15.957 29.5681
                    15.8902 29.6327 15.8262 29.6945Z' style={{fill: 'white', stroke: 'white'}} strokeWidth='0.5'/>
        </svg>
    ),
    t_person: (
        <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'>
            <circle cx='40' cy='40' r='39'/>
            <circle cx='40' cy='25' r='15' fill='#F5F5FD'/>
            <mask id='mask0_1030_1924' style={{maskType: 'alpha'}} maskUnits='userSpaceOnUse' x='0' y='0' width='80' height='80'>
                <circle cx='40' cy='40' r='39' fill='#3535CE'/>
            </mask>
            <g mask='url(#mask0_1030_1924)'>
                <circle cx='40' cy='76' r='32' fill='#F5F5FD'/>
            </g>
        </svg>
    ),
    t_double_quotes_open: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 18'>
            <path
                d='M12 17H0V10.6199C0 6.75376 2.51213 3.21308 7.53423 0L10.1995 2.14229C8.13535 4.16443 7.01114 6.00986 6.82907 7.67508H12V17Z'/>
            <path
                d='M26.9993 17H15V10.6199C15 6.75376 17.5215 3.21308 22.5682 0L25.245 2.14229C23.152 4.16443 22.014 6.00986 21.8291 7.67508H27V17H26.9993Z'/>
        </svg>
    ),
    t_double_quotes_close: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 18' style={{rotate: '180deg'}}>
            <path
                d='M12 17H0V10.6199C0 6.75376 2.51213 3.21308 7.53423 0L10.1995 2.14229C8.13535 4.16443 7.01114 6.00986 6.82907 7.67508H12V17Z'/>
            <path
                d='M26.9993 17H15V10.6199C15 6.75376 17.5215 3.21308 22.5682 0L25.245 2.14229C23.152 4.16443 22.014 6.00986 21.8291 7.67508H27V17H26.9993Z'/>
        </svg>
    ),
    t_add_box: (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' stroke={'none'}>
            <path
                d='M9.45817 13.7915H10.5415V10.5415H13.7915V9.45817H10.5415V6.20817H9.45817V9.45817H6.20817V10.5415H9.45817V13.7915ZM4.75625 16.5831C4.38114 16.5831 4.06407 16.4536 3.80505 16.1946C3.54602 15.9356 3.4165 15.6185 3.4165 15.2434V4.75625C3.4165 4.38114 3.54602 4.06407 3.80505 3.80505C4.06407 3.54602 4.38114 3.4165 4.75625 3.4165H15.2434C15.6185 3.4165 15.9356 3.54602 16.1946 3.80505C16.4536 4.06407 16.5831 4.38114 16.5831 4.75625V15.2434C16.5831 15.6185 16.4536 15.9356 16.1946 16.1946C15.9356 16.4536 15.6185 16.5831 15.2434 16.5831H4.75625ZM4.75625 15.4998H15.2434C15.3075 15.4998 15.3663 15.4731 15.4197 15.4197C15.4731 15.3663 15.4998 15.3075 15.4998 15.2434V4.75625C15.4998 4.69214 15.4731 4.63337 15.4197 4.57994C15.3663 4.52653 15.3075 4.49982 15.2434 4.49982H4.75625C4.69214 4.49982 4.63337 4.52653 4.57994 4.57994C4.52652 4.63337 4.49982 4.69214 4.49982 4.75625V15.2434C4.49982 15.3075 4.52652 15.3663 4.57994 15.4197C4.63337 15.4731 4.69214 15.4998 4.75625 15.4998Z'
            />
        </svg>

    ),
    t_remove_box: (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' stroke={'none'}>
            <path
                d='M4.75967 16.5865C4.38456 16.5865 4.06749 16.457 3.80846 16.198C3.54944 15.939 3.41992 15.6219 3.41992 15.2468V4.75967C3.41992 4.38456 3.54944 4.06749 3.80846 3.80846C4.06749 3.54944 4.38456 3.41992 4.75967 3.41992H15.2468C15.6219 3.41992 15.939 3.54944 16.198 3.80846C16.457 4.06749 16.5865 4.38456 16.5865 4.75967V15.2468C16.5865 15.6219 16.457 15.939 16.198 16.198C15.939 16.457 15.6219 16.5865 15.2468 16.5865H4.75967ZM4.75967 15.5032H15.2468C15.3109 15.5032 15.3697 15.4765 15.4231 15.4231C15.4765 15.3697 15.5032 15.3109 15.5032 15.2468V4.75967C15.5032 4.69556 15.4765 4.63679 15.4231 4.58336C15.3697 4.52994 15.3109 4.50323 15.2468 4.50323H4.75967C4.69556 4.50323 4.63679 4.52994 4.58336 4.58336C4.52994 4.63679 4.50323 4.69556 4.50323 4.75967V15.2468C4.50323 15.3109 4.52994 15.3697 4.58336 15.4231C4.63679 15.4765 4.69556 15.5032 4.75967 15.5032Z'
            />
            <rect x='6.41992' y='9.41992' width='7' height='1'/>
        </svg>
    ),
    t_bullet: (
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
            <circle cx='10' cy='10' r='2' />
        </svg>
    ),
};

export default TOriginalImage;
