/* eslint-disable max-len */
const TOriginalImage = {
    t_check_on: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <path d='M0 0h22v22H0z'/>
            <g>
                <path transform='rotate(-45 16.071 1)' style={{stroke: 'none', fill: '#fff'}} d='M0 0h2v7H0z'/>
                <path transform='rotate(45 1.121 23.192)' style={{stroke: 'none', fill: '#fff'}} d='M0 0h2v13H0z'/>
            </g>
        </svg>
    ),
    t_check_disabled_off: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <g style={{fill: '#f5f5f5'}}>
                <path style={{stroke: 'none'}} d='M0 0h22v22H0z'/>
                <path style={{fill: 'none'}} d='M.5.5h21v21H.5z'/>
            </g>
        </svg>
    ),
    t_check_off: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <g style={{fill: '#fff'}}>
                <path style={{stroke: 'none'}} d='M0 0h22v22H0z'/>
                <path style={{fill: 'none'}} d='M.5.5h21v21H.5z'/>
            </g>
        </svg>
    ),
    t_check_intermediate: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <path d='M0 0h22v22H0z'/>
            <g>
                <path strokeWidth={2} style={{stroke: '#fff'}} d='M5 11 l12 0 Z'/>
            </g>
        </svg>
    ),

    t_radio_on: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <rect width='22' height='22' rx='11' style={{stroke: 'none'}}/>
            <g transform='translate(1 1)' style={{stroke: '#fff', strokeWidth: '4px'}}>
                <rect width='20' height='20' rx='10' style={{stroke: 'none'}}/>
                <rect x='2' y='2' width='16' height='16' rx='8' style={{fill: 'none'}}/>
            </g>
        </svg>
    ),
    t_radio_off: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <g style={{fill: '#fff'}}>
                <rect width='22' height='22' rx='11' style={{stroke: 'none'}}/>
                <rect x='.5' y='.5' width='21' height='21' rx='10.5' style={{fill: 'none'}}/>
            </g>
        </svg>
    ),
    t_radio_disabled_off: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'>
            <g style={{fill: '#f5f5f5'}}>
                <rect width='22' height='22' rx='11' style={{stroke: 'none'}}/>
                <rect x='.5' y='.5' width='21' height='21' rx='10.5' style={{fill: 'none'}}/>
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
    t_information: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <g style={{fill: '#fff'}}>
                <circle cx='10' cy='10' r='10' style={{stroke: 'none'}}/>
                <circle cx='10' cy='10' r='9.5' style={{fill: 'none'}}/>
            </g>
            <g>
                <path transform='translate(9 9)' style={{stroke: 'none'}} d='M0 0h2v6H0z'/>
                <path transform='translate(9 5)' style={{stroke: 'none'}} d='M0 0h2v2H0z'/>
            </g>
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
        <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' >
            <circle cx='40' cy='40' r='39' />
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 18' >
            <path d='M12 17H0V10.6199C0 6.75376 2.51213 3.21308 7.53423 0L10.1995 2.14229C8.13535 4.16443 7.01114 6.00986 6.82907 7.67508H12V17Z'/>
            <path d='M26.9993 17H15V10.6199C15 6.75376 17.5215 3.21308 22.5682 0L25.245 2.14229C23.152 4.16443 22.014 6.00986 21.8291 7.67508H27V17H26.9993Z'/>
        </svg>
    ),
    t_double_quotes_close: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 18' style={{rotate: '180deg'}}>
            <path d='M12 17H0V10.6199C0 6.75376 2.51213 3.21308 7.53423 0L10.1995 2.14229C8.13535 4.16443 7.01114 6.00986 6.82907 7.67508H12V17Z'/>
            <path d='M26.9993 17H15V10.6199C15 6.75376 17.5215 3.21308 22.5682 0L25.245 2.14229C23.152 4.16443 22.014 6.00986 21.8291 7.67508H27V17H26.9993Z'/>
        </svg>
    ),
};

export default TOriginalImage;
