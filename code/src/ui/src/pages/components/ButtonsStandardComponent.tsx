import React, { useState, useEffect } from 'react';
import { Button, IconButton, SvgIcon } from '@mui/material';
import { ColorModeSelector } from '../content/ColorModeSelector';
import { HeadingSection } from '../content/HeadingSection';
import { ExampleSection } from '../content/ExampleSection';

interface Props {
}

export const ButtonsStandardComponent: React.FC<Props> = () => {

    const [colorMode, setColorMode] = useState<string>("primary");

    useEffect(() => {
        console.log("ButtonsStandardComponent mounted");
    }, [])

    function barGraphIcon(props?: any) {
        return (
            <SvgIcon {...props}>
                <path d="M2 13H8V21H2V13ZM16 8H22V21H16V8ZM9 3H15V21H9V3ZM4 15V19H6V15H4ZM11 5V19H13V5H11ZM18 10V19H20V10H18Z" />
            </SvgIcon>
        )
    }

    return (
        <div>
            <HeadingSection heading="Standard Buttons" title="Desktop" />
            <ExampleSection>
            <ColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
                <div className="subtitle1">Primary</div>
                <div className="buttonDemo">
                    <Button className="CTA" variant="contained">No Icon</Button>
                    <Button
                        className="CTA"
                        variant="contained"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className="CTA"
                        variant="contained"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="contained" className="CTA">{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Secondary</div>
                <div className="buttonDemo">
                    <Button className="CTA" variant="outlined">No Icon</Button>
                    <Button
                        className="CTA"
                        variant="outlined"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className="CTA"
                        variant="outlined"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="outlined" className="CTA" >{barGraphIcon()}</Button>
                </div>
                <div className="subtitle1">Tertiary</div>
                <div className="buttonDemo">
                    <Button className="CTA" variant="text">No Icon</Button>
                    <Button
                        className="CTA"
                        variant="text"
                        startIcon={barGraphIcon()}
                    >Left Icon</Button>
                    <Button
                        className="CTA"
                        variant="text"
                        endIcon={barGraphIcon()}
                    >Right Icon</Button>
                    <Button variant="text" className="CTA">{barGraphIcon()}</Button>
                </div>
            </ColorModeSelector>
            </ExampleSection>
        </div>
    )
}
