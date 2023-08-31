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
};

export default TOriginalImage;
