import React from 'react'
import styled from 'styled-components'
import is from 'styled-is';

import colors from '../constants/colors';

const TerminalText = styled.p`
	font-family: PT Mono;
	transition: all ease .3s;

	color: ${colors.green};


	${is('mainTitle') `
        font-size: 48px;
        
    `}

    ${is('bold') `
        font-weight: 700;
        
    `}
`

export default TerminalText