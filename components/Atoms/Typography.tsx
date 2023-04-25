import React from "react";
import styled, { css } from "styled-components";

interface TypographyStyle extends React.ComponentPropsWithoutRef<'span'> {
    color?: string
    fontSize?: string
    fontWeight?: string
}

const Typography = styled.span<TypographyStyle>`
    ${props => props.color && css`
        color: ${props.color};
    `};
    ${props => props.fontSize && css`
        font-size: ${props.fontSize};
    `};
`

export default Typography;